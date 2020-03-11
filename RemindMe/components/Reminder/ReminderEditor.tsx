import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ReminderEditorState from './../../states/ReminderEditorState';
import ReminderEditorProps from './../../props/ReminderEditorProps';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class ReminderEditor extends Component<ReminderEditorProps, ReminderEditorState>{
    constructor(props: any){
        super(props);
        this.state = ReminderEditorState.fromBaseState(props.baseState);
    }

    /**
     * @description event occurs when user changes the selected birthdate for the reminder
     * @event any
     */
    private onSelectedBirthdateChanged(event: any): void{
        const state: ReminderEditorState = this.state;
        state.isDatePickerVisible = false;
        state.reminder!.person.birthdate = new Date(event.nativeEvent.timestamp);
        this.setState(state);
    }

    render() {
        return (
            <>
                <View style={this.state.style.reminderEditorContainer}>
                    <Text style={this.state.style.reminderEditorHeadline}>Reminder</Text>
                    <TextInput style={this.state.style.reminderEditorInput} placeholder="Firstname" />
                    <TextInput style={this.state.style.reminderEditorInput} placeholder="Lastname" />
                    <TouchableOpacity>
                        <Text>Select birthdate</Text>
                    </TouchableOpacity>
                    {
                        this.state.isDatePickerVisible && (
                            <DateTimePicker 
                                value={this.state.reminder!.person.birthdate}
                                display="default"
                                onChange={this.onSelectedBirthdateChanged} />
                        )
                    }
                </View>
            </>
        );
    }
}