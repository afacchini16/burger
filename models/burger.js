var orm = require('../config/orm.js');

// Create a burger object that interacts with the orm to 
var burger = {
    selectAll: function(cb) {
        orm.selectAll(function (response) {
            cb(response);
         });
    },

    insertOne: function(value, cb) {
        console.log(value);
        orm.insertOne(value, function(result) {
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(devouredValue, condition, cb) {
        orm.updateOne(devouredValue, condition, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;