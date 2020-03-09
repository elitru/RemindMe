import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import ReminderItemState from './../../states/ReminderItemState';
import ReminderItemProps from './../../props/ReminderItemProps';

export default class ReminderItem extends Component<ReminderItemProps, ReminderItemState>{

    constructor(props: any){
        super(props);
        this.state = ReminderItemState.fromBaseState(props.baseState, props.reminder);
    }

    render(){
        return (
            <>
                <View style={this.state.style.reminderItemContainer}>
                    <Image style={this.state.style.reminderItemIcon} source={this.state.reminder.icon} />
                    <View style={this.state.style.reminderItemTextContainer}>
                        
                    </View>
                </View>
            </>
        );
    }
}