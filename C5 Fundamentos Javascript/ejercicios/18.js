function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:


  const vocales = ["a", "e", "i", "o", "u"]

  const esVocal = vocales.includes(letra)

  return esVocal ? "Es vocal" : "Dato incorrecto"

  if(esVocal){
    return "Es vocal"
  } else {
    return "Dato incorrecto"
  }

  if (letra.length > 1) {
    return "Dato incorrecto"
  }

  switch (letra) {

    case "a":
    case "e":
    case "i":
    case "o":
    case "u":

      return "Es vocal"

    default:
      return "Dato incorrecto"
  }
}


module.exports = esVocal;
