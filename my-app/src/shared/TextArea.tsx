import React, {FC} from 'react';
import "../styles/app.scss"

interface ITextArea {
    value: string
    changeHandler: (value: string) => void
    placeholder: string
}

const TextArea: FC<ITextArea> = ({value, changeHandler, placeholder}) => {
    const changeTextArea = (event: any) => {
        changeHandler(event.target.value)
    }

    return (
         <textarea placeholder={placeholder} onChange={changeTextArea} className="textarea" value={value}/>
    );
};

export default TextArea;