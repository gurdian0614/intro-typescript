// Type Alias (Union literal estricta)
type TipoPelicula = 'Acción' | 'Comedia' | 'Drama' | 'Infantil';

export interface Pelicula {
    id: number;
    titulo: string;
    genero: TipoPelicula; // Usamos la union literal
    duracionMinutos: number;
    es3D?: boolean; // Propiedad opcional
}

type EstadoReserva = 'Confirmada' | 'Pendiente' | 'Cancelada';

export interface Reserva {
    idReserva: string;
    idPelicula: number;
    cantidadBoletos: number;
    precioTotal: number;
    estado: EstadoReserva;
}

export function crearReserva(pelicula: Pelicula, boletos: number,  precioUnitario: number
): Reserva {
    const idReserva = `RES-${Math.random().toString().substring(2, 6)}`;
    const precioTotal = boletos * precioUnitario;

    const obj: Reserva = {
        idReserva, // Si el nombre de la variable tiene el mismo nombre de la propiedad, no es necesario colocar la propiedad.
        idPelicula: pelicula.id,
        cantidadBoletos: boletos,
        precioTotal,
        estado: 'Pendiente',
    };

    return obj;
}

export const actualizarEstado = (reserva: Reserva, nuevoEstado: EstadoReserva) : Reserva => {
    const obj : Reserva = {
        ...reserva, //Clonar la reserva original
        estado: nuevoEstado,
    }

    return obj;
};

export const filtrarPeliculasPorGenero = (cartelera: Pelicula[], genero: TipoPelicula) : Pelicula[] => {
    return cartelera.filter(p => p.genero === genero);
};