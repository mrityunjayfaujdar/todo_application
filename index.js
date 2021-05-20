const express = require("express");
const app = express();
const connectToDB = require("./config/database");
const PORT = process.env.PORT || 8001;

//middleware to handle request and parse request body as JSON
app.use(express.json());

//Tell middleware to access static files from assets
app.use(express.static("./assets"));

//Setting up EJS templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

//connect to databaes
connectToDB();

//handling routes
app.use("/", require("./routes"));

//Listeing to server
app.listen(PORT, (error) => {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log("Server Running on Port ", PORT);
});
