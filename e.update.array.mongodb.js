use("merndb");
//! Array update
//? $push, $pop, $pull, $pullAll, $addToSet
// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );

//? modifier => $each, $position, $sort, $slice
// db.friends.updateOne(
//   { _id: ObjectId("656070d2b16daaa31169a51a") },
//   {
//     $push: { hobbies: { $each: ["Singing", "Coding"] } },
//   }
// );

db.friends.find();
