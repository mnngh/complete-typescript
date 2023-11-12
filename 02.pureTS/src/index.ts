class User {
  protected _courseCount = 1;

  readonly city: string = 'Dhaka';
  constructor(
    public name: string,
    public email: string,
    private userId: string
  ) {}

  private deleteToken() {
    console.log('Token deleted');
  }

  get getAppleEmail(): string {
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
  isFamily: boolean = true;
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
