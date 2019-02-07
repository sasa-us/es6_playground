import  { addToDom } from './helpers';

export class Person {
    constructor(name) {
        this.name = name;
    }

    speak(text) {
        addToDom(`${this.name} Says: ${text}`);
    }

    greet() {
        this.speak(`hello, i'm ${this.name}`);
    }


}//end class Person()


//when use constructor in extends calss
//it must call super()first inside child constructor to call parent constructor
//and pass parent constructor param into super() as param
//so the child constructor also need that param to pass in
export class SuperPerson extends Person {
    constructor(name, superpower) {
        super(name);
        this.superpower = superpower;
    }
    saySuperPower(power) {
        this.speak(`my superposer is ${this.superpower}`);
    }
}