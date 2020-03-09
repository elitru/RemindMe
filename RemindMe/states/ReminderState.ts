import BaseState from "./BaseState";
import { ReminderRenderState } from "./../components/Reminder/Reminder";

export default class ReminderState extends BaseState{
    public reminderRenderState: ReminderRenderState = ReminderRenderState.REMINDERS;
    public changeReminderState: ((reminderState: ReminderRenderState) => void) | undefined;

    public static fromBaseState(baseState: BaseState, changeReminderState: (reminderState: ReminderRenderState) => void, reminderRenderState: ReminderRenderState = ReminderRenderState.REMINDERS): ReminderState{
        return {
            themeHolder: baseState.themeHolder,
            style: baseState.style,
            reminderRenderState: reminderRenderState,
            changeReminderState: changeReminderState
        };
    }
}