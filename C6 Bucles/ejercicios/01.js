function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:


  return a < 0 && a == b;

  
  

  
  if(a < 0 && a == b){
    if(b < 0){
      return true
    } else{
      return false
    }
  } else {
    return false
  }
}

module.exports = esIgualYNegativo;
