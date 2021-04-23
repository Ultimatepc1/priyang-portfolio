var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Projects = require("./projects_schema");

router.get("/", (req, res) => {
    Projects.find({}, function(err, results) {
        if (err) return;
        res.json(results);
    });
});

module.exports = router;