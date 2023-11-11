const User = {
  name: 'Nur',
  email: 'mnn@gmail.com',
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: 'Nur', isPaid: false, email: 'mnn@gmail.com' };

createUser(newUser);

createUser({ name: 'Nur', isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: 'TS', price: 399 };
}

// type alias
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// readonly
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

let myUser: User = {
  _id: '12354',
  name: 'n',
  email: 'n@n.com',
  isActive: true,
};

// function createMyUser(user: User): User {
//   return { name: 'Nur', email: 'mnn@gmail.com', isActive: true };
// }

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
