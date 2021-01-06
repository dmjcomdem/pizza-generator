import React from 'react';

type RadioButtonProps = {
    label: unknown;
    name: string;
    defaultChecked: boolean;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
    ({ label, name, onChange, ...props }, ref) => {
        return (
            <label>
                <input
                    ref={ref}
                    type="radio"
                    name={name}
                    onChange={onChange}
                    {...props}
                />
                {label}
            </label>
        );
    }
);
