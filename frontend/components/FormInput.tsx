// Code written by Lucas Mouette

import styles from "@/css/form_input.module.css";
import { Form_Props } from "@/types/Form_Props";

export default function TripFormInput({form}: {form: Form_Props}) {
    if (form.type === "text") {
        return (
            <div className={styles.form__group}>
                <label htmlFor={form.name}>{form.label}</label>
                <input type={form.type} id={form.name} name={form.name} placeholder={form.placeholder} required />
            </div>
        )
    } else if (form.type === "date") {
        return (
            <div className={styles.form__group}>
                <label htmlFor={form.name}>{form.label}</label>
                <input type={form.type} id={form.name} name={form.name} required />
            </div>
        )
    } else {
        return (
            <div className={styles.form__group}>
                <label htmlFor={form.name}>{form.label}</label>
                <select id={form.name} name={form.name} required>
                    <option value="" disabled selected>-- {form.placeholder} --</option>
                    {form.option?.map((option) => {
                        return <option value={option}>{option}</option>
                    })}
                </select>
            </div>
        )
    }
}