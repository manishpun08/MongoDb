use("merndb");

//? Aggregation Operation

//? Find movies whose status is "Ended"
// db.movies.aggregate([
//   { $match: { status: "Ended" } },
//   {
//     $project: {
//       name: 1,
//       status: 1,
//     },
//   },
// ]);

//? find movies whose rating is 9
// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": 9,
//     },
//   },

//   {
//     $project: {
//       name: 1,
//       movieRating: "$rating.average",
//     },
//   },
// ]);

// ?find movies whose rating is greater than 7 and less than 9
// db.movies.aggregate([
//   {
//     $match: {
//       $and: [
//         { "rating.average": { $gt: 7 } },
//         { "rating.average": { $lt: 9 } },
//       ],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       movieRating: "$rating.average",
//     },
//   },
// ]);

// ?find movies whose genres is Thriller
// db.movies.aggregate([
//   {
//     $match: {
//       genres: "Thriller",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// ?find movies whose status is Running
// db.movies.aggregate([
//   { $match: { status: "Running" } },
//   {
//     $project: {
//       movieName: "$name",
//       status: 1,
//     },
//   },
//   {$sort: {
//     movieName: 1
//   }}
// ]);

//? find movies whose status is Ended and runtime is 60
// db.movies.aggregate([
//   {
//     $match: {
//       $and: [{ status: "Ended" }, { runtime: 60 }],
//     },
//   },
//   {
//     $project: {
//       movieName: "$name",
//       status: 1,
//       runtime: 1,
//     },
//   },
//   {
//     $sort: {
//       movieName: 1,
//     },
//   },
// ]);

// ?find movies whose weight is 75 and network country is Canada
// db.movies.aggregate([
//   {
//     $match: {
//       $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
//     },
//   },
//   {
//     $project: {
//       movieName: "$name",
//       weight: 1,
//       country: "$network.country.name",
//     },
//   },
// ]);

// ?find movies whose weight is 96 or runtime is 60
// db.movies.aggregate([
//   {
//     $match: {
//       $or: [{ weight: 96 }, { runtime: 60 }],
//     },
//   },
//   {
//     $project: {
//       movieName: { $toUpper: "$name" },
//       weight: 1,
//       runtime: 1,
//     },
//   },
//   {$sort:{
//     movieName: -1
//   }}
// ]);

// ? find movies whose rating average is not 9
// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $ne: 9 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       rating: "$rating.average",
//     },
//   },
//   {
//     $sort: {
//       rating: -1,
//     },
//   },
// ]);

// ? find movies whose rating average is either 6 or 6.5 or 9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8
// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       rating: "$rating.average",
//     },
//   },
//   {
//     $sort: {
//       rating: 1,
//     },
//   },
// ]);

// ?find movies whose genre includes Action and Crime
// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $all: ["Action", "Crime"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
//   {
//     $sort: {
//       name: -1,
//     },
//   },
// ]);

// ? find movies whose genre size is 2
// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $size: 2 },
//     },
//   },
//   {
//     $project: {
//       newMovies: { $toUpper: "$name" },
//       genres: 1,
//     },
//   },
//   {
//     $sort: {
//       newMovies: -1,
//     },
//   },
// ]);

// ? find movies whose genre size is not equal to 2
// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $ne: { $size: 2 } },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// ? find movies whose language is not English
// db.movies.aggregate([
//   {
//     $match: {
//       language: { $ne: "English" },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       language: 1,
//     },
//   },
// ]);

// ? find movies whose summary includes "Pacific"
// db.movies.aggregate([
//   {
//     $match: {
//       summary: { $regex: "Pacific" },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       summary: 1,
//     },
//   },
// ]);

//?  ================= ================= ================= ================= ================= =================
//? students database

// db.students.aggregate();

// ? find students whose hobby is neither Swimming nor Dancing
// db.students.aggregate([
//   {
//     $match: {
//       hobbies: { $nin: ["Swimming", "Dancing"] },
//     },
//   },
//   {$project: {
//     name:1,
//     hobbies:1,
//   }}
// ]);

// ?find students whose hobby is both Gaming and Singing
// db.students.aggregate([
//   {
//     $match: {
//       hobbies: { $all: ["Gaming", "Singing"] },
//     },
//   },
//   {
//     $project: {
//       name: { $toUpper: "$name" },
//       hobbies: 1,
//     },
//   },
// ]);

// ?find students who have three hobbies
// db.students.aggregate([
//   {
//     $match: {
//       hobbies: { $size: 3 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       hobbies: 1,
//     },
//   },
// ]);

// ?find students whose math score is greater than 50
// db.students.aggregate([
//   {
//     $match: {
//       scores: { $elemMatch: { sub: "Math", point: { $gt: 50 } } },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       scores: 1,
//     },
//   },
//   {
//     $sort: {
//       name: -1,
//     },
//   },
// ]);

// ?find students whose score in any subject is greater than 70
// db.students.aggregate([
//   {
//     $match: {
//       "scores.point": { $gt: 70 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       scores: 1,
//     },
//   },
// ]);
