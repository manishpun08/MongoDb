use("merndb");

//? aggregation
//? powerful query tool
//? uses pipeline
//? popular stages
//? $match, $sort, $limit, $skip, $project, $lookup, $group

//? $match stage => filter

// db.movies.aggregate([
//   {
//     $match: {
//       name: "Under the Dome",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);

//? $sort => used for sorting.
//? 1 => ascending sort,
//? -1 => descending sort

//? hierarchy => small to big (numbers, capital letters, small letters)
// db.movies.aggregate([
//   { $match: {} },
//   {
//     $sort: {
//       "rating.average": -1,
//     },
//   },
//   {
//     $project: {
//       movieName: "$name",
//       movieRating: "$rating.average",
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $project: {
//       movieName: { $toLower: "$name" },
//     },
//   },
//   {
//     $sort: {
//       movieName: 1,
//     },
//   },
// ]);
