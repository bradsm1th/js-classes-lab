console.log('hi from people');

// define Person class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    console.log(`Hello to you, ${this.firstName} ${this.lastName}!`);
  }
}

// create a person
const roland = new Person("Roland of", "Gilead");
console.log(roland.sayHello());
// create a person
const me = new Person("Brad of", "Columbus");
console.log(me.sayHello());


// define Employee class (extend Person)
class Employee extends Person {
  constructor(first, last, company, wage) {
    super(first, last);
    this.company = company;
    this.wage = wage;
    this.active = true;
  }

  // additional methods
  receiveRaise(newWage) {
    this.wage = newWage;
  }
  terminate() {
    this.active = false;
  }
}

// test out employee class
let dwight = new Employee('dwight', 'shrute', 'dunder mifflin', '$50,000', true);
console.log(dwight.active);
dwight.terminate();
console.log(dwight.active);


// define Manager class (extend Employee)
class Manager extends Employee {
  constructor(first, last, company, department, wage, active) {
    super(first, last, company, wage, active);
    this.department = department;
  }

  // additional methods
  giveRaise(employee, newWage) {
    employee.receiveRaise(newWage);
  }
}

// test manager class
const jan = new Manager("Jan", "Levinson", "Dunder Mifflin Corporate", "HR", 100000);
jan.sayHello();
console.log(`Dwight's current wage:\t${dwight.wage}`);
jan.giveRaise(dwight, '$80,000');
console.log(`Dwight's new wage:\t\t${dwight.wage}`);

const michael = new Manager("Michael", "Scott", "Dunder Mifflin Scranton", "Everyone", '$60,000');
michael.sayHello();

// define Worker class (extend Employee)
class Worker extends Employee {
  constructor(first, last, company, manager, wage, active) {
    super(first, last, company, wage, active);
    this.manager = manager;
  } 

  // additional method
  goOnStrike(length, bump) {
    return `We are on strike for ${length} days unless we get a ${bump}% raise.\n\t…it's up to you, ${this.manager.firstName} ${this.manager.lastName}!`;
  }
}

// test worker class
const angela = new Worker('Angela', '(is it Martin? I honestly don\'t remember)', 'Dunder Mifflin Scranton', michael, '$45,000');

console.log(angela.goOnStrike(10, 15));
angela.sayHello();