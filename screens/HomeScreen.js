import React from 'react';
import Button from '../components/Button';
import logo from '../assets/logo.png';

export default function HomeScreen() {
    return (
        <div>
            <img src={logo} alt="Logo de Creci" className="logo" />
            <Button text="Empezar" link="/momentos" />
        </div>
    );
}
