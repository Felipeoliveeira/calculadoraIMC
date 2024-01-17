let abaixoDoPeso = "Você está em abaixo do peso :(";
let pesoNormal = "Seu peso está ideal :)";
let acimaPeso = "Você está acima do peso! Cuida!"

function mostrarResultado() {
   let kilos = document.getElementById('kg').value;
   let altura = document.getElementById('cm').value;
   let calc = kilos / (altura * altura);
   let valorResultado = calc.toFixed(2);
   let campoResultado = document.querySelector('.container_resultado');

   if(valorResultado <= 19){
      campoResultado.innerHTML = `<ul><li>${valorResultado}</li><li>${abaixoDoPeso}</li></ul>`
   } else {
      campoResultado.innerHTML = `<ul><li>${valorResultado}</li><li>${pesoNormal}</li></ul>`
   } if (valorResultado >= 25){
      campoResultado.innerHTML = `<ul><li>${valorResultado}</li><li>${acimaPeso}</li></ul>`
   }
   
}
