import React, { Component } from "react";
import ReminderState from "./../../states/ReminderState";
import { View, Text, TouchableOpacity } from "react-native";
import ReminderProps from "./../../props/ReminderProps";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt, faPlusSquare, faCogs } from '@fortawesome/free-solid-svg-icons';
import ReminderItem from "./ReminderItem";
import ReminderHolder, { Person } from "./../../models/ReminderHolder";

export default class Reminder extends Component<ReminderProps, ReminderState>{
    public static readonly MENU_ICON_SIZE: number = 27;

    constructor(props: any){
        super(props);
        this.state = ReminderState.fromBaseState(props.baseState, this.setReminderRenderState);
    }

    render(){
        return(
            <>
                <View style={this.state.style.reminderContainer}>
                    <View style={this.state.style.reminderContent}>
                        <ReminderItem baseState={this.state} reminder={new ReminderHolder(new Person('Elias', 'Trummer', 'elitru', new Date(2002, 10, 17)), require('./../../assets/images/reminder-icons/boy_1.png'))} />
                    </View>
                    {this.renderMenu()}
                </View>
            </>
        );
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