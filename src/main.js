const showList=(results=false)=>{
  if(results){
    RICKANDMORTY.results=results;
  }
  document.getElementById("categories").style.display="none";
  document.getElementById("statisticsSection").style.display="none";


document.getElementById("resultItems").innerHTML='';
  Object.keys(RICKANDMORTY.results).forEach(function(item){
    let character=RICKANDMORTY.results[item];

    console.log(character);
    let htmlElement=document.createElement('section');
    htmlElement.className='category';
    htmlElement.innerHTML='<a href="#characters">'+character.name+'</a><img src="'+character.image+'">';
    document.getElementById("resultItems").appendChild(htmlElement);

  });
  document.getElementById("result").style.display="block";
  document.getElementById("statisticsSection").style.display="none";
};
document.getElementById("characters").addEventListener("click", function(){showList()});


const showHome=()=>{
  document.getElementById("result").style.display="none";
  document.getElementById("categories").style.display="block";
  document.getElementById("statisticsSection").style.display="none";

};
document.getElementById("homeButton").addEventListener("click", showHome);



const sortList=(order='asc')=>{
  RICKANDMORTY.results.sort(window.sort('name',order));
  showList(RICKANDMORTY.results);
};
document.getElementById('sortAsc').addEventListener('click',function(){sortList()});
document.getElementById('sortDesc').addEventListener('click',function(){sortList('desc')});


  const filterData = () => {
    let characters=RICKANDMORTY.results;
    let specie=document.querySelectorAll("input[name=species]:checked")[0].value;
    let results=window.filter(characters,specie);
    showList(results);
  };
  document.getElementById("filterButton").addEventListener("click", filterData);

const showStatistics = () => {
  document.getElementById("result").style.display="block";
  document.getElementById("sortAsc").style.display="none";
  document.getElementById("sortDesc").style.display="none";
  document.getElementById("categories").style.display="none";
  //document.getElementById("statisticsSection").style.display="block";
  document.getElementById("titleSort").innerHTML="Select a button to calculate";
  document.getElementById("titleFilter").style.display="none";
  document.getElementById("titleCharacters").innerHTML="STATISTICS";
  document.getElementById("statsButton").style.display="block";
  document.getElementById("filterButton").style.display="none";
  };
    document.getElementById("statisticsButtonImg").addEventListener("click", showStatistics);

const calculateStatistics = () => {
    let characters=RICKANDMORTY.results;
    let specieSelected=document.querySelectorAll("input[name=species]:checked")[0].value;
    let specieSelectedList=filter(characters,specieSelected);
    let percentage = parseFloat(specieSelectedList.length*100 /493).toFixed(2);
    document.getElementById("totalStats").innerHTML=("Total of " + specieSelected + "s"  + " = " + specieSelectedList.length + ".");
    document.getElementById("percentageStats").innerHTML=("The specie "+ specieSelected + " represents " + percentage + "% " + "of the 493 characters of the serie");
  };
document.getElementById("statsButton").addEventListener("click", calculateStatistics);


  /* const filtrado = () => {
     let radioForm = document.getElementById("filterFormHtml");
     radioForm.addEventListener("submit", function(event) {
       let data = new FormData(radioForm);
       let radioValue = "";
       for (const entry of data) {
                 radioValue = entry[1];
       };

       let rickandmortylist = RICKANDMORTY.results;
       console.log (rickandmortylist);
       console.log(radioValue);

       let filtered = rickandmortylist.filter(function(el) {
           return el.species == radioValue;
         })
       console.log(filtered);
       event.preventDefault();
     }, false);
   }*/
