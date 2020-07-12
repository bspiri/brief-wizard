const express = require("express");
const router = express.Router();

const categoriesRouter = require("./categories");
const briefRouter = require("./briefs");
const usersRouter = require("./users");
const dashboardRouter = require("./dashboard");
const templateRouter = require("../admin/template");

router.use("/categories", categoriesRouter);
router.use("/briefs", briefRouter);
router.use("/users", usersRouter);
router.use("/dashboard", dashboardRouter);
router.use("/templates", templateRouter);


module.exports = router;