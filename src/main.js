const showList=()=>{
  document.getElementById("categories").style.display="none";


  let url = [];
  let i = 1;
  do {(url += "https://rickandmortyapi.com/api/character/?page=" + i, i++);
        
          fetch (url)
          .then(rawApi => {
          return rawApi.json();
          })
          .then(showApi => {
            console.log(showApi)
              Object.keys(showApi.results).forEach(function(item){
                let character=showApi.results[item];
                let section=document.createElement('section');
                section.className='category';
                section.innerHTML='<a href="#genders">'+character.name+'</a><img src="'+character.image+'">';
                document.getElementById("result").appendChild(section);
              });
    });
    document.getElementById("result").style.display="block";
} while (i <26);
};
document.getElementById("characters").addEventListener("click", showList);



//
