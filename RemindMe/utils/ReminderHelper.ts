import ReminderHolder from "models/ReminderHolder";
import { AsyncStorage } from "react-native";

export default class ReminderHelper{
    /**
     * @description key for localstorage to get/save reminders from/to
     */
    private static readonly REMINDERS_KEY: string = 'REMIND_ME.REMINDERS.LOCAL';

    /**
     * @description loads all reminders from local storage
     */
    public static async getAllLocal(): Promise<ReminderHolder[]>{
        try{
            const result = await AsyncStorage.getItem(ReminderHelper.REMINDERS_KEY);
            if(result == null || result == undefined || result.length <= 0){
                return [];
            }
            
            //TODO: parse to real objects
            let data: any[] = JSON.parse(result);
            //data = data.map(e => )

            return [];

        }catch(err){
            return [];
        }
    }

    /**
     * @description save all given reminders; overrides existing ones
     */
    public static async saveToLocal(reminders: ReminderHolder[]): Promise<boolean>{
        try{
            await AsyncStorage.setItem(ReminderHelper.REMINDERS_KEY, JSON.stringify(reminders));
            return true;
        }catch(err){
            return false;
        }
    }
}