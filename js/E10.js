let num = parseInt(prompt("Ingrese un número: "));

if (num % 2 === 0) {
  alert(num + " es divisible por 2.");
} else if (num % 3 === 0) {
  alert(num + " es divisible por 3.");
} else if (num % 5 === 0) {
  alert(num + " es divisible por 5.");
} else if (num % 7 === 0) {
  alert(num + " es divisible por 7.");
} else {
  alert(num + " no es divisible por 2, 3, 5 ni 7.");
}
