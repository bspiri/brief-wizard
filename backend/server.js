const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const adminRouter = require("../backend/routes/admin/admin");
const briefTemplateRouter = require("../backend/routes/public/brief-templates");
const Questions = require("../backend/models/questions.model");
const Templates = require("../backend/models/templates.model");
const bodyParser = require("body-parser");

let uri = "mongodb+srv://superok:superok@cluster0-ep2e1.mongodb.net/superok?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
	if (error) throw error;
	console.log("connected");
});

app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());

app.get("/", function (req, res) {
	res.send("You have reached the server at port: " + port);
});

app.use("/admins", adminRouter);
app.use("/brieftemplates", briefTemplateRouter);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
