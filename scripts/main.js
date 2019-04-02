setInterval(getAPIdata1, 900000);
setInterval(getAPIdata2, 900000);
setInterval(getAPIdata3, 900000);
setInterval(getAPIdata4, 900000);
setInterval(getAPIdata5, 900000);
setInterval(getAPIdata6, 900000);
setInterval(getAPIdata7, 900000);
setInterval(getAPIdata8, 900000);
setInterval(getAPIdata9, 900000);
setInterval(getAPIdata10, 900000);
setInterval(getAPIdata11, 900000);
setInterval(getAPIdata12, 900000);
setInterval(getAPIdata13, 900000);
setInterval(getAPIdata14, 900000);
setInterval(getAPIdata15, 900000);
setInterval(getAPIdata16, 900000);
setInterval(getAPIdata17, 900000);
setInterval(getAPIdata18, 900000);
setInterval(getAPIdata19, 900000);
setInterval(getAPIdata20, 900000);
setInterval(getAPIdata21, 900000);
setInterval(getAPIdata22, 900000);
setInterval(getAPIdata23, 900000);
setInterval(getAPIdata24, 900000);
setInterval(getAPIdata25, 900000);
setInterval(getAPIdata26, 900000);
setInterval(getAPIdata27, 900000);
setInterval(getAPIdata28, 900000);
setInterval(getAPIdata29, 900000);
setInterval(getAPIdata30, 900000);



//----------------------------------------------------------------------------------------------------------------------------------------------



// set timeline
var timeline = new TimelineMax({ repeat: -1, ease: Power0.easeNone });

// amimate timeline
timeline.to('.weer', 1, { opacity: 1})
    // .from('.zon', 800, { backgroundPositionX: -2000}, 'overdag')
    .from('.wolken', 5000, { backgroundPositionX: 2400}, 'weer')



//----------------------------------------------------------------------------------------------------------------------------------------------



//animaties bij onload
//animatie header
TweenMax.from(".header", 0.5, {top:-100});
//animaties locatievakken
TweenMax.from(".stad1", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut, delay:0.5});
TweenMax.from(".stad2", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut, delay:1});
TweenMax.from(".stad3", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut, delay:1.5});
TweenMax.from(".stad4", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut, delay:2});
TweenMax.from(".stad5", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut, delay:2.5});
TweenMax.from(".stad6", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut, delay:3});
//animaties weer
TweenMax.to(".weer1", 0.1, {opacity:0});
TweenMax.to(".weer1", 1, {opacity:1, delay:1});
TweenMax.to(".weer2", 0.1, {opacity:0});
TweenMax.to(".weer2", 1, {opacity:1, delay:1.5});
TweenMax.to(".weer3", 0.1, {opacity:0});
TweenMax.to(".weer3", 1, {opacity:1, delay:2});
TweenMax.to(".weer4", 0.1, {opacity:0});
TweenMax.to(".weer4", 1, {opacity:1, delay:2.5});
TweenMax.to(".weer5", 0.1, {opacity:0});
TweenMax.to(".weer5", 1, {opacity:1, delay:3});
TweenMax.to(".weer6", 0.1, {opacity:0});
TweenMax.to(".weer6", 1, {opacity:1, delay:3.5});
//animatie kaart
TweenMax.to(".kaart", 0.1, {opacity:0});
TweenMax.from(".kaart", 0.5, {marginTop:160, scale:0.2, delay:4});
TweenMax.to(".kaart", 0.5, {opacity:1, delay:4});



//----------------------------------------------------------------------------------------------------------------------------------------------



