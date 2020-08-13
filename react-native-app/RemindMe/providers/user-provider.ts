import { StorageProvider, StorageKeys } from "./storage-provider";
import { AuthenticationResponse } from "../models/responses/authentication-response";
import { observable } from "mobx";
import { User } from "../models/dto/user";

/**
 * @description manages the user data of the logged in user
 */
export class UserProvider {
    @observable
    public user: User | null = null;

    @observable
    public token: string | null = null;

    @observable
    isUserLoggedIn: boolean = false;

    constructor() {
        this.loadUserFromStorage().then(() => this.isLoggedIn());
    }

    /**
     * @description checks if a user is curretnly logged in based on whether an api token is present or not
     */
    private async isLoggedIn(): Promise<boolean> {
        try {
            const token: string | null = await StorageProvider.get<string>(StorageKeys.ApiToken);

            if(token){
                return true;
            }

            return false;
        }catch(e){
            return false;
        }
    }

    /**
     * @description saves the given response including token an user object into the phone's local storage
     * @param authenticationResponse the response received from the api
     */
    public async saveLogin(authenticationResponse: AuthenticationResponse): Promise<void> {
        try {
            await StorageProvider.set(StorageKeys.User, authenticationResponse.user);
            await StorageProvider.set(StorageKeys.ApiToken, authenticationResponse.token);
            this.isUserLoggedIn = true;
        }catch(e) {
            throw e;
        }
    }

    /**
     * @description loads the saved user account information if user has already logged in once
     */
    private async loadUserFromStorage(): Promise<void> {
        try {
            this.user = await StorageProvider.get<User>(StorageKeys.User);
            this.token = await StorageProvider.get<string>(StorageKeys.ApiToken);
        }catch(e){
            throw e;
        }
    }
}