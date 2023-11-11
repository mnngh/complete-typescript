function addTwo(num: number): number {
  return num + 2;
  // now you cannot return anything except number
}

console.log(addTwo(5));

function getUpper(val: string) {
  return val.toUpperCase();
}

console.log(getUpper('nur nabi'));

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser('Nur', 'mnn.saag@gmail.com', true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser('nur', 'mnn@gmail.com');

// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return '200 ok';
// }

const getHello = (s: string): string => {
  return '';
};

const heros = ['thor', 'spiderman', 'ironman'];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
