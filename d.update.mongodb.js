use("merndb");

//! update
// update document(s)
//? set
// vaye update data, navaye add data
// db.friends.updateOne(
//   { name: "Unique" },
//   {
//     $set: {
//       name: "Sulochan",
//       age: 25,
//     },
//   }
// );

//? $inc
// used to increase or decrease value
//increase ko lagi + and decrease ko lagi -
// db.friends.updateMany(
//   {},
//   {
//     $inc: {
//       age: 10,
//     },
//   }
// );

//? $mul
//multiply
//divide pani yei dekhi hunxa. like 2 le divide garnu paryo vane, 1/2 => 0.5. 0.5 le multiply garidine

// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

//? $rename ==> renames field
// db.friends.updateMany(
//   {},
//   {
//     $rename: {
//       age: "totalAge",
//     },
//   }
// );

//? $unset ==> removes field

db.friends.updateMany(
  {},
  {
    $unset: {
      contactNumber: "",
    },
  }
);
db.friends.find();
