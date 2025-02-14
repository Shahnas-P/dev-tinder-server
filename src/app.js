const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

//Express Middleware which convert json from the end user to javascript object. So the server can understand and excecute.
app.use(express.json());

app.post("/sign-up", async (req, res) => {
  try {
    // Create instance of model and set add dummy data into it.
    const user = new User(req.body);

    await user.save();
    res.status(200).send("User Registered Successfully!!!");
  } catch (error) {
    res
      .status(500)
      .send("Somthing Went Wrong While Signing Up : " + error.message);
  }
});

//Get user by email

app.get("/user", async (req, res) => {
  try {
    const userEmail = req.body.email;

    const user = await User.findOne({ email: userEmail });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Something Went Wrong !! : " + error.message);
  }
});

// feed API
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Something went wrong!! : " + error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database Connected Successfully !!!");
    app.listen(3000, () => {
      console.log("Server running at port : 3000 ");
    });
  })
  .catch((error) => {
    console.log("Error:Something went wrong!!");
  });
