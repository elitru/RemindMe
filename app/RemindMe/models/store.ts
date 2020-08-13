import { ThemeProvider } from "../providers/theme-provider";
import { Theme } from "../themes/theme";
import { UserProvider } from "../providers/user-provider";
import { AssetsProvider } from "../providers/assets-provider";
import { TranslationsProvider } from "../providers/translations-provider";

/**
 * @description provides data all over the application
 */
export class Store {
    public themeProvider: ThemeProvider;
    public userProvider: UserProvider;
    public assetsProvider: AssetsProvider;
    public translationsProvider: TranslationsProvider;

    constructor(themeProvider: ThemeProvider,
                userProvider: UserProvider,
                assetsProvider: AssetsProvider,
                translationsProvider: TranslationsProvider) {
        this.themeProvider = themeProvider;
        this.userProvider = userProvider;
        this.assetsProvider = assetsProvider;
        this.translationsProvider = translationsProvider;
    }
}