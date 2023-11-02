

/**
 * Esta funcion permite obtener la ultima carta del arreglo despues que fue aplicado el metodo de la libreria underscore "suffle"
 * @param {Array<String>} deck Ejemplo: ['4S', 'QD', '2H', '9C', '6H', 'JS', 'AS', 'QH', '6S', '10C', '7D', '4D', '8S', '8H', '4H', '10H', 'KH', 'KC', '2C', 'AC', '10S', '5H', '9D', '5S', 'JD', 'JC', '10D', 'AD', 'QS', '7S', '2D', 'JH', 'KS', '5C', '3D', 'KD', '3C', 'AH', '8C', '8D', '6C', '9H', '7C', '4C', '9S', '7H', '3S', '6D', '3H', '2S', '5D', 'QC']
 * @returns {String} Retorna la ultima carta del arreglo Ejemplo: 'QC'
 */
//Esta funcon me permite tomar una carta
export const pedirCarta = ( deck ) => {
    console.log(deck)

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    
    const cartaPedida = deck.pop();
    return cartaPedida;
    
    }