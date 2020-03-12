import BaseState from "./BaseState";
import { ReminderRenderState } from "./../components/Reminder/Reminder";
import ReminderHolder from "models/ReminderHolder";

export default class ReminderState extends BaseState{
    public reminderRenderState: ReminderRenderState = ReminderRenderState.REMINDERS;
    public changeReminderState: ((reminderState: ReminderRenderState) => void) | undefined;
    public reminders: ReminderHolder[] = [];

    public static fromBaseState(baseState: BaseState, changeReminderState: (reminderState: ReminderRenderState) => void, reminders: ReminderHolder[] = [], reminderRenderState: ReminderRenderState = ReminderRenderState.ADD_REMINDER): ReminderState{
        return {
            themeHolder: baseState.themeHolder,
            style: baseState.style,
            reminderRenderState: reminderRenderState,
            changeReminderState: changeReminderState,
            reminders: reminders
        };
    }
}