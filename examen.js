//Ejercicio 1
var numero1 = 5;
var numero2 = 8;
if (numero1 <= numero2) {
    console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
    console.log("numero2 es positivo");
}
if (numero1 < 0) {
    console.log("numero1 es negativo o distinto de cero");
}
if (numero1 <= numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


//Ejercicio 2
let n = 5;
let result;
let imprimir;

function factorial() {
    for (let i = n; i > 1; i--) {   
        result = n * (i - 1);
        n = result;                
    }
    console.log('Imprime factorial '+result)
}

//Ejercicio 3
function esPar(num) {
    let temp = num % 2;
    if (temp == 0) {
        console.log('Es par')
    } else {
        console.log('Es impar')
    }
}

//Ejercicio 4
function esPalindromo(cadena) {

    let sinEspacios = cadena.split(' ').join('').toLowerCase()
    let temp = sinEspacios.split('').reverse().join('')

    if (temp == sinEspacios) {
        console.log('Es palindromo')
    } else {
        console.log('No es palindromo')
    }
}

esPalindromo('La ruta nos aporto otro paso natural')


//Ejercicio 5
class Persona {
    nombre
    edad

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    obDetalles() {
        console.log(this.nombre);
        console.log(this.edad)
    }
}

class Estudiantes extends Persona {
    calificacion

    constructor(nombre, edad, calificacion) {
        super(nombre, edad);
        this.calificacion = calificacion;
    }

    obDetalles() {
        super.obDetalles()
        console.log(this.calificacion)
    }
}

class Profesor extends Persona {
    asignatura
    nivel
    constructor(nombre, edad, asignatura, nivel) {
        super(nombre, edad);
        this.asignatura = asignatura;
        this.nivel = nivel;

        if (!asignatura) {
            this.asignatura = 'JS'
        }

        if (!nivel) {
            this.nivel = 'básico'
        }
    }

    obDetalles() {
        super.obDetalles()
        console.log(this.asignatura);
        console.log(this.nivel)
    }
}

class Grupo {
    profesor = new Object;
    promedio;
    estudiantes = [];
    constructor(profesor, estudiantes) {
        this.profesor = profesor;
        this.estudiantes = estudiantes;

    }
    calificar() {
        for (let i = 0; i < this.estudiantes.length; i++) {
            this.estudiantes[i].calificacion = (Math.random() * 10)
            console.log(this.estudiantes[i].calificacion)
        }
    }
    promedios() {
        let temp = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            temp = temp + this.estudiantes[i].calificacion;
            this.promedio = temp;
        }
        console.log((this.promedio)/estudiantes.length)
    }
    obDetalles() {
        console.log(this.profesor);
        console.log(this.estudiantes);

        for (let i = 0; i < this.estudiantes.length; i++) {
            console.log(this.estudiantes[i].nombre);
            console.log(this.estudiantes[i].edad);
            console.log(this.estudiantes[i].calificacion);
        }
    }
}

var estudiantes = [
    new Estudiantes('Joha', 11, 5),
    new Estudiantes('Jonner', 12, 4),
    new Estudiantes('Maria', 11, 3),
    new Estudiantes('Ana', 1, 9),
    new Estudiantes('Juan', 17, 7),
    new Estudiantes('Isa', 22, 8),
];

var profesor = new Profesor('Angela', 25);

var grupo = new Grupo(profesor, estudiantes)

