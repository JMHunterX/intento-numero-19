function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:

  const coloresPer = ["blue", "red", "green", "orange"]

  const validar = coloresPer.includes(color)

  const hola = `This is ${color}`

  return validar ? hola : "Color not found" 

  const colores = { 
    blue: "This is blue",
    red : "This is red",
    green: "This is green",
    orange: "This is orange"
  }

  return colores[color] ?? "Color not found"

  switch (color){
    case "blue": return "This is blue"
    case "red": return "This is red"
    case "green": return "This is green"
    case  "orange": return "This is orange"
       
    default: 
        return "Color not found"

  } 
}

module.exports = colors;
