const showList=()=>{
  document.getElementById("categories").style.display="none";
  let charactersApi = "https://rickandmortyapi.com/api/character/";
let request = new XMLHttpRequest();
request.open("GET", charactersApi);
request.responseType = "json";
request.send();
request.onload = function (){
    let characters = request.response;
    console.log(characters);
    Object.keys(characters.results).forEach(function(item){
        let character=characters.results[item];
        let section=document.createElement('section');
        section.className='category';
        section.innerHTML='<a href="#genders">'+character.name+'</a><img src="'+character.image+'">';
document.getElementById("result").appendChild(section);  
});

}
  document.getElementById("result").style.display="block";
};
document.getElementById("characters").addEventListener("click", showList);



