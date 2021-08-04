const cityTxt = document.getSelection("cityTxt")
const searchBtn = document.getElementById("searchBtn")
const displayWeatherDiv = document.getElementById("displayWeatherDiv")


function getweatherByLocation(cityTxt){
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityTxt.value}&appid=15db85aec88171ae528b5d10383b2d7e&units=imperial`
    fetch(WEATHER_URL)
    .then(response =>{
        return response.json()
    }).then(result =>{
        console.log(result)
        displayWeatherDiv(result)
    })

}
function displayWeather(form){
        const menuform = form.main
        const displayWeatherDetails = `<div id = "div">
        </div>
    <img src = '${menuform.coord}'/>
    <p>'${menuform.id}'</p>
    <p>'${menuform.main}'</p>
    <p>'${menuform.sys}'</p>`

displayWeatherDiv.innerHTML = displayWeatherDetails
     

getweatherByLocation(function(result){
    displayWeather(result)
})


searchBtn.addEventListener("click",function(){
    const cityTxt = search.value
        getweatherByLocation(cityTxt)
})
}
