function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  let pot = 2 

  while(pot < numero) pot *= 2

  return pot === numero ? true : false

}

module.exports = esPotenciaDeDos;
