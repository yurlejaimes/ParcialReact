import React from 'react';

const Confirmar = ({ nombrePaciente, lugar, nombreMedico, fecha, hora, recomendaciones }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Cita Confirmada</h2>
            <p><strong>Nombre del Paciente:</strong> {nombrePaciente}</p>
            <p><strong>Nombre del Médico:</strong> {nombreMedico}</p>
            <p><strong>Fecha:</strong> {fecha}</p>
            <p><strong>Hora:</strong> {hora}</p>
            <p><strong>Lugar:</strong> {lugar}</p>
            <p><strong>Recomendaciones:</strong> {recomendaciones}</p>
        </div>
    );
};

export default Confirmar;