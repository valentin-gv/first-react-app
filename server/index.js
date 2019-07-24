const express = require("express");
const app = express();
const port = process.env.PORT || 3200;
const data = require("./mocks/data");
const civilizationsRouter = express.Router();

app.use(express.json());

// Middleware que toma todas las requests
app.use((req, res, next) => {
  console.log("metod:\n", req.method);
  console.log("headers\n", req.headers);
  res.set('custom-header', 'true')
  next();
});

// Middleware que toma un punto de montaje
app.use(
  "/civilizations/:id",
  (req, res, next) => {
    console.log("request for a civilization id");
    console.log(req.originalUrl);
    // res.redirect('http://www.google.com');
    next();
  },
  (req, res, next) => {
    console.log("other functions for a civilization id");
    console.log("id:", req.params.id);
    next();
  }
);

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

civilizationsRouter
  .route("/civilizations")
  .get((req, res) => {
    res.status(200).json(data.civilizations);
  })
  .post((req, res) => {
    console.log(req.body);
    res.status(201).json(req.body);
  });

civilizationsRouter.route("/civilizations/:id").get((req, res) => {
  // make filter by userId and response with one user
  const userId = req.params.userId;
  res.json(data.users);
});

app.use("/api", civilizationsRouter);

app.listen(port, () => {
  console.log("Running on port " + port);
});
