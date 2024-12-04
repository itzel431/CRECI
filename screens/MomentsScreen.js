import React, { useState } from 'react';

export default function MomentsScreen() {
    const [photo, setPhoto] = useState(null);

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPhoto(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <section>
            <h2>Momento Especial</h2>
            <input type="file" accept="image/*" onChange={handleImageSelect} />
            {photo && <img src={photo} alt="Seleccionada" />}
        </section>
    );
}
