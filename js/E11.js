let num = parseInt(prompt("Ingrese un número: "));
let divisibles = "";

if (num % 2 === 0) {
  divisibles += "2, ";
}

if (num % 3 === 0) {
  divisibles += "3, ";
}

if (num % 5 === 0) {
  divisibles += "5, ";
}

if (num % 7 === 0) {
  divisibles += "7, ";
}

if (divisibles === "") {
  alert(num + " no es divisible por 2, 3, 5 ni 7.");
} else {
  alert(num + " es divisible por " + divisibles.slice(0, -2) + ".");
}
