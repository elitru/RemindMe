import BaseProps from "./BaseProps";
import BaseState from "./../states/BaseState";
import ReminderHolder from "models/ReminderHolder";

export default class ReminderEditorProps extends BaseProps{
    public reminder: ReminderHolder | null;

    constructor(baseState: BaseState, reminder: ReminderHolder | null = null){
        super(baseState);
        this.reminder = reminder;
    }
}