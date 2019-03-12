const map = document.querySelector("#map");
let paths = map.querySelectorAll(".map_img a");
let links = map.querySelectorAll(".list_map ul li a");

links.forEach(function (link){
    link.addEventListener("click", function(){
        let toto = link.getAttribute('title');
        console.log(link);
        document.getElementById("japan").style.fill = "#3100a5";
    })
})
