import React from 'react';

type CheckboxProps = {
    label: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, onChange, ...props }, ref) => {
        return (
            <label>
                <input ref={ref} type="checkbox" onChange={onChange} {...props} />
                {label}
            </label>
        );
    }
);
