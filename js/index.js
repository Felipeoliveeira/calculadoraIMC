function calculator() {
   let kilos = document.getElementById('kg').value;
   let altura = document.getElementById('cm').value;
   let calc = kilos / altura * 2;
   
   console.log(calc)
}
