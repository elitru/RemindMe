import React, { Component } from "react";
import ReminderState from "./../../states/ReminderState";
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import ReminderProps from "./../../props/ReminderProps";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt, faPlusSquare, faCogs } from '@fortawesome/free-solid-svg-icons';
import ReminderItem from "./ReminderItem";
import ReminderHolder, { Person } from "./../../models/ReminderHolder";
import IconHelper from "./../../utils/IconHelper";
import ReminderHelper from "./../../utils/ReminderHelper";

export default class Reminder extends Component<ReminderProps, ReminderState>{
    public static readonly MENU_ICON_SIZE: number = 27;

    constructor(props: any){
        super(props);
        this.state = ReminderState.fromBaseState(props.baseState, this.setReminderRenderState, []);

        //bind functions
        this.deleteReminder = this.deleteReminder.bind(this);
    }

    componentDidMount(): void{
        const state: ReminderState = this.state;
        ReminderHelper.getAllLocal().then((reminders: ReminderHolder[]) => {
            
        });
    }

    render(){
        return(
            <>
                <View style={this.state.style.reminderContainer}>
                    <ScrollView style={this.state.style.reminderContent}>
                        {
                            this.state.reminders.map((reminder: ReminderHolder) => { return (
                                <ReminderItem key={reminder.id} baseState={this.state} reminder={reminder} deleteReminder={this.deleteReminder} />
                            )})
                        }
                    </ScrollView>
                    {this.renderMenu()}
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
     * @description renders the bottom menu
     */
    private renderMenu(){
        return (
            <View style={this.state.style.reminderMenu}>
                <TouchableOpacity 
                style={this.state.style.reminderMenuItem}
                onPress={(e) => this.setReminderRenderState(ReminderRenderState.REMINDERS)}>
                    <FontAwesomeIcon icon={faCalendarAlt} 
                    size={Reminder.MENU_ICON_SIZE} 
                    style={this.state.reminderRenderState == ReminderRenderState.REMINDERS ? 
                        this.state.style.reminderMenuItemIconActive :
                        this.state.style.reminderMenuItemIcon} />
                </TouchableOpacity>
                <TouchableOpacity 
                style={this.state.style.reminderMenuItem}
                onPress={(e) => this.setReminderRenderState(ReminderRenderState.ADD_REMINDER)}>
                    <FontAwesomeIcon icon={faPlusSquare} 
                    size={Reminder.MENU_ICON_SIZE} 
                    style={this.state.reminderRenderState == ReminderRenderState.ADD_REMINDER ? 
                        this.state.style.reminderMenuItemIconActive :
                        this.state.style.reminderMenuItemIcon} />
                </TouchableOpacity>
                <TouchableOpacity 
                style={this.state.style.reminderMenuItem}
                onPress={(e) => this.setReminderRenderState(ReminderRenderState.SETTINGS)}>
                    <FontAwesomeIcon icon={faCogs} 
                    size={Reminder.MENU_ICON_SIZE} 
                    style={this.state.reminderRenderState == ReminderRenderState.SETTINGS ? 
                        this.state.style.reminderMenuItemIconActive :
                        this.state.style.reminderMenuItemIcon} />
                </TouchableOpacity>
            </View>
        );
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