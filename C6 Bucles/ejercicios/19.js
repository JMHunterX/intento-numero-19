Array.prototype.manuel = function(acumulador, valorInicial) {
  // [1, 2, 3, 4, 5] -> vamos por todas las posiciones
  for(let i = 0; i < this.length; i++) {
    const valor = this[i]; // cada uno de los valors. ex: 1

    // Llamamos el acc con summa actual, y valor actual
    valorInicial = acumulador(valorInicial, valor) 
  }

  return valorInicial 
}

function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  const numeros = Array.from({ length: n }, (_, i) => i + 1);

  return numeros.manuel((suma, num) => suma + num, 0)

  let sumaMagica = 0

  for(let i = 1 ; i <= n; i++) {
    sumaMagica += i
  }

  return sumaMagica 
}

module.exports = sumarHastaN;
