"use strict";
class User {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this._courseCount = 1;
        this.city = 'Dhaka';
    }
    deleteToken() {
        console.log('Token deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error(`course count should be more than 1`);
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
// class User {
//   public name: string;
//   email: string;
//   private readonly city = 'Dhaka';
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
const Nur = new User('nur', 'n@n.com', 'mnn2');
// Nur.city // we cannot access city because it is private
