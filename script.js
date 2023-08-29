function calcularMediaEVerificarImpar() {
   var num1 = parseInt(document.getElementById("num1").value);
   var num2 = parseInt(document.getElementById("num2").value);
   var num3 = parseInt(document.getElementById("num3").value);
   var num4 = parseInt(document.getElementById("num4").value);
   var num5 = parseInt(document.getElementById("num5").value);

   var media = (num1 + num2 + num3 + num4 + num5) / 5;

   document.getElementById("media").innerHTML = "A média dos 5 números digitados é: " + media;

   if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0 || num4 % 2 !== 0 || num5 % 2 !== 0) {
      alert("Um dos números digitados era ímpar.")
   }
}