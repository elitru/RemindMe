import BaseState from "./BaseState";
import { AuthenticationRenderState } from "./../components/Authenticate/Authenticate";

export default class LoginState extends BaseState{
    public username: string = '';
    public password: string = '';
    public isLoading: boolean = false;
    public changeAuthenticationRenderState: ((state: AuthenticationRenderState) => void) | undefined;

    public static fromBaseState(baseState: BaseState, changeAuthenticationRenderState: (state: AuthenticationRenderState) => void): LoginState{
        return {
            password: '',
            username: '',
            isLoading: false,
            changeAuthenticationRenderState: changeAuthenticationRenderState,
            themeHolder: baseState.themeHolder,
            style: baseState.style,
        };
    }
}