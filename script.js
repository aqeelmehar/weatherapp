const API_KEY = `51e6460b4f3b8739f3f6372f9ff799dc`
const form = document.querySelector("form");
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const SearchCity = document.getElementById("SearchCity")
//const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

const getWeather = async (city) => {
    //weather.innerHTML = `<h2>Loading... </h2>`
    cityName.innerHTML = city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    //console.log(response);
    const data = await response.json()
    //console.log(data);
    return showWeather(data)
}

const showWeather = (data) =>{
    //console.log(data)
     weather.innerHTML = `
     <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Temperature</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">${data.main.temp}<small class="text-muted fw-light">/degree celcius</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Max Temprature is ${data.main.temp_max} / Degree Celcius</li>
                <li>Min Temprature is ${data.main.temp_min} / Degree Celcius</li>
             
              </ul>
              <!-- <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button> -->
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Pressure</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">${data.main.pressure}<small class="text-muted fw-light">/ Pascal</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Feels like ${data.main.feels_like}</li>
                <li>Hmidity is ${data.main.humidity}</li>
                
              </ul>
              <!-- <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button> -->
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-primary">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Weather Icon</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""><small class="text-muted fw-light"></small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${data.weather[0].main}</li>
               
                
              </ul>
              <!-- <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button> -->
            </div>
          </div>
        </div>
     
     `
}
// let valued = console.log(search.value)
// SearchCity.innerHTML = `
// <h1>weather For ${valued}</h1>

// `

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)


