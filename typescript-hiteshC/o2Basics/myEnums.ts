// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// if (seat === 0) {
//   // ...
// }

// putting a const before enum will reduce the js codes, otherwise it creates "immediately invoked function"
// sometime ts creates a bunch of js codes, so we should try to write clean ts in such a way that it will generate clean js codes.
enum SeatChoice {
  //   AISLE = 10,
  AISLE = "AISLE",
  MIDDLE = 22,
  // MIDDLE = "MIDDLE",
  //   WINDOW= "WINDOW", // rest follow up
  //   FORTH = "FORTH",
  WINDOW,
}

const gmSeat = SeatChoice.AISLE;
