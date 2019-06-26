const showList=()=>{
  document.getElementById("categories").style.display="none";
};

document.getElementById("categories").addEventListener("click", showList);


let charactersApi = "https://rickandmortyapi.com/api/character/";
let request = new XMLHttpRequest();
request.open("GET", charactersApi);
request.responseType = "json";
request.send();
request.onload = function (){
    let characters = request.response;
    
    console.log(characters);
}