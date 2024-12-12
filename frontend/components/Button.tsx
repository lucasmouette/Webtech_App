// Code written by Lucas Mouette

import { Button_Props } from "@/types/Button_Props";

export default function Button ({button}: {button: Button_Props}) {
    if (button.type === "submit") {
        return(
            <button type={button.type} className={button.className}>
                {button.text}
            </button>
        )
    } else {
        return(
        <button type={button.type} className={button.className} onClick={button.onClick}>
            {button.text}
        </button>
        )
    }
}