let frase = prompt('Escriba una frase');
let vocales = ['a', 'e', 'i', 'o', 'u'];
let llaves = ['ai', 'enter', 'imes', 'ober', 'ufat'];

let fraseEncriptada = reemplazarVocales(frase, vocales);
alert(`El encriptado de su frase es: ${fraseEncriptada}`);

//let fraseDesencriptada = reemplazarSecuencias(frase, llaves, vocales);
//alert(`El desencriptado de su frase es: ${fraseDesencriptada}`);

//Encriptador
// Función de reemplazo que busca la vocal en el array y devuelve su reemplazo correspondiente

function reemplazarVocales(frase, vocales) {

    function reemplazar(match) {
        let index = vocales.indexOf(match);
        return llaves[index];
    }
    // Creamos una expresión regular que busca todas las vocales minúsculas
    let regex = new RegExp(`[${vocales.join('')}]`, 'g');    
    // Utilizamos replace con la expresión regular y la función de reemplazo
    let nuevoParrafo = frase.replace(regex, reemplazar);
    return nuevoParrafo;
}

/*//Desencriptador

function reemplazarSecuencias(frase, llaves, vocales) {
    // Iteramos sobre cada secuencia y la reemplazamos por la vocal correspondiente
    for (let i = 0; i < llaves.length; i++) {
        frase = frase.replace(new RegExp(llaves[i], 'gi'), vocales[i]);
    }
    return frase;
}*/