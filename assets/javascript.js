
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://jokeapi.p.rapidapi.com/categories?format=json",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jokeapi.p.rapidapi.com",
		"x-rapidapi-key": "d4187e8410msh61d117aa2a7591fp1c9f01jsnd3731a839a51"
	}
}
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=Madison,WI&appid=2b601663355a23888a534baece565f53"


$.ajax({
	url: queryUrl,
	method: "get"
}).then(function (response) {
	console.log(response);
});