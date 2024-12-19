// Code written by Lucas Mouette

import styles from "@/css/form.module.css";
import FormInput from "@/components/BookTrip/FormInput";
import Button from "../Globals/Button";
import { load_countries } from "@/services/form/load_countries";
import { load_tour_guides } from "@/services/form/load_tour_guides";

export default async function Form() {
    return (
        <div className={styles.trip__form__container}>
            <form id={styles.travel__form}>
                <div className={styles.form__group}>
                    <FormInput form={{label: "Trip Name", type: "text", name: "name", placeholder: "Name your Trip"}} />

                    <FormInput form={{label: "Country", name: "country", placeholder: "Select your Country", option: await load_countries()}} />
                    <FormInput form={{label: "Start Date", type: "date", name: "start_date"}} />
                    <FormInput form={{label: "End Date", type: "date", name: "end_date"}} />

                    <FormInput form={{label: "City", type: "text", name: "city", placeholder: "Enter a City"}} />
                    <FormInput form={{label: "Start Date", type: "date", name: "start_date"}} />
                    <FormInput form={{label: "End Date", type: "date", name: "end_date"}} />

                    {/* <Button button={{text: "Add City", className:styles.button__add_city, type: "button", onClick:}}/> */}

                    <FormInput form={{label: "Tour Guide", name: "tour_guide", placeholder: "Select your Tour Guide", option: await load_tour_guides()}} />

                    <Button button={{text: "Save", className:styles.button__save, type: "submit"}} />

                </div>
            </form>
        </div>
    );
}