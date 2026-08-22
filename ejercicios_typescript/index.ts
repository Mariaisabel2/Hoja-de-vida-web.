// --- PUNTO 1 ---
let estudiantes: string[] = ["Santiago", "Emilio", "Mariaisabel", "Juanjo", "Mari"];
estudiantes.forEach((estudiante) => {
  console.log(estudiante);
});

// --- PUNTO 2 ---
console.log(`Cantidad de estudiantes: ${estudiantes.length}`);

// --- PUNTO 3 ---
let numeros: number[] = [10, 25, 55, 80, 5, 60];
let sumaPunto3: number = 0;

numeros.forEach((num) => {
  sumaPunto3 += num;
});
console.log(`Suma total punto 3: ${sumaPunto3}`);

// --- PUNTO 4 ---
let numerosGrandes: number[] = [];
let sumaPunto4: number = 0;

for (let i = 0; i < 1500; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Números entre 1 y 100
  numerosGrandes.push(numeroAleatorio);
  sumaPunto4 += numeroAleatorio;
}
console.log(`Suma total de 1500 números aleatorios: ${sumaPunto4}`);

// --- PUNTO 5 ---
let promedioPunto3: number = sumaPunto3 / numeros.length;
console.log(`Promedio del punto 3: ${promedioPunto3}`);

// --- PUNTO 6 ---
console.log("Números mayores a 50 del punto 3:");
numeros.forEach((num) => {
  if (num > 50) {
    console.log(num);
  }
});

// --- PUNTO 7 ---
let persona = {
  nombre: "Santiago",
  edad: 22,
  ciudad: "Medellín"
};
console.log(`Persona: ${persona.nombre}, ${persona.edad} años, de ${persona.ciudad}`);

// --- PUNTO 8 ---
let productos = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 200 }
];

console.log("Lista de productos:");
productos.forEach((prod) => {
  console.log(`${prod.nombre}: $${prod.precio}`);
});

// --- PUNTO 9 ---
let productoMasCaro = productos[0]!; // <--- El '!' resuelve el error de typescript

productos.forEach((prod) => {
  if (prod.precio > productoMasCaro.precio) {
    productoMasCaro = prod;
  }
});
console.log(`Producto más caro: ${productoMasCaro.nombre} ($${productoMasCaro.precio})`);

// --- PUNTO 10 ---
let inventario = [
  { nombre: "Laptop", precio: 1000, unidades: 5 },
  { nombre: "Mouse", precio: 20, unidades: 10 },
  { nombre: "Teclado", precio: 50, unidades: 8 },
  { nombre: "Monitor", precio: 200, unidades: 3 }
];

let valorTotalInventario: number = 0;

inventario.forEach((prod) => {
  valorTotalInventario += prod.precio * prod.unidades;
});
console.log(`Valor total del inventario: $${valorTotalInventario}`);

// --- PUNTO 11 ---
let estudiantesCompleto = [
  {
    nombre: "Santiago",
    semestre: 4,
    materias: [
      { nombre: "Matemáticas", nota: 4.0 },
      { nombre: "Programación", nota: 4.5 }
    ]
  },
  {
    nombre: "Emilio",
    semestre: 2,
    materias: [
      { nombre: "Matemáticas", nota: 3.0 },
      { nombre: "Programación", nota: 3.2 }
    ]
  },
  {
    nombre: "Mari",
    semestre: 5,
    materias: [
      { nombre: "Matemáticas", nota: 5.0 },
      { nombre: "Programación", nota: 4.8 }
    ]
  }
];

let sumaPromediosTodos: number = 0;
let estudiantesConPromedio: { nombre: string; promedio: number }[] = [];

estudiantesCompleto.forEach((est) => {
  let sumaNotas: number = 0;
  
  est.materias.forEach((mat) => {
    sumaNotas += mat.nota;
  });
  
  let promedioEstudiante = sumaNotas / est.materias.length;
  console.log(`Promedio de ${est.nombre}: ${promedioEstudiante.toFixed(2)}`);
  
  sumaPromediosTodos += promedioEstudiante;
  estudiantesConPromedio.push({ nombre: est.nombre, promedio: promedioEstudiante });
});

let promedioGeneral = sumaPromediosTodos / estudiantesCompleto.length;
console.log(`Promedio general de todos los estudiantes: ${promedioGeneral.toFixed(2)}`);

// --- PUNTO 12 ---
console.log("Estudiantes con promedio mayor a 3.5:");
estudiantesConPromedio.forEach((est) => {
  if (est.promedio > 3.5) {
    console.log(est.nombre);
  }
});
