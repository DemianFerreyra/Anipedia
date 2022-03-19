var datos = [];
datos.push({titulo: 'naruto', desc: 'naruto ananashe'})
datos.push({titulo: 'dragon ball', desc: 'dragon ball ananashe deaaaaaaaa dead dae a das da sad a ads '})
console.log(datos)


    var dynamic = document.querySelector('.resultado');  
    for (var i = 0; i < datos.length; i++) {
      var fetch = document.querySelector('.resultado').innerHTML;  
      dynamic.innerHTML = `<div class="tarjeta">
      <img src=${"./sample.jpg"} class="imagen" alt="">
      <h1>${datos[i].titulo}</h1>
      <p>${datos[i].desc}</p>
      </div>` + fetch ;
}
