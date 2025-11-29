// select HTML elements in the document
const myCity = document.querySelector('#city');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myLat = "49.74673131285797"
const myLong = "6.733830179230896"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=9be1d21aeb8a46032465e98b27afba77&units=metric`;

async function apiFetch() {
  try {
    const response = await fetch(url); // Wait for the promise to resolve
    if (response.ok) {
    const data = await response.json(); // Wait for the JSON parsing to complete
    console.log(data); // Log the data to the console
    displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
    console.error(error); // Output: "Operation failed."
  }
};

function displayResults(data) {
    myCity.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconSrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}


apiFetch();
