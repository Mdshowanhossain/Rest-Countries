fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(countriesData => {
        displayCountries(countriesData)
    })


const displayCountries = (countriesData) => {
    const countriesDiv = document.getElementById("countries");
    for (let i = 0; i < countriesData.length; i++) {
        const country = countriesData[i];
        // console.log(country.name)
        const countryDiv = document.createElement("div");
        const countryInfo = `
        <h2>${country.name}</h2>
        <p>Capital- ${country.capital}<p>
        <small>Area- ${country.area}<small>
        <small>Population- ${country.population}<small>
        `
        countryDiv.innerHTML = countryInfo
        countriesDiv.appendChild(countryDiv)
    }
}









// fetch('https://restcountries.eu/rest/v2/all')
//     .then(response => response.json())
//     .then(countriesData => {
//         displayCountries(countriesData)
//     })


// const displayCountries = (countriesData) => {
//     const countriesDiv = document.getElementById("countries");
//     for (let i = 0; i < countriesData.length; i++) {
//         const country = countriesData[i];
//         // console.log(country.name)

//         const countryDiv = document.createElement("div");

//         const name = document.createElement("h3");
//         name.innerText = country.name;
//         countryDiv.appendChild(name);

//         const capital = document.createElement("p");
//         capital.innerText = 'Capital: ' + country.capital;
//         countryDiv.appendChild(capital);

//         const area = document.createElement("p");
//         area.innerText = 'Area: ' + country.area
//         countryDiv.appendChild(area);

//         const population = document.createElement("p")
//         population.innerText = 'Population: ' + country.population;
//         countryDiv.appendChild(population);

//         countriesDiv.appendChild(countryDiv);

//     }
// }