import React from 'react';
import { PizzaGenerator } from '@/PizzaGenerator';

export const App: React.FC = () => {
    return (
        <section className="card">
            <PizzaGenerator />
        </section>
    );
};
