import BaseState from "./BaseState";
import ReminderHolder, { Person } from "./../models/ReminderHolder";

export default class ReminderItemState extends BaseState{
    public reminder: ReminderHolder = new ReminderHolder(new Person('', '', '', new Date()), '');

    public static fromBaseState(baseState: BaseState, reminder: ReminderHolder): ReminderItemState{
        return {
            themeHolder: baseState.themeHolder,
            style: baseState.style,
            reminder: reminder
        };
    }
}