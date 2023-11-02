
/**
 * Esta funcion permite recortar el valor de la carta por ejemplo 2C, devuelve = 2, si es una carta con letras entra en la funcion ternaria y aplica 11 o 11 segun corresponda.
 * @param {String} carta Ejemplo: '2C'
 * @returns Devuelve un valor numero
 */


export const valorCarta = ( carta ) => {//Aqui se pasa por parametro la carta pedida de la funcion pedir carta
    const valor = carta.substring(0, carta.length - 1);
    //let puntos = 0;
    return ( !isNaN( valor ) ) ? valor * 1 : 
                                 valor === 'A' ? 11 : 10;
    
    }