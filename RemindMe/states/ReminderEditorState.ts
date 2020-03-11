import BaseState from "./BaseState";
import ReminderHolder, { Person } from "./../models/ReminderHolder";
import IconHelper from "./../utils/IconHelper";
import UUID from 'react-native-uuid';

export default class ReminderEditorState extends BaseState{
    public reminder: ReminderHolder | null = null;
    public isDatePickerVisible: boolean = false;

    public static fromBaseState(baseState: BaseState, reminder: ReminderHolder | null = null): ReminderEditorState{
        return {
            themeHolder: baseState.themeHolder,
            style: baseState.style,
            reminder: reminder == null ? new ReminderHolder(UUID.v4(), new Person('', '', new Date()), IconHelper.NAMES.BABY) : reminder,
            isDatePickerVisible: false
        };
    }
}