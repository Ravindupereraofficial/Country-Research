
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
            <p class="card-text" style="color: #555; animation: fadeInText 2.5s ease-in-out;">Population: ${element.population.toLocaleString()}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 3s ease-in-out;">Region: ${element.region}</p>
            <p class="card-text" style="color: #555; animation: fadeInText 3.5s ease-in-out;">Capital: ${element.capital ? element.capital[0] : "N/A"}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" 
                            style="transition: background-color 0.3s; animation: fadeInText 4s ease-in-out;">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" 
                            style="transition: background-color 0.3s; animation: fadeInText 4.5s ease-in-out;">Edit</button>
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
          <div class="col">
          <div class="card shadow-sm">
            <center><img src=${element.flags.png} width="420px" height="300px"></center>
            <div class="card-body">
            <h3>${element.name.common}</h3>
              <p class="card-text">Population : ${element.population}</p>
              
              <p class="card-text">Capital : ${element.capital}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                 <a href='${element.maps.googleMaps}' target="_blank"> <button type="button" class="btn btn-sm btn-outline-secondary">Go Now 🛫🛬🌍</button></a><br>

                 
                 <a href='${element.maps.openStreetMaps}' target="_blank"> <button type="button" class="btn btn-sm btn-outline-secondary">Street View 🌍🚌🚙🛺</button></a>
                 
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
          </div>
        `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}