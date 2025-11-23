// const user1: (string | number)[] = [1, "Gm"];

let user1: [string, number, boolean];

user1 = ["Gm", 1333, true]; // order matters

let rgb: [number, number, number] = [255, 124, 153];

type user2 = [number, string];

const newUser: user2 = [2432, "gmeher@meher.com"]; // order & strict

newUser[1] = "dmeher@meher.com";
// newUser.push(true); // Error: Argument of type 'true' is not assignable to parameter of type 'number | string'.
newUser.push(123); // OK: 123 is a number (allowed)

// To forbid mutation:
const readonlyUser: readonly [number, string] = [2432, "gmeher@meher.com"];
// readonlyUser.push(456); // Error: Property 'push' does not exist on type 'readonly [number, string]'.

export {};
