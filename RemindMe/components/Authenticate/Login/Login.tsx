import React from 'react';
import LoginState from '../../../states/LoginState';
import { Text, View, TextInput, Button, TouchableOpacity, GestureResponderEvent, TouchableHighlightBase, Image } from 'react-native';
import Loader from '../../loader/Loader';
import LoginProps from './../../../props/LoginProps';
import { AuthenticationRenderState } from '../Authenticate';

export default class Login extends React.Component<LoginProps, LoginState>{
    constructor(props: any){
        super(props);
        const state: LoginState = LoginState.fromBaseState(props.baseState, props.changeAuthenticationRenderState);
        this.state = state;

        //bind functions
        this.onUsernameChanged = this.onUsernameChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onGoToRegister = this.onGoToRegister.bind(this);
    }

    /**
     * @event onChangeText
     * @param text current text from input
     * @description event is fired when text of username input changes (username) -> updates state
     */
    private onUsernameChanged(text: string): void{
        const state: LoginState = this.state;
        state.username = text;
        this.setState(state);
    }

    /**
     * @event onChangeText
     * @param text current text from input
     * @description event is fired when text of password input changes (password) -> updates state
     */
    private onPasswordChanged(text: string): void{
        const state: LoginState = this.state;
        state.password = text;
        this.setState(state);
    }

    /**
     * @event GestureResponderEvent
     * @param event event details
     * @description event is fired when user clicks on login button
     */
    private onLogin(event: GestureResponderEvent): void{
        this.state.changeAuthenticationRenderState!(AuthenticationRenderState.REMINDER);
    }

    /**
     * @event GestureResponderEvent
     * @param event event details
     * @description event is fired when user wants to go to user registration page
     */
    private onGoToRegister(event: GestureResponderEvent): void{
        this.state.changeAuthenticationRenderState!(AuthenticationRenderState.REGISTRATION);
    }

    render() {
        return(
            <>
                { this.state.isLoading ? <Loader baseState={this.props.baseState} isVisible={true} /> : null}
                { this.state.isLoading ? null :
                    <View style={this.state.style.loginContainer}>
                        <Text style={this.state.style.loginHeadline}>Remind Me</Text>
                        <View style={this.state.style.loginInputContainer}>
                            <TextInput placeholder="Username" style={[this.state.style.defaultInputDark, this.state.style.spaceBottom]} onChangeText={this.onUsernameChanged} />
                            <TextInput placeholder="Password" style={this.state.style.defaultInputDark} secureTextEntry={true} onChangeText={this.onPasswordChanged} />
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
                }
            </>
        );
    }
}