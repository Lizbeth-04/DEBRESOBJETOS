export function decodedResistorValue(colors: Array<string>): string {
    var value = (10 * calculate_value(colors[0]) + calculate_value(colors[1])) * Math.pow(10, calculate_value(colors[2]))
    var unit = ' ohms'
    switch (true){
      case (value > 1000000000):
        unit = ' gigaohms'
        value /= 1000000000
        break
      case (value > 1000000):
        unit = ' megaohms'
        value /= 1000000
        break
      case (value > 1000):
        unit = ' kiloohms'
        value /= 1000
        break
    }
      
    return ''.concat(value.toString(), unit)
  }
  function calculate_value(color:string): number {
    switch(color){
      case 'black':  
        return 0
      case 'brown': 
        return 1
      case 'red':
        return 2
      case 'orange': 
        return 3
      case 'yellow': 
        return 4
      case 'green': 
        return 5
      case 'blue': 
        return 6
      case 'violet': 
        return 7
      case 'grey': 
        return 8
      case 'white': 
        return 9
    }
    return 0
  }
/*en este código creamos una función llamada 
decodedResistorValue que toma una matriz de 
colores como entrada y calcula el valor de la 
resistencia en ohms. Utilizamos la función 
calculate_value para obtener el valor numérico 
de cada color y luego aplicamos la fórmula
 adecuada para calcular el valor total de 
 la resistencia. Finalmente, ajustamos la 
 unidad de medida según el tamaño del valor 
 y devolvemos el resultado como una cadena de texto. */  