use("merndb");

//insert
//? insertOne
//? insertMany
//? insertOne => to add one document
// db.students.insertOne({
//   name: "Manish",
//   college: "LBEF",
//   address: {
//     temporary: "Anamnagar",
//     permanenet: "Baneshwor",
//   },
// });

// db.students.insertOne({
//   name: "Deepesh",
//   college: "Broadway",
//   address: {
//     temporary: null,
//     permanent: "Bhaktapur",
//   },
// });

//? insertMany
// db.courses.insertMany([
//   {
//     name: "MERN",
//     price: 25000,
//     duration: 90,
//   },
//   {
//     name: "Spring Boot",
//     price: 25000,
//     duration: 100,
//   },
//   {
//     name: "DevOps",
//     price: 30000,
//     duration: 60,
//   },
// ]);

//?Read
//?findOne, find

//? find always returns array
//?if there is no data, find returns empty array.
// db.students.find();
// db.courses.find();

//?findOne
//? always returns one element based on provided condition
//if there is no condition is not provided then it give first data/table
//?name ==="Devops"
// db.courses.findOne({ name: "DevOps" });
// db.courses.findOne({ duration: 100 });

//?delete
//deleteOne, deleteMany

// db.courses.deleteOne({ duration: 60 });
// db.courses.deleteMany({});
// db.courses.find();
// db.courses.findOne({ name: "Django" });

//?update
//?update, updateMany
// db.courses.updateOne(
//   { name: "MERN" },
//   {
//     $set: {
//       price: 2000,
//     },
//   }
// );
// db.courses.updateOne(
//   { name: "Spring Boot" },
//   {
//     $set: {
//       price: 2000,
//     },
//   }
// );

// db.courses.updateMany(
//   { price: 2000 },
//   {
//     $set: {
//       duration: 120,
//     },
//   }
// );
db.courses.find();
