import BaseProps from "./BaseProps"
import BaseState from "./../states/BaseState";

export default class LoaderProps extends BaseProps{
    public isVisible: boolean = false;

    public static fromBaseProps(baseState: BaseState): LoaderProps{
        return {
            isVisible: false,
            baseState: baseState
        }
    }
}