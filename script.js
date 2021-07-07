fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(countriesData => {
        displayCountries(countriesData)
    })



const displayCountries = (countriesData) => {
    for (let i = 0; i < countriesData.length; i++) {
        const country = countriesData[i];
        console.log(country.name)

        const countriesUl = document.getElementById("countries");

        // const countryItem = document.getElementById("country");

        // const countriesUl = document.createElement("ul")

        // countries.appendChild(countryItem);

        const countriesLi = document.createElement("li");

        countriesLi.innerText = country.name

        countriesUl.appendChild(countriesLi);


        // li.innerText = (country.name);

        // countryItem.appendChild(li)

        // const li = countryItem.innerText = country.name;



    }
}