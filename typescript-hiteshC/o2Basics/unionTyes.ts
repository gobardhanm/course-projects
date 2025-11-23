// When not sure what types of data is coming.
// It helps to declare multiple data-types.
let score: number | string = 33;

score = 44;
score = "55";

// self-defined data types

type Userrr = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let guy: Userrr | Admin = { name: "Gerry", id: 334 };

guy = { username: "GM", id: 32345 };

// Other cases:

function getDBId(id: number | string) {
  // making some api calls
  console.log(`DB Id`);

  //   id.toUpperCase(); --> Errors because it is not a string it's a union of number & string
  // But we can do as below
  if (typeof id === "string") {
    id.toUpperCase();
  }
}

getDBId(3);
getDBId("5");

// For cases of Arrays:

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: number[] | string[] = []; // It's different it will only take arrays as input not elements

const data4: (string | number)[] = [1, "2", 3]; // No errors hihi

// another test case
let pi: 3.14 = 3.14;
// It will always be 3.14 no matter what

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"; // <-- Correct
// seatAllotment = "crew"; // <-- Errors
