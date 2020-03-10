/**
 * @description used for managing the color schemes
 */
export default class ThemeHolder {
    /**
     * @description array which contains all available color schemes
     */
    private themes: Theme[] = [
        new Theme('default', '#FF6B35', '#004E89', '#fff', '#333', '#eee', '#e7e7e7', '#e1e1e1', '#888', '#FF6B35', '#ececec', '#dadada', '#444', '#666', '#e56565')
    ];
    /**
     * @description the active color theme
     */
    private active: Theme = this.themes[0];

    constructor(themeName: string = 'default'){
        this.setTheme(themeName);
    }

    /**
     * @description changes the current color scheme
     * @param themeName name of the theme, which should be loaded
     */
    public setTheme(themeName: string): void{
        this.active = this.themes[0];

        this.themes.forEach((t: Theme) => {
            if(t.name === themeName){
                this.active = t;
            }
        });
    }

    /**
     * @returns the current active color scheme
     */
    public getTheme(): Theme{
        return this.active;
    }
}

/**
 * @description template for a color theme
 */
export class Theme{
    /**
     * @description name of the color scheme
     */
    public readonly name: string;

    //colors of theme
    public readonly primary: string;
    public readonly secondary: string;
    public readonly foreground_light: string;
    public readonly foreground_dark: string;
    public readonly background: string;
    public readonly menubar: string;
    public readonly menubar_border: string;
    public readonly menubar_foreground: string;
    public readonly menubar_foreground_active: string;
    public readonly reminder_item_background: string;
    public readonly reminder_item_border: string;
    public readonly reminder_item_name: string;
    public readonly reminder_item_birthdate: string;
    public readonly reminder_item_delete_background: string;

    constructor(name: string, 
        primary: string, 
        secondary: string, 
        foreground_light: string, 
        foreground_dark: string, 
        background: string, 
        menubar: string, 
        menubar_border: string, 
        menubar_foreground: string, 
        menubar_foreground_active: string,
        reminder_item_background: string,
        reminder_item_border: string,
        reminder_item_name: string,
        reminder_item_birthdate: string,
        reminder_item_delete_background: string){
        this.name = name;
        this.primary = primary;
        this.secondary = secondary;
        this.foreground_light = foreground_light;
        this.foreground_dark = foreground_dark;
        this.background = background;
        this.menubar = menubar;
        this.menubar_border = menubar_border;
        this.menubar_foreground = menubar_foreground;
        this.menubar_foreground_active = menubar_foreground_active;
        this.reminder_item_background = reminder_item_background;
        this.reminder_item_border = reminder_item_border;
        this.reminder_item_name = reminder_item_name;
        this.reminder_item_birthdate = reminder_item_birthdate;
        this.reminder_item_delete_background = reminder_item_delete_background;
    }
}