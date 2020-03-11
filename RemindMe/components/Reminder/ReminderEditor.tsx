import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ReminderEditor extends Component{
    constructor(props: any){
        super(props);
    }

    render() {
        return (
            <>
                <View>
                    <Text>Hello from Editor</Text>
                </View>
            </>
        );
    }
}