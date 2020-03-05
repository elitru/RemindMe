import React from 'react';
import LoginState from './../../states/LoginState';
import { Text, View, TextInput, Button, TouchableOpacity, GestureResponderEvent, TouchableHighlightBase } from 'react-native';
import BaseProps from './../../props/BaseProps';

export default class Login extends React.Component<BaseProps, LoginState>{
    constructor(props: any){
        super(props);
        const state: LoginState = LoginState.fromBaseState(props.baseState);
        this.state = state;
    }

    /**
     * @event onChangeText
     * @param text current text from input
     * @description event is fired when text pf username input changes -> updates state
     */
    private onUsernameChanged(text: string): void{

    }

    /**
     * @event GestureResponderEvent
     * @param event event details
     * @description event if fired when user clicks on login button
     */
    private onLogin(event: GestureResponderEvent): void{

    }

    private onGoToRegister(event: GestureResponderEvent): void{

    }

    render() {
        return(
            <>
                <View style={this.state.style.loginContainer}>
                    <Text style={this.state.style.loginHeadline}>Remind Me</Text>
                    <View style={this.state.style.loginInputContainer}>
                        <TextInput placeholder="Username" style={[this.state.style.defaultInputDark, this.state.style.spaceBottom]} onChangeText={this.onUsernameChanged} />
                        <TextInput placeholder="Password" style={this.state.style.defaultInputDark} secureTextEntry={true} />
                        <View style={this.state.style.loginItemContainer}>
                            <TouchableOpacity onPress={this.onLogin} style={this.state.style.defaultButtonPrimary}>
                                <Text style={this.state.style.defaultButtonPrimaryText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[this.state.style.spaceTop, this.state.style.loginItemContainer]}>
                            <TouchableOpacity onPress={this.onGoToRegister}>
                                <Text style={this.state.style.defaultLink}>You don't have an account yet?{'\n'}Register <Text style={this.state.style.colorPrimary}>here</Text></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    }
}