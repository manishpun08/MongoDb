use("merndb");

// db.laptops.insertOne({
//   name: "GT75",
//   brand: "MSI",
//   ram: 16,
//   ssd: 512,
// });

//? upsert => update or insert
// db.laptops.updateOne(
//   { name: "GT63" },
//   { $set: { brand: "MSI", ram: 16, ssd: 512 } },
//   {
//     upsert: true,
//   }
// );

db.laptops.find();
