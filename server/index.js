const express = require("express");
const app = express();
const port = process.env.PORT || 3200;
const data = require("./mocks/data");
const usersRouter = express.Router();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

usersRouter
  .route("/civilizations")
  .get((req, res) => {
    res.status(200).json(data.civilizations);
  })
  .post((req, res) => {
    console.log(req.body);
    res.status(201).json(req.body);
  });

usersRouter.route("/users:userId").get((req, res) => {
  // make filter by userId and response with one user
  const userId = req.params.userId;
  res.json(data.users);
});

app.use("/api", usersRouter);

app.listen(port, () => {
  console.log("Running on port " + port);
});
