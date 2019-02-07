import { Person, SuperPerson } from './person';

const sasa = new Person('sasa');
// const supersasa = new SuperPerson('sasa');
//supersasa.saySuperPower('walking fast');
//use constructor
const supersasa = new SuperPerson('walking fast');
supersasa.saySuperPower();
sasa.greet();

supersasa.greet();

