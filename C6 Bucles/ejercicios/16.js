function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:

  const saludos = ["Guten Tag!", "Ni Hao!", "Hello!", "Hola!"]


  if (idioma === "aleman"){
    return saludos[0]
  }
  if (idioma === "mandarin"){
    return saludos[1] 
  }
  if (idioma === "ingles"){
    return saludos[2]
  } else {
    return saludos[3] 
  }
}

module.exports = saludo;
