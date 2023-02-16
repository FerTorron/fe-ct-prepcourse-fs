function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
    let busqueda = [];
    if (array.includes("Enero" && "Marzo" && "Noviembre")){
       busqueda.push("Enero" && "Marzo" && "Noviembre");
       return busqueda;
    } else {
       return "No se encontraron los meses pedidos";
    }
 }
 mesesDelAño(["caca", "Enero"]);