const express = require("express")
const router = express.Router()
const Template = require("../../models/templates.model")
const Users = require("../../models/users.model")
const { json } = require("body-parser")


router.get("/", function (req, res, next) {
    Template.find({}).then((properties) => {
        res.send(properties);
    });
});
router.get("/get", function (req, res, next) {
    Users.find({}).then((properties) => {
        res.send(properties);
    });
});

router.post("/post", (req, res) => {
    console.log(req.body)
    Users.insertMany(req.body).then((properties, error) => {
        if (error) {
            res.status(400).send("did not post")
        } else {
            res.status(200).send("Template posted")
        }
    })
})

// router.post("/", function (req, res, next) {
//     Users.insertMany({}).then((properties) => {
//         res.send(properties);
//     });
// });


module.exports = router;