// const User = {
//   name: "Gerry",
//   email: "gerry@meher.com",
//   isActive: true,
// };

// //passing or returning a object from a function.

// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
// createUser({ name: "Gerry", isPaid: false });

// // when a function returns a object
// function createCourse(): { name: string; price: number } {
//   return { name: "react.js", price: 799 };
// }

// createCourse();

// // type alises

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createAUser(user: User): User {
//   return { name: "user", email: "example@email.com", isActive: false };
// }

// createAUser({ name: "user", email: "example@email.com", isActive: false });

// export {};

// READONLY and optional

type User = {
  // readonly _id: string; // mongoDB behaviour, it's a feature of the TS only, nothing in JS
  name: string;
  email: string;
  isActive: boolean;
  creaditCartDetails?: number; // optional '?'
};

// mix and match
type cardNumber = {
  cardNum: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetils = cardNumber &
  cardDate & {
    cvv: number;
  };

let myUser: User = {
  // _id: "12324";
  name: "h",
  email: "example@email.com",
  isActive: false,
};

myUser.email = "g@email.com";
// myUser._id = "40204";
