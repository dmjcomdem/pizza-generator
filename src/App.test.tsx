import React from 'react';
import { render } from '@testing-library/react';

import { App } from '@/App';

describe('Render App component', () => {
    it('render correctly', () => {
        const { queryByText } = render(<App />);
        expect(queryByText(/React/)).toBeTruthy();
    });
});
