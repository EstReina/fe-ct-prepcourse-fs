/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let newArray = [];
  for (let key in objeto) {
    newArray.push([key, objeto[key]]);
  }
  return newArray;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let object = {};
  for (let i = 0; i < string.length; i++) {
    if (object.hasOwnProperty(string[i])) {
      object[string[i]] = object[string[i]] + 1;
    } else {
      object[string[i]] = 1;
    }
  }
  const sortedKey = Object.keys(object).sort();
  const sortedObject = {};

  for (const key of sortedKey) {
    sortedObject[key] = object[key];
  }
  return sortedObject;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var array = [];
  var ArrayMayus = [];
  var ArrayMinus = [];

  array = string.split('');

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      ArrayMayus.push(array[i]);
    }

    if (array[i] !== array[i].toUpperCase()) ArrayMinus.push(array[i]);
  }

  var resultado =
    ArrayMayus.join('').toString() + ArrayMinus.join('').toString();

  return resultado;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  return frase
    .split(' ')
    .map((palabra) => palabra.split('').reverse().join(''))
    .join(' ');
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  const numeroStr = numero.toString();
  const numeroReverso = numeroStr.split('').reverse().join('');
  if (numeroStr === numeroReverso) {
    return 'Es capicua';
  } else return 'No es capicua';
}
function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  return string.replace(/[abc]/g, '');
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  arrayOfStrings.sort((a, b) => {
    return a.length - b.length;
  });
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let vacio = [];
  array1.forEach((elemento1) => {
    array2.forEach((elemento2) => {
      if (elemento1 === elemento2) {
        vacio.push(elemento1);
      }
    });
  });
  return vacio;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
