import React, { Component } from "react";
import ReminderState from "./../../states/ReminderState";
import { View, Text, TouchableOpacity, FlatList, ScrollView, Image } from "react-native";
import ReminderProps from "./../../props/ReminderProps";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt, faPlusSquare, faCogs } from '@fortawesome/free-solid-svg-icons';
import ReminderItem from "./ReminderItem";
import ReminderHolder, { Person } from "./../../models/ReminderHolder";
import IconHelper from "./../../utils/IconHelper";
import ReminderHelper from "./../../utils/ReminderHelper";
import ReminderEditor from "./ReminderEditor";
import LinearGradient from "react-native-linear-gradient";

export default class Reminder extends Component<ReminderProps, ReminderState>{
    public static readonly MENU_ICON_SIZE: number = 27;

    constructor(props: any){
        super(props);
        this.state = ReminderState.fromBaseState(props.baseState, this.setReminderRenderState, [
            //new ReminderHolder('0d72597a-6371-463d-87e3-1fe3f0d38d1a', new Person('Denis', 'Imeri', new Date(2003, 6, 23)), IconHelper.NAMES.BOY_1),
            //new ReminderHolder('5b284ab0-1e59-4218-971e-921dc27243c0', new Person('Paul', 'Weiß', new Date(2002, 12, 18)), IconHelper.NAMES.BOY_2),
            //new ReminderHolder('fd910678-6e8d-4905-a4a9-dfe83e082307', new Person('Elias', 'Wilfinger', new Date(2002, 12, 1)), IconHelper.NAMES.BOY_3)
        ]);

        //bind functions
        this.deleteReminder = this.deleteReminder.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.menuItemBackground = this.menuItemBackground.bind(this);
    }

    componentDidMount(): void{
        const state: ReminderState = this.state;
        ReminderHelper.getAllLocal().then((reminders: ReminderHolder[]) => {
            state.reminders = reminders;
            this.setState(state);
        });
    }

    render(){
        return(
            <>
                <View style={this.state.style.reminderContainer}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} style={this.state.style.reminderGradient} colors={[this.state.themeHolder.getTheme().secondary, this.state.themeHolder.getTheme().primary]}>
                        <ScrollView style={this.state.style.reminderContent} contentContainerStyle={{justifyContent: 'center'}}>
                            {this.renderContent()}
                        </ScrollView>
                        {this.renderMenu()}
                    </LinearGradient>
                </View>
            </>
        );
    }

    /**
     * @description delets a reminder from the list view
     * @todo also make request to server to delete reminder there
     */
    public deleteReminder(reminder: ReminderHolder): void{
        const state: ReminderState = this.state;
        for(let i = 0; i < state.reminders.length; i++){
            if(state.reminders[i] == reminder){
                state.reminders.splice(i, 1);
                this.setState(state);
                ReminderHelper.saveToLocal(state.reminders);
                return;
            }
        }
    }

    /**
     * @description adds a new reminder
     */
    public addReminder(reminder: ReminderHolder): void{
        
    }

    /**
     * @description change the currently active page
     */
    public setReminderRenderState(reminderState: ReminderRenderState): void{
        const state: ReminderState = this.state;
        state.reminderRenderState = reminderState;
        this.setState(state);
    }

    /**
     * @description returns the content according on the selected menu item
     */
    private renderContent(){
        switch(this.state.reminderRenderState){
            case ReminderRenderState.REMINDERS:
                return (
                    <>
                        {
                            this.state.reminders.map((reminder: ReminderHolder) => { return (
                                <ReminderItem key={reminder.id} baseState={this.state} reminder={reminder} deleteReminder={this.deleteReminder} />
                            )})
                        }
                    </>
                );

            case ReminderRenderState.ADD_REMINDER:
                return (
                    <ReminderEditor baseState={this.state} reminder={null} />
                );
                    
            default:
                return null;
        }
    }

    /**
     * @description renders the bottom menu
     */
    private renderMenu(){
        return (
            <View style={this.state.style.reminderMenu}>
                <TouchableOpacity 
                    style={[this.state.style.reminderMenuItem, {backgroundColor: this.menuItemBackground(ReminderRenderState.REMINDERS)}]}
                    onPress={(e) => this.setReminderRenderState(ReminderRenderState.REMINDERS)}>
                    <Image 
                        style={[this.state.style.reminderMenuItemImage]} 
                        source={require('./../../assets/images/menu/bell.png')} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[this.state.style.reminderMenuItem, {backgroundColor: this.menuItemBackground(ReminderRenderState.ADD_REMINDER)}]}
                    onPress={(e) => this.setReminderRenderState(ReminderRenderState.ADD_REMINDER)}>
                    <Image 
                        style={[this.state.style.reminderMenuItemImage]} 
                        source={require('./../../assets/images/menu/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[this.state.style.reminderMenuItem, {backgroundColor: this.menuItemBackground(ReminderRenderState.SETTINGS)}]}
                    onPress={(e) => this.setReminderRenderState(ReminderRenderState.SETTINGS)}>
                    <Image 
                        style={[this.state.style.reminderMenuItemImage]} 
                        source={require('./../../assets/images/menu/gear.png')} />
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * @description returns the background color of a menu item to define to show user which menu item is currently selected
     */
    private menuItemBackground(renderState: ReminderRenderState) {
        return this.state.reminderRenderState == renderState ?
            this.state.themeHolder.getTheme().menubar_background_active :
            this.state.themeHolder.getTheme().menubar_background;
    }
}

/**
 * @description possible render states of the reminder activity
 */
export enum ReminderRenderState{
    REMINDERS,
    ADD_REMINDER,
    SETTINGS
}