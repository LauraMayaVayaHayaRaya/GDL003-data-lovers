const showList=(results=false)=>{
  console.log(results)
  if(results){
    RICKANDMORTY.results=results
  }
  document.getElementById("categories").style.display="none";
  /*let charactersApi = "https://rickandmortyapi.com/api/character/";//buscar funcion que se aplique en las 25 pag//
let request = new XMLHttpRequest();

//se hace console.log para corroborar que la variable request es object
  console.log (typeof request);

//en el video de ajax con java script agrega un tercer parámetro al
//request.open: un boolean para especificar si será asíncrono (true), o no (false) (7:45)
// **En el mismo video podría estar la clave para bajar la info de un api local (7:50)
request.open("GET", charactersApi);results
request.responseType = "json";
request.send();

//el .onload ejecuta la función inmediatamente después de que el objeto request se carga
request.onload = function (){
    let characters = request.response;

    console.log(characters);
characters
}*/
document.getElementById("resultItems").innerHTML=''
  Object.keys(RICKANDMORTY.results).forEach(function(item){
    let character=RICKANDMORTY.results[item];
    let htmlElement=document.createElement('section');
    htmlElement.className='category';
    htmlElement.innerHTML='<a href="#genders">'+character.name+'</a><img src="'+character.image+'">';
    document.getElementById("resultItems").appendChild(htmlElement);  
  });
  document.getElementById("result").style.display="block";
};
document.getElementById("characters").addEventListener("click", function(){showList()});

const showHome=()=>{
  document.getElementById("result").style.display="none";
  document.getElementById("categories").style.display="block";
};
document.getElementById("homeButton").addEventListener("click", showHome);


const sortList=(order='asc')=>{
  RICKANDMORTY.results.sort(sort('name',order));
  showList(RICKANDMORTY.results);
}
document.getElementById('sortAsc').addEventListener('click',function(){sortList()});
document.getElementById('sortDesc').addEventListener('click',function(){sortList('desc')});