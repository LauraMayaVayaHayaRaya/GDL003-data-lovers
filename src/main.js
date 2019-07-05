const showList=(results=false)=>{
  if(results){
    RICKANDMORTY.results=results;
  }
  document.getElementById("categories").style.display="none";

document.getElementById("resultItems").innerHTML='';
  Object.keys(RICKANDMORTY.results).forEach(function(item){
    let character=RICKANDMORTY.results[item];
    let htmlElement=document.createElement('section');
    htmlElement.className='category';

    htmlElement.innerHTML='<a href="#characters">'+character.name+'</a><img src="'+character.image+'">';
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
};

document.getElementById('sortAsc').addEventListener('click',function(){sortList()});
document.getElementById('sortDesc').addEventListener('click',function(){sortList('desc')});


  const filterData = () => {
    let characters=RICKANDMORTY.results;
    let specie=document.querySelectorAll("input[name=species]:checked")[0].value;
    let results=filter(characters,specie);
    showList(results);

  };
  document.getElementById("filterButton").addEventListener("click", filterData);
