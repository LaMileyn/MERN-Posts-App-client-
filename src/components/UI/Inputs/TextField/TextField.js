import React, {useState} from 'react';
import style from './index.module.scss';

const TextField = ({label, isError, errorMessage, defaultValue, ...props}) => {

    const [error, setError] = useState(isError || false)
    const [errorText, setErrorMessage] = useState(errorMessage || "")
    const [value, setValue] = useState(defaultValue || "")
    return (
        <div className={style.textField}>
            <div className={style.label}>{label}</div>
            <input className={style.input}
                   {...props}
                   value={value}
                   onChange={(e) => setValue(e.currentTarget.value)}/>
            {
                error && (
                    <div className={style.errorMessage}>
                        {errorText}
                    </div>
                )
            }
        </div>
    );
}

export default TextField;