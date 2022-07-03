import React from 'react';
import style from './index.module.scss'
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import ButtonSecondary from "../UI/Buttons/ButtonSecondary";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const Header = (props) => {
    const isAuth = useSelector( state => Boolean(state.auth.data))
    console.log(isAuth)
    return (
        <section className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__logo}>
                    <Link to="/">
                        <button>MileynBlog</button>
                    </Link>
                </div>
                <div className={style.header__buttons}>
                    {!isAuth &&
                        (
                            <>
                                <ButtonPrimary>Войти</ButtonPrimary>
                                <ButtonSecondary>Зарегестрироваться</ButtonSecondary>
                            </>
                        )
                    }
                    {isAuth &&
                        (
                            <>
                                <ButtonPrimary>Написать пост</ButtonPrimary>
                                <ButtonSecondary>Выйти</ButtonSecondary>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Header;