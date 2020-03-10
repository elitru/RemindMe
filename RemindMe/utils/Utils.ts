import ReminderHolder, { Person } from "./../models/ReminderHolder";

export default class Utils{
    /**
     * @description calculates the current age of a person
     * @returns the current age
     */
    public static getAge(person: Person): number{
        return new Date(Date.now() - person.birthdate.getTime()).getUTCFullYear() - 1970;
    }

    /**
     * @description formats the birthdate in the default european style
     * @returns the formatted date
     */
    public static getFormattedDate(person: Person): string{
        return person.birthdate.getDate() + '.' + person.birthdate.getMonth() + '.' + person.birthdate.getFullYear();
    }
}