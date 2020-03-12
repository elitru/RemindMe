import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, GestureResponderEvent } from 'react-native';
import ReminderEditorState from './../../states/ReminderEditorState';
import ReminderEditorProps from './../../props/ReminderEditorProps';
import DateTimePicker from '@react-native-community/datetimepicker';
import Utils from './../../utils/Utils';

export default class ReminderEditor extends Component<ReminderEditorProps, ReminderEditorState>{
    constructor(props: any){
        super(props);
        this.state = ReminderEditorState.fromBaseState(props.baseState);

        //bind functions
        this.onSelectedBirthdateChanged = this.onSelectedBirthdateChanged.bind(this);
        this.onShowBirthdateSelector = this.onShowBirthdateSelector.bind(this);
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

    /**
     * @description event is fired whene user clicks on select birthdate or his already selected birthdate
     * @event GestureResponderEvent
    */
    private onShowBirthdateSelector(event: GestureResponderEvent): void{
        const state: ReminderEditorState = this.state;
        state.isDatePickerVisible = true;
        this.setState(state);
    }

    render() {
        return (
            <>
                <View style={this.state.style.reminderEditorContainer}>
                    <Text style={this.state.style.reminderEditorHeadline}>Reminder</Text>
                    <TextInput style={this.state.style.reminderEditorInput} placeholder="Firstname" placeholderTextColor={this.state.themeHolder.getTheme().editor_placeholder} />
                    <TextInput style={this.state.style.reminderEditorInput} placeholder="Lastname" placeholderTextColor={this.state.themeHolder.getTheme().editor_placeholder} />
                    <TouchableOpacity 
                        style={this.state.style.ReminderEditorBirthdate}
                        onPress={this.onShowBirthdateSelector}>
                        <Text style={[this.state.style.ReminderEditorBirthdateText, 
                            {color: this.isBirthdateSelected() ? 
                                this.state.themeHolder.getTheme().editor_color :
                                this.state.themeHolder.getTheme().editor_placeholder}]}>
                                    {
                                        !this.isBirthdateSelected() ?
                                        'Select birthdate' :
                                        Utils.getFormattedDate(this.state.reminder!.person)
                                    }
                                </Text>
                    </TouchableOpacity>
                    {
                        this.state.isDatePickerVisible && (
                            <DateTimePicker 
                                value=
                                {
                                    !this.isBirthdateSelected() ?
                                    new Date() :
                                    this.state.reminder!.person.birthdate
                                }
                                display="spinner"
                                onChange={this.onSelectedBirthdateChanged} />
                        )
                    }
                </View>
            </>
        );
    }

    private isBirthdateSelected(): boolean{
        return !(this.state.reminder?.person.birthdate.toUTCString() == new Date(1, 1, 1).toUTCString());
    }
}