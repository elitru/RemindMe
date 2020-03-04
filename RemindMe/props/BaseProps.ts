import BaseState from "states/BaseState";

export default class BaseProps{
    public baseState: BaseState;

    constructor(baseState: BaseState){
        this.baseState = baseState;
    }
}