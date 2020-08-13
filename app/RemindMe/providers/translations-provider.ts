import { observable } from "mobx";
import { StorageKeys, StorageProvider } from "./storage-provider";
import { Themes } from "./theme-provider";
import { Translation } from "../models/translation";

/**
 * @description definea all supported languages
 */
export enum Languages {
    DE = 0,
    EN = 1
}

/**
 * @description provides access to the translations & the language selection
 */
export class TranslationsProvider {
    private static readonly DEFAULT_LANGUAGE = Languages.EN;

    @observable
    public language: Languages = TranslationsProvider.DEFAULT_LANGUAGE;

    @observable
    public translation: Translation | null = null;

    constructor() {
        this.loadLanguageFromStorage();
    }

    private async loadLanguageFromStorage(): Promise<void> {
        try {
            const languageRaw: string | null = await StorageProvider.get<string>(StorageKeys.Language);
            const language: Languages | null = !languageRaw ? null : +languageRaw;
            
            if(!language) {
                this.setLanguage(TranslationsProvider.DEFAULT_LANGUAGE);
                return;
            }

            this.setLanguage(language);
        }catch(e){
            this.setLanguage(TranslationsProvider.DEFAULT_LANGUAGE);
        }
    }

    public async setLanguage(language: Languages): Promise<void> {
        this.language = language;
        this.translation = TRANSLATIONS[TRANSLATIONS.map(translation => translation.id).indexOf(language)];
        console.log(this.translation)
        
        try {
            await StorageProvider.set(StorageKeys.Language, language + "");
        }catch(e) {
            throw e;
        }
    }
}

/**
 * @description defines all translations for all languages
 */
const TRANSLATIONS: Translation[] = [
    {
        id: Languages.EN,
        AppTitle: 'RemindMe',
        Back: 'Go back',
        Email: 'Email',
        ForgotPassword: 'Forgot password?',
        Login: 'Login',
        Ok: 'Ok',
        NoAccountYet: 'NO ACCOUNT? SIGN UP FOR FREE',
        Password: 'Password',
        SignIn: 'Sign In'
    }
];