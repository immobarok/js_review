const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change",setWeather);

function setWeather(){
     const choice = select.value;
     if(choice == "sunny"){
          para.textContent = "It's sunny outside!"
     }
     else if(choice == "rainy"){
          para.textContent = "Rain is falling outside!"
     }
     else if(choice == "snowing"){
          para.textContent = "The snow is coming down!"
     }
     else if(choice == "overcast"){
          para.textContent = "It isn't raining, but the sky is gray and gloomy!"
     }
     else{
          para.textContent = "Please select a weather condition.";
     }
}
