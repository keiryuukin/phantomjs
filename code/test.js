var page = require('webpage').create();
var settings = {
	operation: "POST",
	encoding: "unicode",
	headers: {
		"Content-Type": "application/json"
	},
	data: JSON.stringify({
		some: "data",
		another: ["custom", "data"]
	})
}
var url = "http://tritech.skyfly.com.tw/"
page.open(url,settings, function(status) {

	page.injectJs('jq.js');
	start();
	console.log("測試")
	phantom.exit();
});

function start() {
	var a = page.evaluate(function() {
		return $("body").html();
	})
	console.log(a)
}
