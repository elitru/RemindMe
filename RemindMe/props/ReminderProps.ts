import BaseProps from "./BaseProps";
import { AuthenticationRenderState } from "components/Authenticate/Authenticate";
import BaseState from "states/BaseState";

export default class ReminderProps extends BaseProps{
    constructor(baseState: BaseState){
        super(baseState);
    }
}