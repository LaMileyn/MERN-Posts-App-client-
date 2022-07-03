import React from 'react';
import style from './index.module.scss'
import TextField from "../../components/UI/Inputs/TextField/TextField";
import {useForm} from "react-hook-form";
import ButtonSecondary from "../../components/UI/Buttons/ButtonSecondary";
import {useDispatch, useSelector} from "react-redux";
import {fetchRegister} from "../../store/actions/authActions";
import {Navigate} from "react-router-dom";

const RegisterPage = (props) => {
    const isAuth = useSelector(state => Boolean(state.auth.data))
    const dispatch = useDispatch()
    const {
        register, handleSubmit, watch, clearErrors,
        formState: {errors, isValid}
    } = useForm({
        mode: "all"
    })

    const submitHandler = async (values) => {
        console.log(values)
        const data = await dispatch(fetchRegister(values))
        console.log(data)
        if (!data.payload) {
            return alert("Не удалось зарегестрироваться")
        }
        if ("token" in data.payload) {
            window.localStorage.setItem("token", data.payload.token)
        }
    }


    if (isAuth) {
        return <Navigate to="/"/>
    }

    return (
        <section className={style.registrationPage}>
            <div className={style.container}>
                <form className={style.form} onSubmit={handleSubmit(submitHandler)}>
                    <h2>Создать аккаунт</h2>
                    <div className={style.image}>
                        <img src="https://z0sqrs-a.akamaihd.net/1647-easthillmedical/staff/she.jpg" alt=""/>
                    </div>
                    <div className={style.input}>
                        <TextField
                            type={"text"}
                            label={"Полное имя"}
                            name={"fullName"}
                            clearErrors={clearErrors}
                            placeholder={"Введите имя"}
                            defaultValue={"Amir Ryasancec"}
                            errorMessage={errors.fullName?.message}
                            isError={errors.fullName?.message}
                            {...register("fullName", {required: "Укажите имя"})}
                        />
                    </div>
                    <div className={style.input}>
                        <TextField
                            type={"email"}
                            label={"Email"}
                            name={"email"}
                            clearErrors={clearErrors}
                            placeholder={"Введите email"}
                            defaultValue={"admin@mail.ru"}
                            errorMessage={errors.email?.message}
                            isError={errors.email?.message}
                            {...register("email", {required: "Укажите почту"})}
                        />
                    </div>
                    <div className={style.input}>
                        <TextField
                            type={"password"}
                            defaultValue={"123456789"}
                            clearErrors={clearErrors}
                            name={"password"}
                            label={"Пароль"}
                            placeholder={"Введите пароль"}
                            errorMessage={errors.password?.message}
                            isError={Boolean(errors.password?.message)}
                            {...register("password", {required: "Введите пароль"})}
                        />
                    </div>
                    <div className={style.btnSubmit}>
                        <ButtonSecondary disabled={!isValid} type="submit">
                            Зарегистрироваться
                        </ButtonSecondary>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default RegisterPage;