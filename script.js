var datos = [{titulo: 'tokyo revengers', desc: 'god 10/10'}];
datos.unshift({titulo: 'naruto', desc: 'naruto ananashe'})
datos.unshift({titulo: 'dragon ball', desc: 'dragon ball ananashe deaaaaaaaa dead dae a das da sad a ads '})


    var dynamic = document.querySelector('.resultado');  
    for (var i = 0; i < datos.length; i++) {
      var fetch = document.querySelector('.resultado').innerHTML;  
      dynamic.innerHTML = `<div class="tarjeta">
      <img src=${"/imagenes/sample.jpg"} class="imagen" alt="">
      <h1>${datos[i].titulo}</h1>
      <p>${datos[i].desc}</p>
      </div>` + fetch ;
}
var dynamic = document.querySelector('.recomendaciones');  
for (var i = 0; i < datos.length; i++) {
  var fetch = document.querySelector('.recomendaciones').innerHTML;  
  dynamic.innerHTML = `<div class="tarjeta">
  <img src=${"/imagenes/sample.jpg"} class="imagen" alt="">
  <h1>${datos[i].titulo}</h1>
  <p>${datos[i].desc}</p>
  </div>` + fetch ;
}
