require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const DatabaseConnection = require("./database/databaseConnection");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const connection = new DatabaseConnection();
connection.createConnection();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
  