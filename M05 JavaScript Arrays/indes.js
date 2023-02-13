function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    var itemAlFinal = array.push(elemento);
    console.log(array);
    return array;
}

array = ["caca", "perro"];
agregarItemAlFinalDelArray(array, "mosca");