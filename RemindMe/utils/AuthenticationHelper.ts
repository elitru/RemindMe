import { AsyncStorage } from "react-native";

/**
 * @description provides authentication services to app
 */
export default class AuthenticationHelper{

    private static readonly TOKEN_EXPIRE: string = 'REMIND_ME.TOKEN_EXPIRE';
    private static readonly TOKEN: string = 'REMIND_ME.AUTHENTICATION_KEY';

    /**
     * @description checks whether a user is logged in or not
     * @todo show error dialog in 'catch' block
     */
    public static async isLoggedIn(): Promise<boolean>{
        try{
            //get token saved on phone - if null -> not logged in yet
            const tokenExpireTimeRaw: string | null = await AsyncStorage.getItem(this.TOKEN_EXPIRE);

            if(tokenExpireTimeRaw == null){
                //user has never logged in before
                return false;
            }

            if(new Date(<string>tokenExpireTimeRaw) < new Date()){
                //token has already expired
                return false;
            }

            //get token from storage
            const authenticationToken: string | null = await AsyncStorage.getItem(this.TOKEN);

            if(authenticationToken == null){
                //token is missing - invalid login
                return false;
            }

            //token was found and is still valid
            return true;
        }catch(err){
            return false;
        }
    }

    /**
     * @description save the user's login credentials to the phones local storage
     * @param expireTime time at which the given @see token expires
     * @param token the api authentication token
     * @todo show error dialog in 'catch' block
     */
    public static async save(expireTime: Date, token: string): Promise<boolean>{
        try{
            await AsyncStorage.setItem(this.TOKEN_EXPIRE, expireTime.toUTCString());
            await AsyncStorage.setItem(this.TOKEN, token);
            return true;
        }catch(err){
            return false;
        }
    }
}