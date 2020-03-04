import BaseState from "./BaseState";

export default class LoginState extends BaseState{
    public username: string = '';
    public password: string = '';

    public static fromBaseState(baseState: BaseState): LoginState{
        return {
            password: '',
            username: '',
            themeHolder: baseState.themeHolder,
            style: baseState.style
        };
    }
}