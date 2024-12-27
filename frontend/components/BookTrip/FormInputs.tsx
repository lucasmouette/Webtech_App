// Code written by Lucas Mouette

import React, { FormEvent } from "react"

interface OptionInputProps {
    label: string;
    id: string;
    options: string[];
    required?: boolean;
    placeholder?: string;
    onChange: (e: FormEvent<HTMLSelectElement>) => void;
}

export const OptionInput: React.FC<OptionInputProps> = ({label, options, required, id, onChange}) => {

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        onChange(e);
    }

    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <select name={id} id={id} required={required} defaultValue={''} onChange={handleChange}>
            <option disabled value="" >{"Select " + label}</option>
            {options.map((option, i) => {
                return <option key={i} value={option}>{option}</option>
            })}
            </select>
        </div>
    )
}

interface DoubleDateInputProps {
    onChange: (e: FormEvent<HTMLInputElement>) => void;
}

export const DoubleDateInput: React.FC<DoubleDateInputProps> = ({onChange}) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange(e);
        console.log(e)
    }
    return(
        <div>
            <label htmlFor="start_date">Start Date</label>
            <input type="date" name="start_date"  onChange={handleChange} required/>
            <label htmlFor="end_date">End Date</label>
            <input type="date" name="end_date"  onChange={handleChange} required/>
        </div>
    )
}

 export const TextInput = () => {
    return(
        <div>
            <label htmlFor="">Trip Name</label>
            <input type="text" required />
        </div>
    )
};



