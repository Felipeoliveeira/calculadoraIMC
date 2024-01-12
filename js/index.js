function calculator() {
   let kilos = document.getElementById('kg').value;
   let altura = document.getElementById('cm').value;
   let calc = kilos / (altura * altura);
   let valor = calc.toFixed(2);
   let resultado = document.querySelector('.container_resultado');
   const lista = `<ul><li>${valor}</li></ul>`;

   resultado.innerHTML = lista
   
   console.log(calc.toFixed(2))
}