//API voor weer bij eerste box
function getAPIdata1() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "the%20Hague,nl";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces1(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError1(error);
	});
}
function onAPISucces1(response) {
	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	var type = response.weather[0].description;

	// render weather in DOM
	var weatherBox = document.getElementById('weather1');
	weatherBox.innerHTML = '"' + type + '" <br />' + degC + "&#176;C";
}
function onAPIError1(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather1');
	weatherBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Zon bij eerste box
function getAPIdata5() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "the%20Hague,nl";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces5(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError5(error);
	});
}
function onAPISucces5(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var zonBox = document.getElementById('zon1');

	// get icon
	if (icon == '01d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	else if (icon == '02d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	// else if (icon == '10d' ) {
	// 	return zonBox.style.background = 'url(img/zon.png)';
	// }
	else if (icon == '01n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	else if (icon == '02n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	// else if (icon == '10n' ) {
	// 	return zonBox.style.background = 'url(img/maan.png)';
	// }
	else {
		return zonBox.style.background = 'none';
	}
}
function onAPIError5(error) {
	console.error('Request failed', error);
	var zonBox = document.getElementById('zon1');
	zonBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Wolken bij eerste box
function getAPIdata7() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "the%20Hague,nl";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces7(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError7(error);
	});
}
function onAPISucces7(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('wolken1');

	// get icon
	if (icon == '02d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '01d' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken1.png)';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken1.png)';
	}
	else {
		return wolken1Box.style.background = 'url(img/veelwolken1.png)';
	}
}
function onAPIError7(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('wolken1');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Achtergrond kleur bij eerste box
function getAPIdata9() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "the%20Hague,nl";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces9(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError9(error);
	});
}
function onAPISucces9(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('stad1');

	// get icon
	if (icon == '01d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '02d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '50d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else {
		return wolken1Box.style.backgroundColor = 'black';
	}
}
function onAPIError9(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('stad1');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Regen bij eerste box
function getAPIdata11() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "the%20Hague,nl";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces11(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError11(error);
	});
}
function onAPISucces11(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('regen1');

	// get icon
	if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else {
		return wolken1Box.style.background = 'none';
	}
}
function onAPIError11(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('regen1');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//API voor weer bij tweede box
function getAPIdata2() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Wellington,nz";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces2(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError2(error);
	});
}
function onAPISucces2(response) {
	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);
	
	var type = response.weather[0].description;

	// render weather in DOM
	var weatherBox = document.getElementById('weather2');
	weatherBox.innerHTML = '"' + type + '" <br />' + degC + "&#176;C";
}
function onAPIError2(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather2');
	weatherBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Zon bij tweede box
function getAPIdata6() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Wellington,nz";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces6(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError6(error);
	});
}
function onAPISucces6(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var zonBox = document.getElementById('zon2');

	// get icon
	if (icon == '01d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	else if (icon == '02d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	// else if (icon == '10d' ) {
	// 	return zonBox.style.background = 'url(img/zon.png)';
	// }
	else if (icon == '01n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	else if (icon == '02n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	// else if (icon == '10n' ) {
	// 	return zonBox.style.background = 'url(img/maan.png)';
	// }
	else {
		return zonBox.style.background = 'none';
	}
}
function onAPIError6(error) {
	console.error('Request failed', error);
	var zonBox = document.getElementById('zon2');
	zonBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Wolken bij tweede box
function getAPIdata8() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Wellington,nz";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces8(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError8(error);
	});
}
function onAPISucces8(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('wolken2');

	// get icon
	if (icon == '02d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '01d' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken2.png)';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken2.png)';
	}
	else {
		return wolken1Box.style.background = 'url(img/veelwolken1.png)';
	}
}
function onAPIError8(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('wolken2');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Achtergrond kleur bij tweede box
function getAPIdata10() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Wellington,nz";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces10(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError10(error);
	});
}
function onAPISucces10(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('stad2');

	// get icon
	if (icon == '01d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '02d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '50d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else {
		return wolken1Box.style.backgroundColor = 'black';
	}
}
function onAPIError10(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('stad2');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Regen bij tweede box
function getAPIdata12() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Wellington,nz";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces12(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError12(error);
	});
}
function onAPISucces12(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('regen2');

	// get icon
	if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else {
		return wolken1Box.style.background = 'none';
	}
}
function onAPIError12(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('regen2');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//API voor weer bij derde box
function getAPIdata13() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Cabimas,ve";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces13(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError13(error);
	});
}
function onAPISucces13(response) {
	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);
	
	var type = response.weather[0].description;

	// render weather in DOM
	var weatherBox = document.getElementById('weather3');
	weatherBox.innerHTML = '"' + type + '" <br />' + degC + "&#176;C";
}
function onAPIError13(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather3');
	weatherBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Zon bij derde box
function getAPIdata15() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Cabimas,ve";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces15(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError15(error);
	});
}
function onAPISucces15(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var zonBox = document.getElementById('zon3');

	// get icon
	if (icon == '01d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	else if (icon == '02d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	// else if (icon == '10d' ) {
	// 	return zonBox.style.background = 'url(img/zon.png)';
	// }
	else if (icon == '01n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	else if (icon == '02n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	// else if (icon == '10n' ) {
	// 	return zonBox.style.background = 'url(img/maan.png)';
	// }
	else {
		return zonBox.style.background = 'none';
	}
}
function onAPIError15(error) {
	console.error('Request failed', error);
	var zonBox = document.getElementById('zon3');
	zonBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Wolken bij derde box
function getAPIdata16() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Cabimas,ve";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces16(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError16(error);
	});
}
function onAPISucces16(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('wolken3');

	// get icon
	if (icon == '02d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '01d' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken3.png)';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken3.png)';
	}
	else {
		return wolken1Box.style.background = 'url(img/veelwolken1.png)';
	}
}
function onAPIError16(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('wolken3');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Achtergrond kleur bij derde box
function getAPIdata17() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Cabimas,ve";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces17(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError17(error);
	});
}
function onAPISucces17(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('stad3');

	// get icon
	if (icon == '01d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '02d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '50d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else {
		return wolken1Box.style.backgroundColor = 'black';
	}
}
function onAPIError17(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('stad3');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Regen bij derde box
function getAPIdata18() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Cabimas,ve";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces18(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError18(error);
	});
}
function onAPISucces18(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('regen3');

	// get icon
	if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else {
		return wolken1Box.style.background = 'none';
	}
}
function onAPIError18(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('regen3');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//API voor weer bij vierde box
function getAPIdata19() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Mount%20Baker,us";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces19(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError19(error);
	});
}
function onAPISucces19(response) {
	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);
	
	var type = response.weather[0].description;

	// render weather in DOM
	var weatherBox = document.getElementById('weather4');
	weatherBox.innerHTML = '"' + type + '" <br />' + degC + "&#176;C";
}
function onAPIError19(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather4');
	weatherBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Zon bij vierde box
function getAPIdata21() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Mount%20Baker,us";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces21(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError21(error);
	});
}
function onAPISucces21(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var zonBox = document.getElementById('zon4');

	// get icon
	if (icon == '01d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	else if (icon == '02d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	// else if (icon == '10d' ) {
	// 	return zonBox.style.background = 'url(img/zon.png)';
	// }
	else if (icon == '01n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	else if (icon == '02n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	// else if (icon == '10n' ) {
	// 	return zonBox.style.background = 'url(img/maan.png)';
	// }
	else {
		return zonBox.style.background = 'none';
	}
}
function onAPIError21(error) {
	console.error('Request failed', error);
	var zonBox = document.getElementById('zon4');
	zonBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Wolken bij vierde box
function getAPIdata22() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Mount%20Baker,us";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces22(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError22(error);
	});
}
function onAPISucces22(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('wolken4');

	// get icon
	if (icon == '02d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '01d' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken4.png)';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken4.png)';
	}
	else {
		return wolken1Box.style.background = 'url(img/veelwolken1.png)';
	}
}
function onAPIError22(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('wolken4');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Achtergrond kleur bij vierde box
function getAPIdata23() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Mount%20Baker,us";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces23(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError23(error);
	});
}
function onAPISucces23(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('stad4');

	// get icon
	if (icon == '01d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '02d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '50d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else {
		return wolken1Box.style.backgroundColor = 'black';
	}
}
function onAPIError23(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('stad4');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Regen bij vierde box
function getAPIdata24() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Mount%20Baker,us";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces24(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError24(error);
	});
}
function onAPISucces24(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('regen4');

	// get icon
	if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else {
		return wolken1Box.style.background = 'none';
	}
}
function onAPIError24(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('regen4');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//API voor weer bij vijfde box
function getAPIdata3() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Mawsynram,in";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces3(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError3(error);
	});
}
function onAPISucces3(response) {
	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	var type = response.weather[0].description;

	// render weather in DOM
	var weatherBox = document.getElementById('weather5');
	weatherBox.innerHTML = '"' + type + '" <br />' + degC + "&#176;C";
}
function onAPIError3(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather5');
	weatherBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Zon bij vijfde box
function getAPIdata4() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Mawsynram,in";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces4(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError4(error);
	});
}
function onAPISucces4(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var zonBox = document.getElementById('zon5');

	// get icon
	if (icon == '01d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	else if (icon == '02d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	// else if (icon == '10d' ) {
	// 	return zonBox.style.background = 'url(img/zon.png)';
	// }
	else if (icon == '01n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	else if (icon == '02n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	// else if (icon == '10n' ) {
	// 	return zonBox.style.background = 'url(img/maan.png)';
	// }
	else {
		return zonBox.style.background = 'none';
	}
}
function onAPIError4(error) {
	console.error('Request failed', error);
	var zonBox = document.getElementById('zon5');
	zonBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Wolken bij vijfde box
function getAPIdata14() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Mawsynram,in";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces14(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError14(error);
	});
}
function onAPISucces14(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('wolken5');

	// get icon
	if (icon == '02d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/wolken1.png)';
	}
	else if (icon == '01d' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken5.png)';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken5.png)';
	}
	else {
		return wolken1Box.style.background = 'url(img/veelwolken1.png)';
	}
}
function onAPIError14(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('wolken5');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Achtergrond kleur bij vijfde box
function getAPIdata20() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Mawsynram,in";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces20(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError20(error);
	});
}
function onAPISucces20(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('stad5');

	// get icon
	if (icon == '01d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '02d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '50d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else {
		return wolken1Box.style.backgroundColor = 'black';
	}
}
function onAPIError20(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('stad5');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Regen bij vijfde box
function getAPIdata25() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Mawsynram,in";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces25(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError25(error);
	});
}
function onAPISucces25(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('regen5');

	// get icon
	if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else {
		return wolken1Box.style.background = 'none';
	}
}
function onAPIError25(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('regen5');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//API voor weer bij zesde box
function getAPIdata26() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Tokyo,jp";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces26(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError26(error);
	});
}
function onAPISucces26(response) {
	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);
	
	var type = response.weather[0].description;

	// render weather in DOM
	var weatherBox = document.getElementById('weather6');
	weatherBox.innerHTML = '"' + type + '" <br />' + degC + "&#176;C";
}
function onAPIError26(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather6');
	weatherBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Zon bij zesde box
function getAPIdata27() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Tokyo,jp";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces27(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError27(error);
	});
}
function onAPISucces27(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var zonBox = document.getElementById('zon6');

	// get icon
	if (icon == '01d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	else if (icon == '02d' ) {
		return zonBox.style.background = 'url(img/zon.png)';
	}
	// else if (icon == '10d' ) {
	// 	return zonBox.style.background = 'url(img/zon.png)';
	// }
	else if (icon == '01n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	else if (icon == '02n' ) {
		return zonBox.style.background = 'url(img/maan.png)';
	}
	// else if (icon == '10n' ) {
	// 	return zonBox.style.background = 'url(img/maan.png)';
	// }
	else {
		return zonBox.style.background = 'none';
	}
}
function onAPIError27(error) {
	console.error('Request failed', error);
	var zonBox = document.getElementById('zon6');
	zonBox.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Wolken bij zesde box
function getAPIdata28() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Tokyo,jp";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces28(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError28(error);
	});
}
function onAPISucces28(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('wolken6');

	// get icon
	if (icon == '02d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/wolken2.png)';
	}
	else if (icon == '01d' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken6.png)';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.background = 'url(img/weinigwolken6.png)';
	}
	else {
		return wolken1Box.style.background = 'url(img/veelwolken1.png)';
	}
}
function onAPIError28(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('wolken6');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Achtergrond kleur bij zesde box
function getAPIdata29() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Tokyo,jp";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces29(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError29(error);
	});
}
function onAPISucces29(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('stad6');

	// get icon
	if (icon == '01d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '01n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '02d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '02n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '03d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '03n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '04d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '04n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '09d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.backgroundColor = 'black';
	}
	else if (icon == '50d' ) {
		return wolken1Box.style.backgroundColor = '#3653c4';
	}
	else {
		return wolken1Box.style.backgroundColor = 'black';
	}
}
function onAPIError29(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('stad6');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//Regen bij zesde box
function getAPIdata30() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Tokyo,jp";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})
	
	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces30(response);	
	})
	
	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError30(error);
	});
}
function onAPISucces30(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;
	var wolken1Box = document.getElementById('regen6');

	// get icon
	if (icon == '09d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '09n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10d' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '10n' ) {
		return wolken1Box.style.background = 'url(img/regen.png)';
	}
	else if (icon == '13d' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '13n' ) {
		return wolken1Box.style.background = 'url(img/sneeuw.png)';
	}
	else if (icon == '11d' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else if (icon == '11n' ) {
		return wolken1Box.style.background = 'url(img/bliksem.png)';
	}
	else {
		return wolken1Box.style.background = 'none';
	}
}
function onAPIError30(error) {
	console.error('Request failed', error);
	var wolken1Box = document.getElementById('regen6');
	wolken1Box.className = 'hidden'; 
}



//----------------------------------------------------------------------------------------------------------------------------------------------



//kaart
//App ID: o7QKNHtuKbuRU1FEcuKl
//App Code: weMaJwvpD76GSBWd6nM5sg

//maak locaties aan
function testObjectsEvents(map, logEvent) {
  // Let's create the same style for all objects
  var style = {
    fillColor: 'rgba(35, 51, 129, 0.3)',
    lineWidth: 5,
    strokeColor: 'rgba(114, 38, 51, 1)'
  };

  // Create image marker object
  var image1Marker = new H.map.Marker(new H.geo.Point(52.0749456, 4.2696802), {
    icon: new H.map.Icon('img/markernl.png')
  });

  var image2Marker = new H.map.Marker(new H.geo.Point(-41.2887467, 174.7772092), {
    icon: new H.map.Icon('img/markernz.png')
  });

  var image3Marker = new H.map.Marker(new H.geo.Point(10.3995334, -71.4609626), {
    icon: new H.map.Icon('img/markerve.png')
  });

  var image4Marker = new H.map.Marker(new H.geo.Point(48.7767986, -121.8144677), {
    icon: new H.map.Icon('img/markerus.png')
  });

  var image5Marker = new H.map.Marker(new H.geo.Point(25.2988198, 91.5824514), {
    icon: new H.map.Icon('img/markerin.png')
  });

  var image6Marker = new H.map.Marker(new H.geo.Point(35.6828387, 139.7594549), {
    icon: new H.map.Icon('img/markerjp.png')
  });

  // Let's give names to our objects and save it as data
  image1Marker.setData('Image Marker');
  image2Marker.setData('Image Marker');
  image3Marker.setData('Image Marker');
  image4Marker.setData('Image Marker');
  image5Marker.setData('Image Marker');
  image6Marker.setData('Image Marker');

  // Now lets add out objects to the container for the conviniece of use
  var container = new H.map.Group({
    objects: [image1Marker, image2Marker, image3Marker, image4Marker, image5Marker, image6Marker]
  });

  // Subscribe to different events on every object
  image1Marker.addEventListener('pointerenter', logEvent);
  image1Marker.addEventListener('pointerleave', logEvent);
  image1Marker.addEventListener('dbltap', logEvent);
  image2Marker.addEventListener('pointerenter', logEvent);
  image2Marker.addEventListener('pointerleave', logEvent);
  image2Marker.addEventListener('dbltap', logEvent);
  image3Marker.addEventListener('pointerenter', logEvent);
  image3Marker.addEventListener('pointerleave', logEvent);
  image3Marker.addEventListener('dbltap', logEvent);
  image4Marker.addEventListener('pointerenter', logEvent);
  image4Marker.addEventListener('pointerleave', logEvent);
  image4Marker.addEventListener('dbltap', logEvent);
  image5Marker.addEventListener('pointerenter', logEvent);
  image5Marker.addEventListener('pointerleave', logEvent);
  image5Marker.addEventListener('dbltap', logEvent);
  image6Marker.addEventListener('pointerenter', logEvent);
  image6Marker.addEventListener('pointerleave', logEvent);
  image6Marker.addEventListener('dbltap', logEvent);

  // Add all of the above created map objects to the map's object collection
  // so they will be rendered onto the map.
  map.addObject(container);
}

//initialize communication with the platform
var platform = new H.service.Platform({
  app_id: 'o7QKNHtuKbuRU1FEcuKl',
  app_code: 'weMaJwvpD76GSBWd6nM5sg',
  useHTTPS: true
});
var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
  tileSize: pixelRatio === 1 ? 256 : 512,
  ppi: pixelRatio === 1 ? undefined : 320
});

