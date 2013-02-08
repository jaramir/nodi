var server = require("../lib/server.js");
var http = require("http");
var assert = require("assert");

describe("app", function() {
    it("server responds with the usual thing", function(done) {
	var data = "";
	http.get("http://localhost:9337/", function(res) {
	    res.on("data", function(chunk) {
		data += chunk;
	    });
	    res.on("end", function() {
		assert.equal(data, "Hello World!");
		done();
	    });
	});
    });
});
