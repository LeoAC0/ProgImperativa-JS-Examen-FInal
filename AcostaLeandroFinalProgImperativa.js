const alumnos = [
  {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
  },
  {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
  },
  {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
  },
  {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
  },
  {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
  },
];


// Ejercicio 1
// 1. Revisa el siguiente archivo, identifica sus componentes, vamos a estar
// usándolos a lo largo de este ejercicio.

// a. ¿Qué tipo de dato contiene la variable ‘alumnos’? Contiene un STRING.

// b. ¿Qué propiedades tiene la estructura definida en el archivo final.js?
      //Tiene las siguiente propiedades:
    // id:
    // nombre:
    // apellido:
    // legajo:
    // notas:

// 2. Crear una función que ordene la estructura definida en el archivo final.js
// según la propiedad legajo de forma ascendente. (*)

function ordenLegajoAsc(estructura) {
  for (let x = 0; x < estructura.length; x++) {
    for (let i = 0; i < estructura.length - 1; i++) {
      if (estructura[i].legajo > estructura[i + 1].legajo) {
          let temp = estructura[i];
          estructura[i] = estructura[i + 1];
          estructura[i + 1] = temp;
      }
    }
  }
  return estructura;
}

console.log("Antes de ordenarlo por legajo");
console.table(alumnos);
ordenLegajoAsc(alumnos);
console.log("Luego de ordenarlo por legajo");
console.table(alumnos);

// Ejercicio 2
// Dado el objeto 
// a. Crear un método que retorne el promedio de notas. (*)

alumno = {
  id: 5,
  nombre: "Javier",
  apellido: "Riera",
  legajo: 20220125,
  notas: [10,9,8,7,9],
  promedioNotas: function(){
    let totalNotas = 0;
    let promedio = 0;
      for (let i = 0; i < this.notas.length; i++) {
        totalNotas += this.notas[i];
        promedio = totalNotas / this.notas.length;
      }
    return promedio; 
    }
}

console.log(`El promedio de las notas de ${alumno.apellido}, ${alumno.nombre} es ${alumno.promedioNotas()}`);

// b. Crear una función que ordene las notas del alumno de forma
// descendente. (*)

function ordenNotasDesc(objetoAlumno) {
  for (let i = 0; i < objetoAlumno.notas.length; i++) {
      for (let j = 0; j < objetoAlumno.notas.length - 1; j++) {
          if (objetoAlumno.notas[j] < objetoAlumno.notas[j + 1]) {
              let temp = objetoAlumno.notas[j];
              objetoAlumno.notas[j] = objetoAlumno.notas[j + 1];
              objetoAlumno.notas[j + 1] = temp;
          }
      }
  }
}
console.log("Antes de ordenar las notas");
console.log(alumno.notas);
ordenNotasDesc(alumno);
console.log("Después de ordenar las notas");
console.log(alumno.notas);


// Ejercicio 3
// A. Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada
// una de sus posiciones.

// ---- Generador de matriz 3 x 3 -----
let matriz = [];
function generadorMatriz(n, m) {
  let contador = 0;
  for (let i = 0; i < n; i++) {
    let fila = [];
    for (let j = 0; j < m; j++) {
      contador++;
      fila.push(contador);
    }
    matriz.push(fila);
  }
  return matriz;
}
matriz = generadorMatriz(3,3);
console.log("**Matriz generada para ejercicio 3**");
console.table(matriz);

// B. Crear una función que retorne la suma de todos los números dentro de la
// matriz que sean múltiplos de 3.

function sumMultiDe3(laMatri) {
  let sumaMulti = 0
  for (let i = 0; i < laMatri.length; i++) {
      for (let j = 0; j < laMatri[i].length; j++) {
          if (laMatri[i][j] % 3 === 0) {
            sumaMulti += laMatri[i][j];
          }
      }
  }
  return sumaMulti
}

console.log(`La suma de todos los números multiplos de 3 es: ${sumMultiDe3(matriz)}`);

// C. Crear una función que retorne un valor booleano dependiendo si la suma
// de todos los valores de la matriz es par.


function booleanoSiEsPar(laMatri) { 
  let suma = 0 
  for (let i = 0; i < laMatri.length; i++) {
      for (let j = 0; j < laMatri[i].length; j++) {
        suma += laMatri[i][j];
      }
  }
  console.log("La suma de todos los elementos de la matriz es:",suma);
  if (suma % 2 === 0) {
    return true;
  }
  else return false;  
}

console.log(`Por lo tanto el booleano es ${booleanoSiEsPar(matriz)}`);

// D. Crear una función que retorne la suma de las diagonales de la matriz.
// En este ejercicio primero use las funciones que ya habiamos creado en ejercicios anteriores, el de sumar 
// la diagonal roja y la verde, entonces copie esas 2 funciones y despues cree otra nueva que llama a las 2 para sumarlas.
// Esto es lo único "raro" que hice (una función que llama a 2 funciones), el resto del examen esta resuelto como vimos en clases.

let sumaDiag1 = 0;
let sumaDiagonal1 = (mat) => {
  for (let i = 0; i < 3; i++) {
    sumaDiag1 += mat[i][i];
  }
  return sumaDiag1;
};

let sumaDiag2 = 0;
let sumaDiagonal2 = (mat) => {
  for (let i = 2; i >= 0; i--) {
    sumaDiag2 += mat[i][i];
  }
  return sumaDiag2;
};

// ---- Función suma de ambas diagolanes------------

let sumaDiagonales = (mat) =>{
  let diag1 = sumaDiagonal1(mat);
  let diag2 = sumaDiagonal2(mat);
  let totalDiag = diag1 + diag2;
  return totalDiag;
}

console.log(`La suma de ambas diagonales es: ${sumaDiagonales(matriz)}`);

// (*) Deberás mostrar por consola antes y después de función o método que
// implementaste. Utiliza VisualStudio code.



