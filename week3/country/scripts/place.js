document.addEventListener("DOMContentLoaded", function () {
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last modified: " + document.lastModified;
  } else {
    console.error("Element with ID 'lastModified' not found.");
  }
});

// Display conutry data function
const data = {
  name: "Japan",
  area: "377,975 km2",
  population: "123,590,000",
  capital: "Tokyo",
  languages: "Japanese",
  currency: "Japanese yen (¥)",
  timeZone: "UTC +09:00",
  callingCode: "+81",
  internetTLD: ".jp",
};
const data1 = {
  temperature: "10 ºC",
  coditions: "Partly Cloudy",
  wind: "5 km/h",
  wind_Chill: "9.8 ºC",
};
const dataIntoDetails = (data) => {
  const details = document.createElement("ul");
  Object.entries(data).forEach(([key, value]) => {
    const label = document.createElement("li");
    label.innerHTML = `<strong>${key}:</strong> ${value}`;
    details.appendChild(label);
  });
  return details;
};

const addInf = document.querySelector(".details");
addInf.appendChild(dataIntoDetails(data));

const addW = document.querySelector(".weather-inf");
addW.appendChild(dataIntoDetails(data1));

function calculateWindChill(temp, windSpeed) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(2);
}

// const temperature = 30;
// const windSpeed = 10;

if (temperature <= 50 && windSpeed > 3) {
  const windChill = calculateWindChill(temperature, windSpeed);
  console.log(`The wind chill is ${windChill}°F`);
} else {
  console.log("Wind chill calculation is not applicable.");
}
