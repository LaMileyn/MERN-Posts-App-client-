import React from 'react';
import style from './index.module.scss'
import cl from 'classnames'

const ButtonSecondary = ({ children ,...props}) => {
    return (
        <button className={cl(style.secondaryBtn,style.btn)}>
            {children}
        </button>
    );
}

export default ButtonSecondary;