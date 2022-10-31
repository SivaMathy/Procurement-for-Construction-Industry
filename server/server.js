const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");

const site = require("./P_models/SitesSchema");

const router = require("./P_routes/router");

const crudRoutes = require("./routes/crudRoutes");

//import routes

const userRoutes = require("./n_routes/n_users");

const programRoutes = require("./n_routes/n_programs");

const medicine = require("./n_routes/m_Medicine");
const delivary = require("./n_routes/m_delivary");
const order = require("./csse_routes/csse_order");

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

//middleware

app.use(bodyParser.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);

app.use(programRoutes);

app.use(router);

app.use("/medicine", medicine);
app.use("/delivary", delivary);
app.use("/api/cruds", crudRoutes);
app.use("/order", order);
const PORT = 8000;

const DB_URL =
  "mongodb+srv://Nishanthan:Nisha888@csse.d2ayfhe.mongodb.net/?retryWrites=true&w=majority";

mongoose

  .connect(DB_URL)

  .then(() => {
    console.log("Database connected successfully!!");
  })

  .catch((err) => console.log("Database connection error", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
