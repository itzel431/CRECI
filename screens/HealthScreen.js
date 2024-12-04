import React, { useState } from 'react';

export default function HealthScreen() {
    const [healthData, setHealthData] = useState({
        allergies: '',
        diaper: '',
        milk: '',
        vaccines: ''
    });

    const handleInputChange = (e) => {
        setHealthData({ ...healthData, [e.target.name]: e.target.value });
    };

    return (
        <section>
            <h2>Salud del Bebé</h2>
            <input type="text" name="allergies" placeholder="Alergias" onChange={handleInputChange} />
            <input type="text" name="diaper" placeholder="Tipo de pañal" onChange={handleInputChange} />
            <input type="text" name="milk" placeholder="Tipo de leche" onChange={handleInputChange} />
            <input type="text" name="vaccines" placeholder="Vacunas" onChange={handleInputChange} />
        </section>
    );
}
