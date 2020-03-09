import BaseProps from "./BaseProps";
import BaseState from "./../states/BaseState";
import ReminderHolder from "../models/ReminderHolder";

export default class ReminderItemProps extends BaseProps{
    public reminder: ReminderHolder;

    constructor(baseState: BaseState, reminder: ReminderHolder){
        super(baseState);
        this.reminder = reminder;
    }
}