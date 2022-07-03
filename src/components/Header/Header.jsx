import React from 'react';
import style from './index.module.scss'
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import ButtonSecondary from "../UI/Buttons/ButtonSecondary";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/slices/auth";


const Header = (props) => {
    const isAuth = useSelector(state => Boolean(state.auth.data))
    const dispatch = useDispatch()
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
                                <Link to="/login">
                                    <ButtonPrimary>
                                        Войти
                                    </ButtonPrimary>
                                </Link>
                                <Link to="/register">
                                    <ButtonSecondary>Создать аккаунт</ButtonSecondary>
                                </Link>
                            </>
                        )
                    }
                    {isAuth &&
                        (
                            <>
                                <Link to="/add-post">
                                    <ButtonPrimary>Написать пост</ButtonPrimary>
                                </Link>
                                <ButtonSecondary onClick={() => {
                                    if (window.confirm("Вы действительно хотите выйти")) {
                                        dispatch(logout())
                                        window.localStorage.removeItem("token")
                                    }
                                }}>Выйти</ButtonSecondary>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Header;