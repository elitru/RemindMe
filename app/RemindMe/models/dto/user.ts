import { Gender } from "./gender";

export interface User {
    readonly userId: string;
    readonly createdOn: Date;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    gender: Gender;
}