export const decodedValue = (colors: string[]) => {
    return COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1]);
  };
  export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
  ];
  /* en este ejercicio creamos una función llamada decodedValue que toma una lista de colores como entrada y devuelve el valor numérico correspondiente de dos dígitos según el mapeo proporcionado en el array COLORS.

Para lograr esto, creamos dos constantes:

decodedValue: Esta función toma un parámetro colors, que es una lista de colores en forma de array. Utilizamos el método indexOf() para encontrar la posición de cada color en el array COLORS, y luego multiplicamos el índice del primer color por 10 y sumamos el índice del segundo color para obtener el valor numérico de dos dígitos.
COLORS: Este es un array que contiene los nombres de los colores de las bandas del resistor, en el mismo orden que se utiliza en la función decodedValue.
Además, utilizamos la declaración de tipo : string[] para especificar que colors es un array de strings en la función decodedValue, lo que ayuda a TypeScript a inferir correctamente el tipo y compilar el código sin errores.*/