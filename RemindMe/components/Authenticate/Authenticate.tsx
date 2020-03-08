import React, { Component } from 'react';
import BaseProps from 'props/BaseProps';
import BaseState from 'states/BaseState';
import AuthenticationHelper from './../../utils/AuthenticationHelper';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import AuthenticationState from './../../states/AuthenticationState';

export default class Authenticate extends Component<BaseProps, AuthenticationState>{
    constructor(props: any){
        super(props);
        this.state = AuthenticationState.fromBaseState(props.baseState, AuthenticationRenderState.NONE);
        this.setAuthenticationRenderState = this.setAuthenticationRenderState.bind(this);

        //check whether user is logged in or not
        AuthenticationHelper.isLoggedIn().then((result: boolean)=> {
            if(result){
                this.setAuthenticationRenderState(AuthenticationRenderState.NONE);
            }
            
            this.setAuthenticationRenderState(AuthenticationRenderState.LOGIN);
        });
    }

    /**
     * @description changes the render state
     * @param state the new state which will be set
     */
    public setAuthenticationRenderState(authenticationState: AuthenticationRenderState): void{
        const state: AuthenticationState = this.state;
        state.authenticationRenderState = authenticationState;
        this.setState(state);
    }

    render(){
       switch(this.state.authenticationRenderState){
           case AuthenticationRenderState.LOGIN:
               return (
                   <Login baseState={this.state} changeAuthenticationRenderState={this.setAuthenticationRenderState} />
               );

            case AuthenticationRenderState.REGISTRATION:
                return (
                    <Registration baseState={this.state} changeAuthenticationRenderState={this.setAuthenticationRenderState} />
                );

            default:
                return null;
       }
    }
}

/**
 * @description render states of authentication component
 */
export enum AuthenticationRenderState{
    LOGIN,
    REGISTRATION,
    NONE
}