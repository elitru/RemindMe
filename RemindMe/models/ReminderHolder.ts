export default class ReminderHolder{
    public person: Person;
    public icon: any;

    constructor(person: Person, icon: any){
        this.person = person;
        this.icon = icon;
    }
}

export class Person{
    public firstname: string;
    public lastname: string;
    public nickname: string;
    public birthdate: Date;

    constructor(firstname: string, lastname: string, nickname: string, birthdate: Date){
        this.firstname = firstname;
        this.lastname = lastname;
        this.nickname = nickname;
        this.birthdate = birthdate;
    }
}