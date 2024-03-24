const weatherBtn = document.getElementById('weatherBtn');
const searchedLocation = document.getElementById('searchedLocation');
let temp = document.querySelector("#temp");
let humidity = document.querySelector("#humidity");
let max_temp = document.querySelector("#max_temp");
let min_temp = document.querySelector("#min_temp");
let visibility = document.querySelector("#visibility");
let weather = document.querySelector("#weather");
let weather_img = document.querySelector("#weather_img");
let weather_card = document.querySelector("weather_card");
let myCard = document.querySelector("#myCard");

const API_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "da411e1cc06c668b1a9782e87f191b16";   

let RAIN_URL = "https://images.unsplash.com/photo-1565065524861-0be4646f450b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW55fGVufDB8fDB8fHww;"
let HOT_URL = "https://images.unsplash.com/photo-1474174444668-bfc40156c277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bnxlbnwwfHwwfHx8MA%3D%3D;"
let COLD_URL = "https://images.unsplash.com/photo-1518681313997-d6a78deaa7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvbGR8ZW58MHx8MHx8fDA%3D"

weatherBtn.addEventListener("click",()=>{
   
})

document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevents the default form action

    let formData = new FormData(this); // Grabs data from the form that triggered the event
    let location = formData.get('location'); // Retrieves the username from the form data
    location = location.toUpperCase();

    let response = await fetch(`${API_URL}?q=${location}&appid=${API_KEY}&units=metric`)
    let jsonResponse =await response.json();
    let result = jsonResponse.main;
    
    searchedLocation.innerText = location ;
    searchedLocation.style.fontWeight = `bold` ;
    temp.innerText = `Temperature : ${result.temp}\u00B0C` ;
    min_temp.innerText = `Max_Temp : ${result.temp_max}\u00B0C` ;
    max_temp.innerText = `Min_Temp : ${result.temp_min}\u00B0C` ;
    humidity.innerText = `Humidity : ${result.humidity} \u00B0C` ;
    visibility.innerText = `Visibility : ${jsonResponse.visibility}` ;
    weather.innerText = `The weather can be described as ${jsonResponse.weather[0].description} and feels like ${result.feels_like}\u00B0C` ;
    weather.style.text = 'italic';


    weather_img.src =  result.humidity>80? RAIN_URL : result.temp>20? HOT_URL : COLD_URL

//    myCard.classList.remove('weather_card')
   myCard.classList.remove('weather_card')
   
   
    
  });
