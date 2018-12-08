const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const {
	sequelize
} = require("./models");
const config = require("./config/config");
const app = express();

const routes = require("./routes");

routes(app);


app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());


sequelize.sync()
	.then(() => {
		app.listen(config.port);
		console.log(`Server started on ${config.port}`);
	});