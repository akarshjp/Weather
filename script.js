var button= document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var tempFeelsLike = document.querySelector(".tempFeelsLike");
var tempMax = document.querySelector(".tempMax");
var tempMin = document.querySelector(".tempMin");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind")

button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value +'&appid=600465d24295cedbba2ab30d9a28607c')
    .then(response => response.json())
    .then(data => {console.log(data);
        var nameValue=data['name'];
        var tempValue=data['main']['temp'];
        var descValue=data['weather'][0]['description'];
        var windValue=data['wind']['speed']
        var tempFeelsLikeValue=data['main']['feels_like']
        var tempMaxValue=data['main']['temp_max']
        var tempMinValue=data['main']['temp_min']
        var humidityValue=data['main']['humidity']

        name.innerHTML= nameValue;
        temp.innerHTML= "Temperature: "+(tempValue-273.15).toFixed(2)+"°C";
        desc.innerHTML= "Weather Conditions: "+descValue;
        wind.innerHTML="Wind Speed: "+windValue+" m/hr";
        tempFeelsLike.innerHTML="Feels like: "+(tempFeelsLikeValue-273.15).toFixed(2)+"°C";
        tempMax.innerHTML="Maximum Temperature: "+(tempMaxValue-273.15).toFixed(2)+"°C";
        tempMin.innerHTML="Minimum Temperature: "+(tempMinValue-273.15).toFixed(2)+"°C";
        temp.humidity="Humidity: "+humidityValue;

    })
.catch(err=> alert("Wrong city name"))//in case of error to alert the user
})

