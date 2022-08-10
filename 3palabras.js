
function extraerCaracteres(texto) {
    if (texto.length >= 2) {
        if (texto.length % 2 === 0) {
            let mitad = (texto.length + 1) / 2;
            
            return texto.slice(mitad - 1, mitad + 1);
        } else {
            throw Error('El texto debe tener un número par de caracteres.');
        }
    } else {
        throw Error(`El texto debe tener al menos 2 caracteres. Longitud actual: ${texto.length}.`)
    }
}

try {
    console.log(extraerCaracteres('Hola'));   // Sc
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();
