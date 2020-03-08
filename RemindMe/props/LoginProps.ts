import BaseProps from "./BaseProps";
import { AuthenticationRenderState } from "components/Authenticate/Authenticate";
import BaseState from "states/BaseState";

export default class LoginProps extends BaseProps{
    public changeAuthenticationRenderState: ((state: AuthenticationRenderState) => void) | undefined;

    constructor(baseState: BaseState, changeAuthenticationRenderState: (state: AuthenticationRenderState) => void){
        super(baseState);
        this.changeAuthenticationRenderState = changeAuthenticationRenderState;
    }
}