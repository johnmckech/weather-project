
var settings = {
	"async": true,
	"crossDomain": true,
	
	"method": "GET",
	}
}
var queryUrl = "


$.ajax({
	url: queryUrl,
	method: "get"
}).then(function (response) {
	console.log(response);
});
