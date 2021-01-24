class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours ){
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this._salary = salary;
        this.workingHours = workingHours;
    }
    get id() {
        return this._id 
    }
    set id(val) {
        if (typeof val === 'number' && val > 0 ){
            this._id = val;
        }
    }
    get salary() {
        return this._salary 
    }
    set salary(amount) {
        if (amount >= 68000 ){
            this._salary = amount;
        }
    }
    getFullName() {
        return `${this.firstName} ${this.lastName};`
    }
    getAnnualSalary() {
        return (this.salary - ((this.salary * 22) / 100) - 1500 - 3500) * 12;
    }
    raiseSalary(percent) {
        return this.salary = this.salary + (this.salary * percent) / 100 ;
    }
}

let emp1 = new Employee(1, 'Aram', 'Aramyan', 'accountant', 200000, 9);


class Account {
    constructor (id, name, balance){
        this._id = id;
        this._name = name;
        this._balance = balance;
    }
    get name() {
        return this._name;
    }
    set name(str) {
        if(typeof str === 'string'){
            this._name = str;
        }
    }
    get id() {
        return this._id ;
    }
    set id(value) {
        if (typeof value === 'number' && value > 0 ){
            this._id = value;
        }
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if(value >= 0){
            this._balance = value;
        }
    }
    credit(amount) {
        return this._balance = amount + this._balance;
    }
    debit(amount) {
        if (amount <= this.balance){
            return this.balance - amount;
        }else {
            return 'Amount exceeded balance.';
        }
    }
    transferTo(anotherAccount, amount) {
        if (amount <= this.balance) {
            this.balance -= amount
            anotherAccount += amount
            return this.balance;
        }else {
            return 'Amount exceeded balance.';
        }
    }
    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance === accountSecond.balance) {
            return 'same accounts'
        }else {
            return 'different accounts'
        }
    }
    toString() {
        return `${this.name}'s ${this.id} account balance is ${this.balance} ` ;
    } 
}

let account = new Account(2, 'Karen', 15000)


class Person {
    constructor(firstName, lastName, gender, age ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(val) {
        if (val >= 0 && val < 150){
            this._age = val ;
        }
    }
    toString() {
        `${this.gender === 'male' ? 'He' : 'She'} is ${this.firstName} ${this.lastName}, whose age is ${this.age}` ;
    }
}

class Student extends Person {
    constructor (firstName, lastName, gender, age, program, year, fee ){
        super(firstName, lastName, gender, age)
        this.program = program;
        this.year = year;
        this._fee = fee;
    }
    get fee() {
        return this._fee;
    }
    set fee(value) {
        if (value >= 150000){
            this._fee = value ;
        }
    }
    passExam(programName, grade) {
        let exam = this.program.find(obj => {
            return obj.name === programName;
        })
        exam.grade = grade;
        let allExamsPassed = this.program.every(function (elem){
            return elem.grade >= 50;
        })
        if (allExamsPassed) {
            this.year ++ ;
        }
    }

}
class ProgramItem {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}

let studentProgram = [new ProgramItem('math', 49), new ProgramItem('english', 0)];
let student = new Student('Ani', 'Areyan', 'female', 19,studentProgram, 2, 1000);


















