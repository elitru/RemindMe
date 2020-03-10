import BaseProps from "./BaseProps";
import BaseState from "./../states/BaseState";
import ReminderHolder from "../models/ReminderHolder";

export default class ReminderItemProps extends BaseProps{
    public reminder: ReminderHolder;
    public deleteReminder: ((reminder: ReminderHolder) => void) | undefined;

    constructor(baseState: BaseState, reminder: ReminderHolder, deleteReminder: ((reminder: ReminderHolder) => void) | undefined){
        super(baseState);
        this.reminder = reminder;
        this.deleteReminder = deleteReminder;
    }
}