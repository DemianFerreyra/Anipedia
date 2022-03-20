
var datos = [{ titulo: 'tokyo revengers', desc: 'god 10/10' }];
datos.unshift({ titulo: 'naruto', desc: 'naruto ananashe' })
datos.unshift({ titulo: 'dragon ball', desc: 'dragon ball ananashe deaaaaaaaa dead dae a das da sad a ads ' })


function topanime(arreglo){
  var dynamic = document.querySelector('.resultado');
  for (var i = 0; i < arreglo.length; i++) {
    var fetch = document.querySelector('.resultado').innerHTML;
    dynamic.innerHTML = `<div class="tarjeta">
        <img src=${arreglo[i].image} class="imagen" alt="">
        <h1>${arreglo[i].name}</h1>
        </div>` + fetch;
  } 
}
export {topanime};