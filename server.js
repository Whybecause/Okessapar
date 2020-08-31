require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const mongoose = require('mongoose');
// const corsOptions = {origin : "http://localhost:3000"}

const youtubeRoutes = require('./routes/youtube.routes');
const emailRoutes = require('./routes/email.routes');
const showRoutes = require('./routes/show.routes');
const userRoutes = require('./routes/user.routes');

mongoose.connect(process.env.MONGODB_URI,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// app.use(cors(corsOptions));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8081'
}));
// parse requests of content-type - application/json

app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", youtubeRoutes);
app.use("/api", emailRoutes);
app.use("/api", showRoutes);
app.use("/api", userRoutes);

// Pour AWS
    // const appPath = path.join(__dirname, "../client/build");
    // app.use(express.static(appPath));

    // app.get("*", (req, res) => {
    //     res.sendFile(path.join(appPath, "index.html"));
    // });

// Pour Heroku : 
if (process.env.NODE_ENV === "production") {
  const appPath = path.join(__dirname, "client", "build");
  app.use(express.static(appPath));

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(appPath, "index.html"));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

