import _ from 'underscore';
/* import {crearDeck as crearNuevoDeck} from './usecases/crear-deck'; *///Esto es un alias y se debe usar el alias en este archivo para que funcione
/* import {crearDeck} from './usecases/crear-deck';//no es necesario poner la extension.js es totalmente opcional.
import {pedirCarta} from './usecases/pedir-carta';
import {valorCarta} from './usecases/valor-carta' */
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases'//Esto fue gracias al archivo de barril, ese archivo se debe llamar index.



let deck         = []; //Se crea un array vacio para luego crear las cartas en el
const tipos      = ['C', 'D', 'H', 'S'];//Estos son los tipos de cartas
const especiales = ['A','J','Q','K'];
let puntosJugador = 0,
    puntosComputadora = 0;

//Referencias del HTML

const btnPedir = document.querySelector('#btnPedir'); //Aqui estamos buscando por ID
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const divCartasJugador      = document.querySelector('#jugador-cartas');
const divCartasComputadora  = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');//Aqui estamos buscando por tipo de elemento


deck = crearDeck( tipos, especiales );//Uso el retorno de la baraja para trabajar con ella.

//Eventos
btnPedir.addEventListener('click',() => {

const carta = pedirCarta( deck );

puntosJugador = puntosJugador + valorCarta( carta );
puntosHTML[0].innerText = puntosJugador;//Aqui como el DOM tiene 2 elementos small estamos apuntando al primero.

const imgCarta = crearCartaHTML( carta );
divCartasJugador.append( imgCarta );

if ( puntosJugador > 21 ){
    console.warn('Lo siento mucho, Perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );

} else if ( puntosJugador === 21 ){
    console.warn('21, Ganaste!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
}
console.log(carta);
});//Esto es un callback, es una funcion que se esta enviando como argumento.

btnDetener.addEventListener('click', () => {
btnPedir.disabled =  true;
btnDetener.disabled = true;
turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
})
//TODO: Borrar
btnNuevo.addEventListener('click', () => {
deck = [];
deck = crearDeck( tipos, especiales);
puntosJugador = 0;
puntosComputadora = 0;

puntosHTML[0].innerText = 0;
puntosHTML[1].innerText = 0;

divCartasComputadora.innerHTML = '';
divCartasJugador.innerHTML = '';

btnPedir.disabled = false;
btnDetener.disabled = false;
})









