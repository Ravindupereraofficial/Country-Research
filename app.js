
loadItems();

async function loadItems() {
    
    let res = await fetch(" https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
<div class="col" style="animation: fadeInCard 1s ease-in-out;">
    <div class="card shadow-sm" style="transition: transform 0.3s ease, box-shadow 0.3s ease; animation: fadeInCard 1s ease-in-out;">
        <img src="${element.flags.png}" alt="Flag of ${element.name.common}" width="395px" height="300px" 
             style="border-radius: 8px; transition: transform 0.3s ease;">
        <h2 style="font-size: 1.5rem; color: #333; animation: fadeInText 1.5s ease-in-out;">${element.name.common}</h2>
        <div class="card-body" style="transition: background-color 0.3s ease; animation: fadeInText 2s ease-in-out;">
            <p class="card-text" style="color: #555; animation: fadeInText 2.5s ease-in-out;"><strong>Native Name:</strong> ${element.name.nativeName ? Object.values(element.name.nativeName)[0].common : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 3s ease-in-out;"><strong>Population:</strong> ${element.population.toLocaleString()}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 3.5s ease-in-out;"><strong>Region:</strong> ${element.region}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 4s ease-in-out;"><strong>Subregion:</strong> ${element.subregion || "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 4.5s ease-in-out;"><strong>Capital:</strong> ${element.capital ? element.capital[0] : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 5s ease-in-out;"><strong>Area:</strong> ${element.area ? element.area.toLocaleString() + " km²" : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 5.5s ease-in-out;"><strong>Languages:</strong> ${element.languages ? Object.values(element.languages).join(', ') : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 6s ease-in-out;"><strong>Timezones:</strong> ${element.timezones.join(', ')}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 6.5s ease-in-out;"><strong>Currency:</strong> ${element.currencies ? Object.values(element.currencies)[0].name + " (" + Object.values(element.currencies)[0].symbol + ")" : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 7s ease-in-out;"><strong>UN Member:</strong> ${element.unMember ? "Yes" : "No"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 7.5s ease-in-out;"><strong>Independent:</strong> ${element.independent ? "Yes" : "No"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 8s ease-in-out;"><strong>Demonym:</strong> ${element.demonyms ? element.demonyms.eng.m : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 8.5s ease-in-out;"><strong>Borders:</strong> ${element.borders ? element.borders.join(', ') : "None"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 9s ease-in-out;"><strong>Continent:</strong> ${element.continents ? element.continents[0] : "N/A"}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                   <button type="button" class="btn btn-sm btn-outline-secondary" 
                            style="transition: background-color 0.3s; animation: fadeInText 9.5s ease-in-out; style="padding: 10px;">View</button>
                   
                            <button type="button" class="btn btn-sm btn-outline-secondary" 
                            style="transition: background-color 0.3s; animation: fadeInText 10s ease-in-out; style="padding: 10px;">Edit</button>
                </div>
                <small class="text-body-secondary" style="font-size: 0.8rem; color: #888;">9 mins</small>
            </div>
        </div>
    </div>
</div>


        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}

function search(){
    console.log("Search!!");
    let txtSearch = document.getElementById("userinput").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
          <div class="col" style="animation: fadeInCard 1s ease-in-out;">
    <div class="card shadow-sm" style="transition: transform 0.3s ease, box-shadow 0.3s ease; animation: fadeInCard 1s ease-in-out;">
        <img src="${element.flags.png}" alt="Flag of ${element.name.common}" width="395px" height="300px" 
             style="border-radius: 8px; transition: transform 0.3s ease;">
        <h2 style="font-size: 1.5rem; color: #333; animation: fadeInText 1.5s ease-in-out;">${element.name.common}</h2>
        <div class="card-body" style="transition: background-color 0.3s ease; animation: fadeInText 2s ease-in-out;">
            <p class="card-text" style="color: #555; animation: fadeInText 2.5s ease-in-out;"><strong>Native Name:</strong> ${element.name.nativeName ? Object.values(element.name.nativeName)[0].common : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 3s ease-in-out;"><strong>Population:</strong> ${element.population.toLocaleString()}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 3.5s ease-in-out;"><strong>Region:</strong> ${element.region}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 4s ease-in-out;"><strong>Subregion:</strong> ${element.subregion || "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 4.5s ease-in-out;"><strong>Capital:</strong> ${element.capital ? element.capital[0] : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 5s ease-in-out;"><strong>Area:</strong> ${element.area ? element.area.toLocaleString() + " km²" : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 5.5s ease-in-out;"><strong>Languages:</strong> ${element.languages ? Object.values(element.languages).join(', ') : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 6s ease-in-out;"><strong>Timezones:</strong> ${element.timezones.join(', ')}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 6.5s ease-in-out;"><strong>Currency:</strong> ${element.currencies ? Object.values(element.currencies)[0].name + " (" + Object.values(element.currencies)[0].symbol + ")" : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 7s ease-in-out;"><strong>UN Member:</strong> ${element.unMember ? "Yes" : "No"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 7.5s ease-in-out;"><strong>Independent:</strong> ${element.independent ? "Yes" : "No"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 8s ease-in-out;"><strong>Demonym:</strong> ${element.demonyms ? element.demonyms.eng.m : "N/A"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 8.5s ease-in-out;"><strong>Borders:</strong> ${element.borders ? element.borders.join(', ') : "None"}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 9s ease-in-out;"><strong>Continent:</strong> ${element.continents ? element.continents[0] : "N/A"}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" 
                            style="transition: background-color 0.3s; animation: fadeInText 9.5s ease-in-out; style="padding: 10px;">View</button>
                   
                            <button type="button" class="btn btn-sm btn-outline-secondary" 
                            style="transition: background-color 0.3s; animation: fadeInText 10s ease-in-out; style="padding: 10px;">Edit</button>
                </div>
                <small class="text-body-secondary" style="font-size: 0.8rem; color: #888;">9 mins</small>
            </div>
        </div>
    </div>
</div>
        `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}