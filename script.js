fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(countriesData => {
        displayCountries(countriesData)
    })

const displayCountries = (countriesData) => {
    const countriesDiv = document.getElementById("countries");
    countriesData.forEach(country => {
        // console.log(country.name)
        const countryDiv = document.createElement("div");
        countriesDiv.className = "countriesDiv"
        countryDiv.className = 'countryDiv'
        const countryInfo = `
        <h2 class="country">${country.name}</h2>
        <p class="capital">Capital- ${country.capital}<p>
        <small class="area">Area- ${country.area}<small></br>
        <small class="population">Population- ${country.population}<small><br/>
        <button to="showCountry" onclick="displayCountry('${country.name}')" class="details">Details</button>
        `
        countryDiv.innerHTML = countryInfo
        countriesDiv.appendChild(countryDiv)
    });
}
const displayCountry = name => {
    // console.log(name)
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => response.json())
        .then(responseData => showCountryDetails((responseData[0])))
}
const showCountryDetails = (countriesData) => {
    // console.log(responseData)
    const showCountry = document.getElementById("showCountry");
    const createDiv = document.createElement("div")
    createDiv.className = "countryDivs"
    const showInfo = `
    <h2 class="country">${countriesData.name}</h2>
    <p class="capital">Capital- ${countriesData.capital}<p>
    <small class="area">Area- ${countriesData.area}<small></br>
    <small class="population">Population- ${countriesData.population}<small><br/>
        <img class="flag" src=${countriesData.flag} alt=""/>
    `
    createDiv.innerHTML = showInfo;
    showCountry.appendChild(createDiv);
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


// < !--MAP METHOD FOR SHOW DATA-- >


// const displayCountries = (countriesData) => {
//     const countriesDiv = document.getElementById("countries");

//     countriesData.map((country) => {
//         console.log(country.name)
//         const countryDiv = document.createElement("div");
//         countriesDiv.className = "countriesDiv"
//         countryDiv.className = 'countryDiv'
//         const countryInfo = `
//             <h2 class="country">${country.name}</h2>
//             <p class="capital">Capital- ${country.capital}<p>
//             <small class="area">Area- ${country.area}<small></br>
//             <small class="population">Population- ${country.population}<small><br/>
//             <button class="details">Details</button>
//             `
//         countryDiv.innerHTML = countryInfo
//         countriesDiv.appendChild(countryDiv)
//     })




        // < !--FOREACH METHOD FOR SHOW DATA-- >


    //     countriesData.forEach(country => {
    //         console.log(country.name)
    //         const countryDiv = document.createElement("div");

    //         countriesDiv.className = "countriesDiv"

    //         countryDiv.className = 'countryDiv'

    //         const countryInfo = `

    // <h2 class="country">${country.name}</h2>
    // <p class="capital">Capital- ${country.capital}<p>
    // <small class="area">Area- ${country.area}<small></br>
    // <small class="population">Population- ${country.population}<small><br/>
    // <button class="details">Details</button>
    // `
    //         countryDiv.innerHTML = countryInfo
    //         countriesDiv.appendChild(countryDiv)
    //     });



// <!-- FOR LOOP METHOD FOR SHOW DATA -->



// for (let i = 0; i < countriesData.length; i++) {
//         const country = countriesData[i];
//         console.log(country.name)
//         const countryDiv = document.createElement("div");

//         countriesDiv.className = "countriesDiv"

//         countryDiv.className = 'countryDiv'

//         const countryInfo = `

//         <h2 class="country">${country.name}</h2>
//         <p class="capital">Capital- ${country.capital}<p>
//         <small class="area">Area- ${country.area}<small></br>
//         <small class="population">Population- ${country.population}<small><br/>
//         <button class="details">Details</button>
//         `
//         countryDiv.innerHTML = countryInfo
//         countriesDiv.appendChild(countryDiv)
//     } 