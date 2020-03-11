import IconHelper from "./../utils/IconHelper";

export default class ReminderHolder{
    public id: string;
    public person: Person;
    public icon: any;
    private iconName: string;

    constructor(id: string, person: Person, iconName: string){
        this.id = id;
        this.person = person;
        this.iconName = iconName;
        this.icon = (<any>IconHelper.ICONS)[this.iconName];
    }

    /**
     * @description parses the reminder into a usable format for the storage
     */
    public  static storage(reminder: ReminderHolder): string{
        delete reminder.icon;
        console.log(reminder)
        return JSON.stringify(reminder);
    }

    /**
     * @description parses a reminder from storage into a real reminder
     */
    public static parse(reminder: string): ReminderHolder {
        const parsed: any = JSON.parse(reminder);
        const result: ReminderHolder = new ReminderHolder(
            parsed.id,
            new Person(
                parsed.person.firstname,
                parsed.person.lastname,
                new Date(parsed.person.birthdate)
            ),
            parsed.iconName
        );

        return result;
    }
}

export class Person{
    public firstname: string;
    public lastname: string;
    public birthdate: Date;

    constructor(firstname: string, lastname: string, birthdate: Date){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }
}