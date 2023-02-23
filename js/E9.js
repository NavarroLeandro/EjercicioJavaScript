let frase = prompt("Ingrese una frase: ");
let vocales = "";
for (let i = 0; i < frase.length; i++) {
  let letra = frase.charAt(i).toLowerCase();
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    vocales += letra + " ";
  }
}
alert("Las vocales en la frase son: " + vocales);
