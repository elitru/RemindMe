import { LoginRequest } from "../models/requests/login-request";

/**
 * @description provides access to the the api
 */
export class Api {
    public static async Login(loginRequest: LoginRequest) {
        
    }
}

/**
 * @description contains all valid api routes
 */
class ApiRoutes {
    private static readonly Base: string = 'http://localhost:4200';

    public static readonly User = class {
        private static readonly Prefix: string = '/users';

        public static readonly Login: string = ApiRoutes.Base + ApiRoutes.User.Prefix + '/login';
        public static readonly Create: string = ApiRoutes.Base + ApiRoutes.User.Prefix + '/create';
        public static readonly Deactivate: string = ApiRoutes.Base + ApiRoutes.User.Prefix + '/deactivate';
        public static readonly ChangePassword: string = ApiRoutes.Base + ApiRoutes.User.Prefix + '/change-password';
    }
}