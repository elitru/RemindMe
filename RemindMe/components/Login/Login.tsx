import React from 'react';
import LoginState from './../../states/LoginState';
import { Text } from 'react-native';
import BaseProps from './../../props/BaseProps';

export default class Login extends React.Component<BaseProps, LoginState>{
    constructor(props: any){
        super(props);
        const state: LoginState = LoginState.fromBaseState(props.baseState);
        this.state = state;
    }

    render() {
        return(
            <>
                <Text style={this.state.style.test}>test</Text>
            </>
        );
    }
}