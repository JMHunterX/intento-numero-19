function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  let producto = a

  // i empieza en 2, mientras i sea menor o igual a b, va a primero a multiplicarse por el producto el 
  //cual es 1 entonces 2 * 1 es 2 y cambia el producto entonces para el 3 se multiplicaria por 2 
  // y al finalizar el codigo de cada iteración se aumenta i en 1 cada vez que que termine la iteracion 
  //hasta que la comparacion sea false

  for (let i = ++a; i <= b; i++ ) producto *= i
    
  return Math.abs(producto)
}

module.exports = productoEntreNúmeros;