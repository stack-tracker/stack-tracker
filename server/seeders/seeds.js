const faker = require("faker");

const db = require("../config/connection");
const { User } = require("../models");

//open the database connection
db.once("open", async () => {
  console.log("opens the database");
  await User.deleteMany({});

  const userData = [];

  for (let i = 0; i < 10; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();
    const games = [{ location: "Madison", hours: "3" }];

    userData.push({ username, email, password, games });
    console.log(userData);
  }

  await User.collection.insertMany(userData);

  console.log("all done!");
  process.exit(0);
});