// Step 2: initialize a map
var map = new H.Map(document.getElementById('map'), defaultLayers.normal.map, {
  // initial center and zoom level of the map
  center: new H.geo.Point(25, 7),
  zoom: 2,
  pixelRatio: pixelRatio
});

// Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Step 4: Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

// Step 5: create custom logging facilities
var logContainer = document.createElement('ul');
logContainer.className ='log';
logContainer.innerHTML = '<li class="log-entry">Try clicking on elements</li>';
map.getElement().appendChild(logContainer);

// Helper for logging events
function logEvent(evt) {
  var entry = document.createElement('li');
  entry.className = 'log-entry';
  entry.textContent = ['event "', evt.type, '" @ '+ evt.target.getData()].join('');
  logContainer.insertBefore(entry, logContainer.firstChild);
}

// Now use the map as required...
testObjectsEvents(map, logEvent);










// init data stream
getAPIdata1();
getAPIdata2();
getAPIdata3();
getAPIdata4();
getAPIdata5();
getAPIdata6();
getAPIdata7();
getAPIdata8();
getAPIdata9();
getAPIdata10();
getAPIdata11();
getAPIdata12();
getAPIdata13();
getAPIdata14();
getAPIdata15();
getAPIdata16();
getAPIdata17();
getAPIdata18();
getAPIdata19();
getAPIdata20();
getAPIdata21();
getAPIdata22();
getAPIdata23();
getAPIdata24();
getAPIdata25();
getAPIdata26();
getAPIdata27();
getAPIdata28();
getAPIdata29();
getAPIdata30();
getAPIdata31();

