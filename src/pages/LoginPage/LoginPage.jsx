import React from 'react';
import style from './index.module.scss'
import TextField from "../../components/UI/Inputs/TextField/TextField";
import ButtonSecondary from "../../components/UI/Buttons/ButtonSecondary";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {fetchAuth} from "../../store/actions/authActions";

const LoginPage = (props) => {

    const {
        register, handleSubmit, watch, clearErrors,
        formState: {errors, isValid}
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onChange"
    })

    const dispatch = useDispatch()
    const onSubmit = (values) => {
        dispatch(fetchAuth(values))
    }

    return (
        <section className={style.loginPage}>
            <div className={style.container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Вход в аккаунт</h2>
                    <div className={style.input}>
                        <TextField
                            type={"email"}
                            label={"Email"}
                            name={"email"}
                            clearErrors = {clearErrors}
                            placeholder={"Введите email"}
                            errorMessage={errors.email?.message}
                            isError={errors.email?.message}
                            {...register("email", { required : "Укажите почту"})}
                        />
                    </div>
                    <div className={style.input}>
                        <TextField
                            type={"password"}
                            clearErrors = {clearErrors}
                            name={"password"}
                            label={"Пароль"}
                            placeholder={"Введите пароль"}
                            errorMessage={errors.password?.message}
                            isError={Boolean(errors.password?.message)}
                            {...register("password", { required : "Введите пароль"})}
                        />
                    </div>
                    <div className={style.btnSubmit}>
                        <ButtonSecondary type="submit">
                            Войти
                        </ButtonSecondary>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default LoginPage;