import { Theme } from "../themes/theme";

import { observable } from 'mobx';
import { StorageProvider, StorageKeys } from "./storage-provider";

/**
 * @description provides the currently selected theme
 */
export class ThemeProvider {
    @observable
    public theme: Theme | null = null;

    constructor() {
        this.loadSelectedThemeFromStorage();
    }

    private async loadSelectedThemeFromStorage(): Promise<void> {
        try {
            const themeRaw: string | null = await StorageProvider.get<string>(StorageKeys.Theme);
            const theme: Themes | null = !themeRaw ? null : +themeRaw;
            
            if(!theme) {
                this.setTheme(Themes.DEFAULT);
                return;
            }

            this.setTheme(theme);
        }catch(e){
            this.setTheme(Themes.DEFAULT);
        }
    }

    public async setTheme(theme: Themes): Promise<void> {
        this.theme = THEMES[THEMES.map(theme => theme.id).indexOf(theme)];
        
        try {
            await StorageProvider.set(StorageKeys.Theme, theme + "");
        }catch(e) {
            throw e;
        }
    }
}

/**
 * @description defines all available themes
 */
export enum Themes {
    DEFAULT = 0
}

/**
 * @description all available themes
 */
const THEMES: Theme[] = [
    //Default
    {
        id: Themes.DEFAULT,
        primary_1: '#004B40',
        primary_2: '#1A6254',
        primary_3: '#D8E6E2',
        background_primary: '#ffffff',
        background_secondary: '#FAFAFA',
        input_color_foreground: '#333333',
        input_placeholder_foreground: '#BDBDBD',
        drop_shadow: 'rgba(0, 0, 0, .3)',
        title_foreground: '#D8E6E2'
    }
];