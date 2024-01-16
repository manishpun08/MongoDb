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
//? $ "scores.sub": "Science" is represented by $
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
//? add Swimming and Cycling as Prakash's hobbies
// db.dosts.updateOne(
//   { name: "Prakash" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Swimming", "Cycling"] },
//     },
//   }
// );

//? add two subjects with  points in Prakash's score
// db.dosts.updateOne(
//   { name: "Prakash" },
//   {
//     $push: {
//       scores: {
//         $each: [
//           { sub: "Nepali", point: 65 },
//           { sub: "English", point: 60 },
//         ],
//       },
//     },
//   }
// );

//? removes last hobby from prakash's

// db.dosts.updateOne(
//   { name: "Prakash" },
//   {
//     $pop: {
//       hobbies: 1,
//     },
//   }
// );

//? removes first hobby from prakash's

// db.dosts.updateOne(
//   { name: "Prakash" },
//   {
//     $pop: {
//       hobbies: -1,
//     },
//   }
// );
//? removes those subjects in which Prakash has socred lress than 60
// db.dosts.updateOne(
//   { name: "Prakash" },
//   {
//     $pull: {
//       scores: { point: { $lt: 60 } },
//     },
//   }
// );

//? update sagars science score to 60
// db.dosts.updateOne(
//   { name: "Sagar", "scores.sub": "Science" },
//   {
//     $set: {
//       "scores.$.point": 60,
//     },
//   }
// );

//? change sagars social subjcet to health
// db.dosts.updateOne(
//   { name: "Sagar", "scores.sub": "Science" },
//   {
//     $set: [
//       {
//         "scores.$.sub": "Health",
//         "scores.$.point": 80,
//       },
//     ],
//   }
// );

//? change sagar's Cricket to futsal in hobby
// db.dosts.updateOne(
//   { name: "Sagar", hobbies: "Cricket" },
//   {
//     $set: {
//       "hobbies.$": "Futsal",
//     },
//   }
// );

//? update prakash's scores to 80 for all subject
// db.dosts.updateOne(
//   {
//     name: "Prakash",
//   },
//   {
//     $set: {
//       "scores.$[].point": 80,
//     },
//   }
// );

//? $[identifier]
// db.dosts.updateOne(
//   { name: "Sulochan" },
//   {
//     $set: {
//       "scores.$[item].point": 60,
//     },
//   },
//   { arrayFilters: [{ "item.point": { $gt: 50 } }] }
// );

//? update scores less than 50 by 10 marks on sulochan
// db.dosts.updateOne(
//   { name: "Sulochan" },
//   {
//     $inc: { "scores.$[item].point": 10 },
//   },
//   { arrayFilters: [{ "item.point": { $lt: 50 } }] }
// );

db.dosts.find();
