import { AsyncStorage } from "react-native";

/**
 * @description provides access to the async storage (local storage of the phone)
 */
export class StorageProvider {
    public static async get<T>(storageKey: string): Promise<T | null> {
        try{
            const value: string | null = await AsyncStorage.getItem(storageKey);

            if(!value) return null;

            return new Promise<T>((resolve) => {
                const parsed: T = JSON.parse(value);
                resolve(parsed);
            });
        }catch(e){
            throw e
        }
    }

    public static async set(storageKey: string, value: any): Promise<void> {
        if(!storageKey || !value) return;

        try{
            const asJsonString: string = JSON.stringify(value);
            await AsyncStorage.setItem(storageKey, asJsonString);
        }catch(e) {
            throw e
        }
    }
}
/**
 * @description used to identify values saved via @see StorageProvider
 */
export class StorageKeys {
    public static readonly Theme: string = 'REMIND_ME.THEME';
    public static readonly User: string = 'REMIND_ME.USER';
    public static readonly ApiToken: string = 'REMIND_ME.API_TOKEN';
    public static readonly Language: string = 'REMIND_ME.LANGUAGE';
}