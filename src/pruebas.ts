import {
    actualizarEstado,
    filtrarPeliculasPorGenero,
    type Pelicula,
    type Reserva,
    crearReserva,
} from './reservaciones';

const carteleraInicial: Pelicula[] = [
    { id: 1, titulo: 'El Ultimo Robo', genero: 'Acción', duracionMinutos: 110, es3D: false },
    { id: 2, titulo: 'Happy Gilmore', genero: 'Comedia', duracionMinutos: 150, es3D: true },
    { id: 3, titulo: 'Y donde estan las Rubias', genero: 'Comedia', duracionMinutos: 150, es3D: true },
];
console.log('Cartelera cargada: ', carteleraInicial);

const peliculaSeleccionada = carteleraInicial[0];
const miReservaPendiente: Reserva = crearReserva(peliculaSeleccionada, 4, 9.50);
console.log('\n2. Reserva Creada:');
console.log('ID:', miReservaPendiente.idReserva, ', Estado:', miReservaPendiente.estado, ', Total:', miReservaPendiente.precioTotal);

const miReservaConfirmada: Reserva = actualizarEstado(miReservaPendiente, 'Confirmada');
console.log('\n3. Estado Actualizado:');
console.log('Reserva anterior (Pendiente):', miReservaPendiente.estado);
console.log('Reserva nueva (Confirmada):', miReservaConfirmada.estado);

// DEMO DE ERROR
// actualizarEstado(miReservaConfirmada, 'Comprada');

const peliculasAccion = filtrarPeliculasPorGenero(carteleraInicial, 'Comedia');

console.log('\n4. Películas de Acción:');
peliculasAccion.forEach(p => console.log(` - ${p.titulo}`));

console.log('\n--- PRUEBAS DE TYPESCRIPT FINALIZADAS ---');