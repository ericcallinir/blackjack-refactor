
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} Imagen de retorno
 */

export const crearCartaHTML = ( carta ) => {

    if ( !carta ) throw new Error('La carta es un argumento obligatorio');
    //<img class="carta" src="assets/cartas/2C.png"> ejemplo de lo que hace el codigo.


    const imgCarta = document.createElement('img');
    imgCarta.src =`assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}