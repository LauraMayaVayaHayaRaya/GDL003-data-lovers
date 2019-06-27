const showList=()=>{
  document.getElementById("categories").style.display="none";
};

document.getElementById("categories").addEventListener("click", showList);


let charactersApi = "https://rickandmortyapi.com/api/character/";
let request = new XMLHttpRequest();

//se hace console.log para corroborar que la variable request es object
  console.log (typeof request);

//en el video de ajax con java script agrega un tercer parámetro al
//request.open: un boolean para especificar si será asíncrono (true), o no (false) (7:45)
// **En el mismo video podría estar la clave para bajar la info de un api local (7:50)
request.open("GET", charactersApi);
request.responseType = "json";
request.send();

//el .onload ejecuta la función inmediatamente después de que el objeto request se carga
request.onload = function (){
    let characters = request.response;


}
