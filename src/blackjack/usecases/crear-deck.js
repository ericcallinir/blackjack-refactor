import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

//Esta funcion crea una nueva baraja
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('Tipos de carta es obligatorio como unarreglo de string');
    if ( !tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('Tipos especiales es obligatorio como unarreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++) { //Este for ayudara a crear un array del 2 al 10 
        for( let tipo of tiposDeCarta ){ //Esto se va ejecutar una vez por cada uno de los elementos del array anterior
            deck.push( i + tipo);
        }
        //deck.push( i + 'C');
    }

for ( let tipo of tiposDeCarta){
    for( let esp of tiposEspeciales ){
        deck.push( esp + tipo);
    }
}
    //console.log( deck );
    deck = _.shuffle( deck ); 
    //console.log( deck );
    return deck;
}