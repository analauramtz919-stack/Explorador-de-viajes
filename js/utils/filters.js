//filtors y ordenamiento
//buscar paises por nombre

export function buscarPaises(paises, texto){
    //normalizar nuestro texto
    const textoNormalizado = texto.trim().toLowerCase();

    //validacion si no hay busqueda
    if(!textoNormalizado){
        return paises;
    
    }

    // filtrado de paises
    return paises.filter((pais) => {
        //normalizacion del nombre de mi pais
        const nombre = pais.names?.common.toLowerCase() ?? '';

        return nombre.includes(textoNormalizado);
    });
       
}

export function filtrarPorContinente(paises, continente){
    //filtrado all
    if(continente === 'all'){
        return paises;
    }

    //filtrado por region
    return paises.filter((pais) => pais.region === continente);
}

//ordenar paises
export function ordenarPaises(paises, criterio){
    //utilizar spread operat
    const paisesOrdenados = [...paises];

    //ordenar a-z con 
    if(criterio == 'az'){
        return paisesOrdenados.sort((a,b) =>{
            const nombreA = a.names?.common ?? '';
            const nombreB = b.names?.common ?? '';
            
            return nombreA.localeCompare(
                nombreB
            ); 
        }
    );
    }

    // ordenar 
    if(criterio === 'za'){
        return paisesOrdenados.sort((a,b) =>{
            const nombreA = a.names?.common ?? '';
            const nombreB = b.names?.common ?? '';
            
            return nombreB.localeCompare(
                nombreA
            ); 
        }
    );
    }
    return paisesOrdenados;

    
}

// function combinando procesamiento
export function procesarPaises(paises, texto, continente, criterioOrden){
    let resultado = buscarPaises(paises, texto);

    resultado = filtrarPorContinente(resultado, continente);

    resultado = ordenarPaises(resultado, criterioOrden);
    return resultado;
}