'use strict';

//class : template
// 클래스 도입전 클래스 정리하지 않고 object를 만들수 있었음. 

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

// methods
speak() {
    console.log(`${this.name}: hello!`);
 }
}

const ellie = new Person ('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
console.log(ellie.age);


// 2. Getter and setters
class User {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName=lastName;
        this.age=age;
    }

    get age() {
    return this._age;  // age의 값이 있기 때문에 새로운 이름을 넣어줌
    }

    set age (value) {
        this._age = value <0 ? 0 : value;  //  age는 -1이 될수 없기 때문에  
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

