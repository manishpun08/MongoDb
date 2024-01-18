use("merndb");
//? delete operation

// db.movies.deleteOne({ name: "Under the Dome" });

//? delete movies whose rating is 7.6
// db.movies.deleteMany({ "rating.average": 7.6 });

//? delete movies whose summary includes "Pacific"
// db.movies.deleteMany({ summary: { $regex: "Pacific", $options: "i" } });

//? delete movies whose summary includes both Action and Crime
// db.movies.deleteMany({ genres: { $all: ["Action", "Crime"] } });

//? delete movies whose weight is less than 60
// db.movies.deleteMany({ weight: { $lt: 60 } });

// db.movies.find();
