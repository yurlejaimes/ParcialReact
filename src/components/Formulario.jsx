import React, { useState } from 'react';
import Card from './Card';

const Formulario = () => {
    const [paciente, setPaciente] = useState({
        nombrePaciente: '',
        nombreMedico: '',
        fecha: '',
        hora: '',
        lugar: '',
        recomendaciones: ''
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const regex = /^[A-Za-z]{3,}( [A-Za-z]+)?$/;
        const espacioRegex = /^\S.*$/; // No espacio al comienzo

        if (
            paciente.lugar.length >= 10 &&
            paciente.lugar.match(espacioRegex) &&
            paciente.nombrePaciente.length >= 3 &&
            paciente.nombrePaciente.match(espacioRegex) &&
            regex.test(paciente.nombrePaciente) &&
            paciente.nombreMedico.length >= 6 &&
            regex.test(paciente.nombreMedico)
        ) {
            setShow(true);
            setError(false);
        } else {
            setError(true);
            setShow(false);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <label>Nombre Paciente</label>
                <input
                    type="text"
                    value={paciente.nombrePaciente}
                    onChange={(event) => setPaciente({ ...paciente, nombrePaciente: event.target.value })}
                    required
                />
                <label>Nombre Médico</label>
                <input
                    type="text"
                    value={paciente.nombreMedico}
                    onChange={(event) => setPaciente({ ...paciente, nombreMedico: event.target.value })}
                    required
                />
                <label>Fecha</label>
                <input
                    type="date"
                    value={paciente.fecha}
                    onChange={(event) => setPaciente({ ...paciente, fecha: event.target.value })}
                    required
                />
                <label>Hora</label>
                <input
                    type="time"
                    value={paciente.hora}
                    onChange={(event) => setPaciente({ ...paciente, hora: event.target.value })}
                    required
                />
                <label>Lugar</label>
                <input
                    type="text"
                    value={paciente.lugar}
                    onChange={(event) => setPaciente({ ...paciente, lugar: event.target.value })}
                    required
                />
                <label>Recomendaciones</label>
                <textarea
                    value={paciente.recomendaciones}
                    onChange={(event) => setPaciente({ ...paciente, recomendaciones: event.target.value })}
                    required
                />
                <button type="submit">Confirmar</button>
            </form>
            {error && <h5 style={{ color: 'red' }}>Por favor chequea que la información sea correcta</h5>}
            {show && <Card {...paciente} />}
        </div>
    );
};

export default Formulario;
