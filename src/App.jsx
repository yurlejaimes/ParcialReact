import React from 'react';
import Formulario from './components/Formulario';
import Card from "./components/Card";

const App = () => {
    return (
        <div style={{ textAlign: 'center', margin: '50px' }}>
            <h1>Sistema de Citas Médicas</h1>
            <Formulario />
        </div>
    );
};

export default App;
