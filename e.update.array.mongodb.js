use("merndb");
//! Array update
//? $push, $addToSet $pop, $pull, $pullAll,
//? $, $[], $[Identifier]
// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $push: {
//       scores: {
//         $each: [
//           {
//             sub: "Social",
//             point: 55,
//           },
//           {
//             sub: "Political Science",
//             point: 55,
//           },
//         ],
//       },
//     },
//   }
// );

//? modifier => $each, $position, $sort, $slice,
// db.friends.updateOne(
//   { _id: ObjectId("656070d2b16daaa31169a51a") },
//   {
//     $push: { hobbies: { $each: ["Singing", "Coding"] } },
//   }
// );

//? add Singing and Driving to Sulochan's hobbies
// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $push: { hobbies: { $each: ["Singing", "Driving"] } },
//   }
// );

//? addToSet-> if data exists already in array, it won't add again.

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $addToSet: { hobbies: { $each: ["Singing", "Trekking"] } },
//   }
// );

//? $pop
//? 1 => removes last element from array
//? -1 => removes first element from array
// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pop: { hobbies: -1 },
//   }
// );

//? $pull
//? removes item from array based on condition
// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pull: { scores: { sub: "Social" } },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pull: { scores: { sub: "Math" }, point: { $gt: 50 } },
//   }
// );

// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $pull: {
//       hobbies: "Coding",
//     },
//   }
// );

//? pullAll-> it will remove all selected data from array.
// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $pullAll: { hobbies: ["Singing", "Dancing"] },
//   }
// );

//===================================================================================================
//? $
// db.friends.updateOne(
//   { name: "Sulochan", "scores.sub": "Science" },
//   {
//     $set: {
//       "scores.$.point": 80,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan", hobbies: "Dancing" },
//   {
//     $set: {
//       "hobbies.$": "Coding",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan", "scores.sub": "Science" },
//   {
//     $inc: {
//       "scores.$.point": 10,
//     },
//   }
// );

//? $[]
// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $set: {
//       "scores.$[].point": 50,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $set: {
//       "hobbies.$[]": "Books",
//     },
//   }
// );

db.friends.find();
