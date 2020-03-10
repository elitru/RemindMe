import BaseState from "./BaseState";
import ReminderHolder, { Person } from "./../models/ReminderHolder";

export default class ReminderItemState extends BaseState{
    public reminder: ReminderHolder = new ReminderHolder(new Person('', '', new Date()), '');
    public reminderBackground: string = '';
    public deleteReminder: ((reminder: ReminderHolder) => void) | undefined;

    public static fromBaseState(baseState: BaseState, reminder: ReminderHolder, deleteReminder: (reminder: ReminderHolder) => void): ReminderItemState{
        return {
            themeHolder: baseState.themeHolder,
            style: baseState.style,
            reminder: reminder,
            reminderBackground: baseState.themeHolder.getTheme().reminder_item_background,
            deleteReminder: deleteReminder
        };
    }
}