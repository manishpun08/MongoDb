use("merndb");

//? $skip, $limit

// db.movies.find().count();

let page = 1;
let limit = 5;

db.movies.aggregate([
  { $match: {} },
  //   {
  //     $sort: {
  //       "rating.average": -1,
  //     },
  //   },
  {
    $skip: (page - 1) * limit,
  },
  {
    $limit: limit,
  },
  {
    $project: {
      id: 1,
      name: 1,
      _id: 0,
      url: 1,
      rating: "$rating.average",
    },
  },
]);
