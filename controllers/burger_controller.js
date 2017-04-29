var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(request, result) {
    burger.selectAll(function(data) {
        var handleBarsObj = {
            burger: data
        };
        console.log(handleBarsObj);
        result.render("index", handleBarsObj);
    });
});

router.post("/", function(request, result) {
    console.log(request);
    burger.insertOne(request.body.name, function() {
        console.log(result);
        result.redirect("/");
    });
});

router.put("/:id", function(request, response) {
    condition = "id = " + request.params.id;

    burger.updateOne(request.body.devoured, condition, function() {
        res.redirect("/");
    })
})

module.exports = router;