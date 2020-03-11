import ReminderHolder from "./../models/ReminderHolder";
import AsyncStorage from "@react-native-community/async-storage";

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
            const result: string | null = await AsyncStorage.getItem(ReminderHelper.REMINDERS_KEY);
            if(result == null || result == undefined || result.length <= 0){
                return [];
            }
            
            //console.log(result)
            const raw: string[] = JSON.parse(result);
            return raw.map(entry => ReminderHolder.parse(entry));

        }catch(err){
            return [];
        }
    }

    /**
     * @description save all given reminders; overrides existing ones
     */
    public static async saveToLocal(reminders: ReminderHolder[]): Promise<boolean>{
        try{
            const data: string = JSON.stringify(reminders.map(entry => ReminderHolder.storage(JSON.parse(JSON.stringify(entry)))));
            
            await AsyncStorage.setItem(ReminderHelper.REMINDERS_KEY, data);
            return true;
        }catch(err){
            return false;
        }
    }
}