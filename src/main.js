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

/*//FILTRADO DE CATEGORIAS

  const filterData = () => {
    let radioForm = document.getElementById("filterFormHtml");
    radioForm.addEventListener("submit", function(event) {
      //  let checked = document.getElementsByTagName("radio")
      let data = new FormData(radioForm);

      let radioValue = "";
      for (const entry of data) {
        radioValue = entry[1];
      };
      let rickandmortylist = RICKANDMORTY.results;
      let filtered = rickandmortylist.filter(function(el) {
          return el.species == radioValue;
        }
      )
      console.log(filtered);

      showList(filtered);
      event.preventDefault();
    }, false);
  }


  document.getElementById("filterButton").addEventListener("click", filterData);
