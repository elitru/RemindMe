import BaseState from "./BaseState";

export default class LoaderState extends BaseState{
    public isVisible: boolean = false;

    public static fromBaseState(baseState: BaseState, isVisible: boolean): LoaderState{
        return {
            isVisible: isVisible,
            themeHolder: baseState.themeHolder,
            style: baseState.style
        }
    }
}