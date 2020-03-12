import React, { Component } from 'react';
import RegistrationState from './../../../states/RegistrationState';
import RegistrationProps from '../../../props/RegistrationProps';
import { View, Text, GestureResponderEvent, TextInput, TouchableOpacity } from 'react-native';
import { AuthenticationRenderState } from '../Authenticate';
import Loader from './../../../components/loader/Loader';
import LinearGradient from 'react-native-linear-gradient';

export default class Registration extends Component<RegistrationProps, RegistrationState>{
    constructor(props: any){
        super(props);
        const state: RegistrationState = RegistrationState.fromBaseState(props.baseState, props.changeAuthenticationRenderState);
        this.state = state;

        //bind functions
        this.onUsernameChanged = this.onUsernameChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onPasswordRepeatChanged = this.onPasswordRepeatChanged.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.onGoToLogin = this.onGoToLogin.bind(this);
    }

    /**
     * @event onChangeText
     * @param text current text from input
     * @description event is fired when text pf username input changes (username) -> updates state
     */
    private onUsernameChanged(text: string): void{
        const state: RegistrationState = this.state;
        state.username = text;
        this.setState(state);
    }

    /**
     * @event onChangeText
     * @param text current text from input
     * @description event is fired when text of password input changes (password) -> updates state
     */
    private onPasswordChanged(text: string): void{
        const state: RegistrationState = this.state;
        state.password = text;
        this.setState(state);
    }

    /**
     * @event onChangeText
     * @param text current text from input
     * @description event is fired when text of password repeat input changes (password) -> updates state
     */
    private onPasswordRepeatChanged(text: string): void{
        const state: RegistrationState = this.state;
        state.repeatPassword = text;
        this.setState(state);
    }

    /**
     * @event GestureResponderEvent
     * @param event event details
     * @description event is fired when user clicks on login button
     */
    private onRegister(event: GestureResponderEvent): void{

    }

    /**
     * @event GestureResponderEvent
     * @param event event details
     * @description event is fired when user wants to go to user registration page
     */
    private onGoToLogin(event: GestureResponderEvent): void{
        this.state.changeAuthenticationRenderState!(AuthenticationRenderState.LOGIN);
    }

    render() {
        return(
            <>
                { this.state.isLoading ? <Loader baseState={this.props.baseState} isVisible={true} /> : null}
                { this.state.isLoading ? null :
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} style={this.state.style.loginGradient} colors={[this.state.themeHolder.getTheme().secondary, this.state.themeHolder.getTheme().primary]}>
                        <View style={this.state.style.loginContainer}>
                            <View style={this.state.style.loginHeadlineContainer}>
                                <Text style={this.state.style.loginHeadline}>Hello There.</Text>
                                <Text style={this.state.style.loginSubHeadline}>Login in or sign up to continue.</Text>
                            </View>
                            <View style={[this.state.style.loginInputContainer]}>
                                <TextInput placeholder="Username" style={[this.state.style.loginInput, this.state.style.spaceBottom, {marginTop: 0}]} onChangeText={this.onUsernameChanged} />
                                <TextInput placeholder="Password" style={[this.state.style.loginInput, this.state.style.spaceBottom]} secureTextEntry={true} onChangeText={this.onPasswordChanged} />
                                <TextInput placeholder="Repeat password" style={this.state.style.loginInput} secureTextEntry={true} onChangeText={this.onPasswordRepeatChanged} />
                                <View style={this.state.style.loginItemContainer}>
                                    <TouchableOpacity onPress={this.onRegister} style={this.state.style.defaultButtonPrimary}>
                                        <Text style={this.state.style.defaultButtonPrimaryText}>Sign up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[this.state.style.loginItemContainer, {flexGrow: 0, paddingBottom: 30}]}>
                                <TouchableOpacity onPress={this.onGoToLogin}>
                                    <Text style={this.state.style.loginLink}>You do already have an account yet?{'\n'}Login <Text style={this.state.style.colorPrimary}>here</Text></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                }
            </>
        );
    }
}