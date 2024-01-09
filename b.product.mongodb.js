// name, price, quantity
use("merndb");

//?insert
// db.products.insertOne({
//   name: "Dell",
//   price: 700,
//   quantity: 50,
// });
// db.products.insertMany([
//   {
//     name: "Macbook",
//     price: 1000,
//     quantity: 20,
//   },
//   {
//     name: "Asus",
//     price: 800,
//     quantity: 30,
//   },
//   {
//     name: "Hp",
//     price: 2000,
//     quantity: 40,
//   },
// ]);
//?delete
// db.products.deleteOne({ name: "Asus" });
// db.products.deleteMany({});
//?update
// db.products.updateOne(
//   { name: "Asus" },
//   {
//     $set: {
//       price: 1000,
//     },
//   }
// );
// db.products.updateMany(
//   { price: 1000 },
//   {
//     $set: {
//       quantity: 40,
//     },
//   }
// );
//?find
db.products.find();
// db.products.findOne({ name: "Asus" });
