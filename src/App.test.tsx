import React from 'react';
import { render, screen } from '@testing-library/react';

import { App } from '@/App';

describe('Render App component', () => {
    it('render correctly', () => {
        render(<App />);
        screen.getByText('🍕Выберите пиццу');
    });
});
