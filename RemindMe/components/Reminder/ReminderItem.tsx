import React, { Component } from 'react';
import { View, Image, Text, PanResponderGestureState, StyleSheet, Alert } from 'react-native';
import ReminderItemState from './../../states/ReminderItemState';
import ReminderItemProps from './../../props/ReminderItemProps';
import GestureRecognizer from 'react-native-swipe-gestures';
import Utils from './../../utils/Utils';

export default class ReminderItem extends Component<ReminderItemProps, ReminderItemState>{

    constructor(props: any){
        super(props);
        this.state = ReminderItemState.fromBaseState(props.baseState, props.reminder, props.deleteReminder);

        //bind functions
        this.onDelete = this.onDelete.bind(this);
    }

    /**
     * @description deletes reminder entry when user swipes to the left
     * @event PanResponderGestureState#
     */
    private onDelete(gestureState: PanResponderGestureState): void{
        const state: ReminderItemState = this.state;
        state.reminderBackground = state.themeHolder.getTheme().reminder_item_delete_background;
        this.setState(state);

        Alert.alert(
            'Reminder löschen',
            'Willst du diesen Eintrag wirklich löschen?',
            [
                {
                    text: 'Ja',
                    onPress: () => this.state.deleteReminder!(this.state.reminder)
                },
                {
                    text: 'Nein',
                    onPress: () => {
                        const state: ReminderItemState = this.state;
                        state.reminderBackground = state.themeHolder.getTheme().reminder_item_background;
                        this.setState(state);
                    }
                },
            ],
            {
                cancelable: true
            }
        );
    }

    render(){
        const { reminder } = this.state;
        return (
            <>
                <GestureRecognizer onSwipeLeft={this.onDelete}>
                    <View style={[this.state.style.reminderItemContainer, {backgroundColor: this.state.reminderBackground}]}>
                        <Image style={this.state.style.reminderItemIcon} source={this.state.reminder.icon} />
                        <View style={this.state.style.reminderItemTextContainer}>
                            <View>
                                <Text style={this.state.style.reminderItemName}>
                                    {reminder.person.firstname} {reminder.person.lastname}
                                </Text>
                            </View>
                            <View>
                                <Text style={this.state.style.reminderItemBirthdate}>
                                    {Utils.getFormattedDate(reminder.person) + ' (' + Utils.getAge(reminder.person) + ')'}
                                </Text>
                            </View>
                        </View>
                    </View>
                 </GestureRecognizer>
            </>
        );
    }
}