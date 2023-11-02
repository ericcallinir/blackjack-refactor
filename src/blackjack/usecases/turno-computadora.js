import { crearCartaHTML, pedirCarta, valorCarta } from './'
/*****Turno de la computadora*****/

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do{
        const carta = pedirCarta( deck );
    
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;//Aqui como el DOM tiene 2 elementos small estamos apuntando al primero.
    
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21 ) {
            break;
        }
    
    }while( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ));
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ){
            alert('Nadie Gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora Gana');
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 10);
    
    }