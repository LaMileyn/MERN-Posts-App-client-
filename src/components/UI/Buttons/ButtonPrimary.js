import React from 'react';
import style from './index.module.scss'
import cl from 'classnames'

const ButtonPrimary = ({ children ,...props}) => {
    return (
        <button className={cl(style.primaryBtn,style.btn)}>
            {children}
        </button>
    );
}

export default ButtonPrimary;