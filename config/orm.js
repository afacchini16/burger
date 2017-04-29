var connection = require('./connection.js');

// Converts the user's input into question marks
function printQuestiontMarks(numOfInputs) {
    // Create an empty array with which to push the question marks
    var questionArray = [];
    // Iterate over the number of user inputs
    for (i = 0; i < numOfInputs.length; i++) {
        // Add one question mark for each user's input
        questionArray.push("?");
    }
    // Return the array of question marks
    return questionArray.toString();
}

function addEqualsSigns(object) {
    var equalsArray = [];

    for (var key in object) {

    }
}

// Encapsulate all SQL functions into an object:
var orm = {
    // Select all data in burgers database
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";

        // Establish connection and query the database
        connection.query(queryString, function(error, result) {
            // If error, display error message
            if (error) throw error;

            cb(result);
        });
    },
    // Insert user's input into database
    insertOne: function(value, cb) {
        // Build the query string by adding the user's text
        // var queryString = "INSERT INTO burgers VALUES (" + printQuestiontMarks(value.length) + ") ";
        
        var queryString = "INSERT INTO burgers SET ?";


        // Establish connection to database and query 
        connection.query(queryString, {burger_name: value}, function(error, result) {
            if (error) throw error;

            cb(result);
        });
    },

    // Update one dataset from the burgers array
    updateOne: function(devouredValue, condition, cb) {
        
        var queryString = "UPDATE burgers SET devoured = ? WHERE ?";
        connection.query(queryString, devouredValue, condition, function(error, response){
            if (error) throw error;
            
            cb(response);
        });
    }
};

module.exports = orm;