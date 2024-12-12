// Code written by Lucas Mouette

export interface Button_Props {

    text: string;
    className: string;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
}