function addTwo(num: number) {
  //   return num + 2;
  return "hello"; // this is an issue !! , how can we return more accurate value ?
}

// to avoid the above problem:

function addTwoDuplicate(num: number): number {
  // return "hello"; Now this will give us error.

  return num + 2;
}

function getUpper(val: string) {
  val.toUpperCase();
  return val;
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("koi", "abcd.com", true);

// to add a default value to a parameter
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
// this is how we can give it default values
loginUser("makhan", "m@m.com"); // it worked without third argument.

console.log(getUpper("uppercase"));

let myAddedValue = addTwo(5);
console.log(addTwo(2));

function getValue(myVal: number) {
  if (myVal > 5) return true;
  else return "200 OK";
} // here we are returning two types of data.

// in arrow func
const getHello = (s: string): string => {
  return "hello" + " " + s;
};

// when we have some values
const heros = ["ironman", "doctor strange", "thor"];
// const heros = [1,2,3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

// it's always better to assign types to functions, even if it is void.
function consoleError(errMsg: string): void {
  console.log(errMsg);
  //   return "msg"; --> This will give errors, so it's good practice, in group projects.
}

// another type:
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
