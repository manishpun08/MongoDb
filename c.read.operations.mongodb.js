use("merndb");

//?comparison operators
// name === "Under the Dome"
//?$eq
// db.movies.find({ name: { $eq: "Under the Dome" } });
// db.movies.find({ name: { $eq: "Bitten" } });
// db.movies.find({ name: "Bitten" });
// db.movies.find({ name: "Person of Interest" });

//? $gt
// db.movies.find({ runtime: { $gt: 60 } }).count();
// db.movies.find({ runtime: { $gt: 30 } });

//? $gte
// db.movies.find({ runtime: { $gte: 60 } });

//? $lt
// db.movies.find({ weight: { $lt: 75 } });

//? $lte
// db.movies.find({ weight: { $lte: 75 } });

//? $not
//status !== "Ended"
// db.movies.find({ status: { $not: { $eq: "Ended" } } });
//? $ne =>not equals to
// db.movies.find({ status: { $ne: "Ended" } });

//===============================================================================================
//? logical operator

//? $and, $or, $not, $nor
//? $and
//status ==="Ended" && runtime===60
// db.movies.find({
//   $and: [{ status: "Ended" }, { runtime: 60 }, { "rating.average": 8.3 }],
// });

//? find movies whose rating is greater than or equal to 9
// db.movies.find({ "rating.average": { $gte: 9 } }, { name: 1, rating: 1 });

//? $or
//find movie whose runtime is less than 60 or status is ended
//?runtime<60 || status ==="Ended"
// db.movies.find(
//   { $or: [{ runtime: { $lt: 60 } }, { status: "Ended" }] },
//   { runtime: 1, status: 1 }
// );

//? $nor
// db.movies.find(
//   { $nor: [{ status: "Ended" }, { runtime: 60 }] },
//   { name: 1, status: 1, runtime: 1 }
// );
//===============================================================================================

// ?read operations

//?Find movies whose status is "Ended"

// db.movies.find({ status: "Ended" }, { name: 1, status: "Ended" });

// ?find movies whose rating is 9
// db.movies.find({ "rating.average": 9 });

// ?find movies whose rating is greater than 7 and less than 9
// db.movies.find({ "rating.average": { $gt: 7, $lt: 9 } });

// ?find movies whose genres is Thriller
// db.movies.find({ genres: "Thriller" });
// ?find movies whose status is Running
// db.movies.find({ status: "Running" });
//? find movies whose status is Ended and runtime is 60
// db.movies.find({ $and: [{ status: "Ended" }, { runtime: 60 }] });
// ?find movies whose weight is 75 and network country is Canada
// db.movies.find({
//   $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
// });
// ?find movies whose weight is 96 or runtime is 60
// db.movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] });
// ? find movies whose rating average is not 9
// db.movies.find({ "rating.average": { $ne: 9 } });

// ? find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8
//? $in
// db.movies.find({
//   "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
// });
//? $nin ==> nor
// db.movies.find({
//   "rating.average": { $nin: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
// });

//===============================================================================================

//? Array
//?all, $elemMatch, $size

//? find movies whose genres is both Drama and Thriller
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Thriller" }] });
//? $all ==> same array maa xa vane matra.
// db.movies.find({ genres: { $all: ["Thriller", "Drama"] } });

// find the students whose math score is grater than 70
//? elemMatch ==> at least 1 element dekhi data match garauxa.

// db.broadwaystudents.find({
//   scores: { $elemMatch: { sub: "Math", point: { $gt: 70 } } },
// });

//? size
//size does not accept range
// db.broadwaystudents.find({ hobbies: { $size: 2 } });

//?========================================================================
// evaluation
//? $regex ===> include
//? $options: "i" ===> insensitive case

// db.movies.find({ $regex: "dome", $options: "i" });

// db.movies.find({ summary: { $regex: "400 inhabitants", $options: "i" } });
// db.movies.find({ summary: { $regex: "the pacific", $options: "i" } });

//? $expr
// this is used when two field data is different.
// find sales data whose order is greater than volume
// order>volume

// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });

//?========================================================================

// !Task
// ?find movies whose genre includes Action and Crime
// db.movies.find(
//   { $and: [{ genres: "Action" }, { genres: "Crime" }] },
//   { name: 1, genres: 1 }
// );

// ! find movies whose genre size is 2
// db.movies.find({ genres: { $size: 2 } }, { name: 1, genres: 1 });
// ! find movies whose genre size is not 2
// db.movies.find({ genres: { $not: { $size: 2 } } }, { name: 1, genres: 1 });

// ? find movies whose language is not English
// db.movies.find({ language: { $ne: "English" } }, { name: 1, language: 1 });
// ! find movies whose summary includes "Pacific"
// db.movies.find({ summary: { $regex: "Pacific", $options: "i" } }, { name: 1 });
// ? find students whose hobby is neither Swimming nor Dancing
// db.broadwaystudents.find({
//   $nor: [{ hobbies: "Swimming" }, { hobbies: "Dancing" }],
// });
// ?find students whose hobby is both Gaming and Singing
// db.broadwaystudents.find({ $all: ["Gaming", "Singing"] });

// ?find students who have three hobbies
// db.broadwaystudents.find({ hobbies: { $size: 3 } });

// ?find students whose math score is greater than 50
// db.broadwaystudents.find({
//   scores: { $elemMatch: { sub: "Math", point: { $gt: 50 } } },
// });
// ?find students whose score in any subject is greater than 70
// db.broadwaystudents.find({ "scores.point": { $gt: 70 } });
// ? find students whose primary id is "656070d2b16daaa31169a51b"
// db.broadwaystudents.find({ _id: ObjectId("656070d2b16daaa31169a51b") });
