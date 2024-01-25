//? lookup
// always return data in array format
// ! Relationship between tables

//? one to one
//? one to many
//? many to many

// $lookup

// db.owners.insertMany([
//   {
//     name: "Sahil",
//     address: "Ekantakuna",
//     age: 21,
//   },
//   {
//     name: "Subin",
//     address: "Finland",
//     age: 22,
//   },
// ]);

// db.owners.find();

// db.vehicles.insertOne({
//   name: "Cambry",
//   brand: "Toyota",
//   model: 2023,
//   ownerId: ObjectId("65a8e1718144dcd8bd9d0cda"),
// });

// db.vehicles.find();

// db.vehicles.aggregate([
//   { $match: {} },

//   {
//     $lookup: {
//       from: "owners",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       brand: 1,
//       model: 1,
//       ownerData: {
//         name: { $first: "$ownerDetails.name" },
//         address: { $first: "$ownerDetails.address" },
//       },
//     },
//   },
// ]);
