const express = require("express");
const app = express();


const PORT = process.env.PORT || 8080;
require("dotenv").config();
const session = require("express-session");
var SequelizeStore = require('connect-session-sequelize')(session.Store);


const db = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: new SequelizeStore({
      db: db.sequelize
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 3600000
  }
}))

app.use(express.static("public"))



const logInRoute = require("./controllers/loginController.js");
const postRoute = require("./controllers/postController.js");
const reviewRoute = require("./controllers/reviewController.js");
const signupRoute = require("./controllers/signupController.js");
//const teacherRoute = require("./controllers/teacherController.js");

app.use("/login", logInRoute);
app.use("/posts", postRoute);
app.use("/teacherreview", reviewRoute);
app.use("/usersignup", signupRoute);
//app.use(/*/route*/, teacherRoute);



db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
      console.log('App listening on PORT ' + PORT);
  });
}).catch(err => {throw err;});