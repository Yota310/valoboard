import React from 'react';

export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-black border-4 text-red-500 shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
            onChange={(e) => handleChange(e)}
        />
    );
}
