import React from 'react';
import "./myselect.css";
const MySelect = ({options,onChange,value}) => {
    return (
        <select
            value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option disabled>Сортровка</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;