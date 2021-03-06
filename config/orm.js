// Require the file connection
var connection = require('../config/connection.js');

// Function so you can use mysql
function printQ(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?')
	};

	return arr.toString();
};

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + '=' + ob[key]);
	};

	return arr.toString();
};

var crypto = {
	selectAll: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function (table, col, vals, cb) {
		var queryString = 'INSERT INTO ' + table;
		queryString = queryString + ' (';
		queryString = queryString + col.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQ(vals.length);
		queryString = queryString + ') ';

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function (table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;
		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = crypto;