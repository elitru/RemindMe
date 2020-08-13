import { User } from "../dto/user";

export interface AuthenticationResponse {
    user: User;
    token: string;
}