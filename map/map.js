const map = document.querySelector("#map");
let paths = map.querySelectorAll(".map_img a");
let links = map.querySelectorAll(".list_map ul li a");
let country = "";

links.forEach(function (link){
    link.addEventListener("click", function(){
        if(country!= ""){
            country.style.fill = "#75a3a3";
            let identifier = link.getAttribute("title");
            console.log(identifier);
            let countryUpdate = document.getElementById(identifier);
            countryUpdate.style.fill = "#3100a5";
            country = countryUpdate;
        } else {
            let identifier = link.getAttribute("title");
            let countryUpdate = document.getElementById(identifier);
            countryUpdate.style.fill = "#3100a5";
            country = countryUpdate;
        }
    })
})