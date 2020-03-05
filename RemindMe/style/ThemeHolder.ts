/**
 * @description used for managing the color schemes
 */
export default class ThemeHolder {
    /**
     * @description array which contains all available color schemes
     */
    private themes: Theme[] = [
        new Theme('default', '#FF6B35', '#004E89', '#fff', '#333', '#eee'),
        new Theme('default_bad', '#20fc8f', '#19844e', '#fff', '#2d2d2a', '#3f5e5a')
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

    constructor(name: string, primary: string, secondary: string, foreground_light: string, foreground_dark: string, background: string){
        this.name = name;
        this.primary = primary;
        this.secondary = secondary;
        this.foreground_light = foreground_light;
        this.foreground_dark = foreground_dark;
        this.background = background;
    }
}