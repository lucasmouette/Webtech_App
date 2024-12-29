// Code written by Lucas Mouette

import React, { ChangeEvent, FormEvent } from "react"

interface OptionInputProps {
    label: string;
    id: string;
    options: string[];
    placeholder?: string;
    onChange: (e: FormEvent<HTMLSelectElement> | ChangeEvent<HTMLSelectElement>) => void;
}

export const OptionInput: React.FC<OptionInputProps> = ({label, options, id, onChange, placeholder}) => {

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        onChange(e);
    }

    return(
        <div>
            <label htmlFor={id}><h3>{label}:</h3></label>
            <select  style={{display: "flex"}} name={id} id={id}  defaultValue={placeholder ? placeholder : ""} onChange={handleChange} required>
            <option disabled value="" >{"Select " + label}</option>
            {options.map((option, i) => {
                return <option key={i} value={option}>{option}</option>
            })}
            </select>
        </div>
    )
}

interface DoubleDateInputProps {
    start_date: string;
    end_date: string;
    isError?: boolean;
    required?: boolean;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
}

export const DoubleDateInput: React.FC<DoubleDateInputProps> = ({start_date, required, end_date, isError, onChange}) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange(e);
        console.log(e)
    }
    return(
        <div style={{display: "flex", flexDirection: "row", gap: "1rem"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <label htmlFor="start_date">Start Date</label>
                <input style={isError && !start_date ? {border: '2px solid red'} : {}} type="date" name="start_date" value={start_date} onChange={handleChange} required={required}/>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <label htmlFor="end_date">End Date</label>
                <input style={isError && !end_date ? {border: '2px solid red'} : {}} type="date" name="end_date" value={end_date} onChange={handleChange} required={required}/>
            </div>
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