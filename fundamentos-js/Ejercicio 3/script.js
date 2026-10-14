// Crear un objeto persona

let persona = {
    nombre: "Carlos",
    edad: 21,
    estudiante: true,
    altura: 1.78,
    telefono: null,

    // Array
    aficiones: ["fútbol", "videojuegos", "música"],

    // Otro objeto
    direccion: {
        ciudad: "Granada",
        calle: "Calle Mayor",
        codigoPostal: 18001
    }
};

// Mostrar el objeto completo
console.log("Objeto persona:");
console.log(persona);

// Mostrar el objeto usando console.table()
console.table(persona);

// Mostrar algunas propiedades por separado
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Aficiones:", persona.aficiones);
console.log("Ciudad:", persona.direccion.ciudad);