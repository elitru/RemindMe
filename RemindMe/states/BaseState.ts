import ThemeHolder from "./../style/ThemeHolder";
import Style from "./../style/Style";
import Loader from "./../components/loader/Loader";
import App from "App";

export default class BaseState{
    public themeHolder: ThemeHolder;
    public style: any;

    constructor(themeHolder: ThemeHolder){
        this.themeHolder = themeHolder;
        this.style = Style.getStyle(themeHolder.getTheme());
    }
}