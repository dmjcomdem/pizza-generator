import React from 'react';
import logo from './assets/logo.svg';

export const App: React.FC = () => {
    return (
        <section>
            <img src={logo} alt="react logo" />
            <h1>Hi, React 🖐 </h1>
        </section>
    );
};
