let score: number | string = 33;

score = 44;
score = '55';

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let nur: User | Admin = { name: 'nur', id: 234 };

nur = { username: 'nn', id: 234 };
