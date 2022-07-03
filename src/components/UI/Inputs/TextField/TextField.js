import React, {useState} from 'react';
import style from './index.module.scss';
import cn from 'classnames'

const TextField = React.forwardRef(({label, isError, errorMessage, defaultValue, ...props}, ref) => {

    const [value, setValue] = useState( defaultValue || "")

    const inputHandleChange = (value) =>{
        setValue(value);
        if ( props.clearErrors ){
            props.clearErrors(props.name)
        }
    }

    return(
        <div className={style.textField}>
            <div className={cn(style.label,{ [style.error] : isError})}>{label}</div>
            <input className={cn(style.input, { [style.error] : isError })}
                   ref = {ref}
                   {...props}
                   value={value}
                   onChange={(e) => inputHandleChange(e.currentTarget.value)}/>
            {
                isError && (
                    <div className={style.errorMessage}>
                        {errorMessage}
                    </div>
                )
            }
        </div>
        )
});

export default TextField;