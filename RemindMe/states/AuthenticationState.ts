import BaseState from "./BaseState";
import { AuthenticationRenderState } from "./../components/Authenticate/Authenticate";

export default class AuthenticationState extends BaseState{
    /**
     * @description the currently active render state defining what will be renderd (Login screen, Register screen, none)
     */
    public authenticationRenderState: AuthenticationRenderState = AuthenticationRenderState.NONE;

    public static fromBaseState(baseState: BaseState, state: AuthenticationRenderState): AuthenticationState{
        return {
            authenticationRenderState: state,
            themeHolder: baseState.themeHolder,
            style: baseState.style
        }
    }
}