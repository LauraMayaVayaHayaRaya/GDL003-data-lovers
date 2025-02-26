// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const sort = (key, order='asc') => {
  return function(a, b) {
    if(!a.hasOwnProperty(key) ||
       !b.hasOwnProperty(key)) {
  	  return 0;
    }

    const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ?
      (comparison * -1) : comparison
    );
  };

};


const filter =(results,specie)=>{
  let characters=results.filter(character => character.species == specie);
  return characters;
}


const calcStats = (results, specie) => {
  let totalCharacters = results.character.length;
  console.log(totalCharacters);
}


window.sort=sort;
window.filter =filter;
window.calcStats = calcStats;
