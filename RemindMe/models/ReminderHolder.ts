export default class ReminderHolder{
    public id: string;
    public person: Person;
    public icon: any;

    constructor(id: string, person: Person, icon: any){
        this.id = id;
        this.person = person;
        this.icon = icon;
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