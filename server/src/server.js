require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectdb = require("./config/db");
const routes = require("./routes");
const cors = require('cors')

connectdb();
app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

routes(app);
app.use(express.static('./src/public'))
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
