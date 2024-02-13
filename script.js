let container = 0;

const span = document.querySelector('span');
const buttons = document.querySelectorAll('.boton');

buttons.forEach(boton => {

  boton.addEventListener('click', function(e) {

    const style = e.currentTarget.classList;

    if (style.contains('aumentar1')) {
      container++;
    }
    else if (style.contains('aumentar10')) {
      container += 10;
    }
    else if (style.contains('aumentar100')) {
      container += 100;
    }
    else if (style.contains('disminuir1')) {
      container--;
    }
    else if (style.contains('disminuir10')) {
      container -= 10;
    }
    else if (style.contains('disminuir100')) {
      container -= 100;
    }
    else {
      container = 0;
    }

    span.textContent = container;

  }) 
})











/*let contador = 0;

const aumentar1 = document.getElementById('aumentar1');
const aumentar10 = document.getElementById('aumentar10');
const aumentar100 = document.getElementById('aumentar100');
const disminuir1 = document.getElementById('disminuir1');
const disminuir10 = document.getElementById('disminuir10');
const disminuir100 = document.getElementById('disminuir100');
const reset = document.getElementById('reset');
const span = document.querySelector('span');

aumentar1.addEventListener('click', () => {

  if (contador == 2000) {}
    else {
      contador++;
    }

  span.textContent = contador;

})

aumentar10.addEventListener('click', () => {

  if (contador == 2000) {}
    else {
      contador += 10;
    }

  span.textContent = contador;

})

aumentar100.addEventListener('click', () => {

  if (contador == 2000) {}
    else {
      contador +=100;
    }

  span.textContent = contador;

})

disminuir1.addEventListener('click', () => {

  if (contador == -2000) {}
    else {
      contador--;
    }

  span.textContent = contador;

})

disminuir10.addEventListener('click', () => {

  if (contador == -2000) {}
    else {
      contador -= 10;
    }     

  span.textContent = contador;   

})

disminuir100.addEventListener('dblclick', () => {

  if (contador == -2000) {}
    else {
      contador -= 100;
    }

  span.textContent = contador;  

})

reset.addEventListener('click', function(event) {

  contador = 0;
  span.textContent = contador;

})
*/


/*let contador = 0;

const valor = document.getElementById('valor');
const buttons = document.querySelectorAll('.boton');

buttons.forEach(boton => {

  boton.addEventListener('click', function(e) {

    const style = e.currentTarget.classList;

    if (style.contains('aumentar')) {
      contador++;
    } else if (style.contains('disminuir')) {
      contador--;
    } else {
      contador = 0;
    }

    valor.textContent = contador;

  })
})*/