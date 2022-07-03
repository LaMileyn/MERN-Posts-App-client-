import React, {useState} from 'react';
import style from './index.module.scss';
import TextField from "../../components/UI/Inputs/TextField/TextField";
import ButtonSecondary from "../../components/UI/Buttons/ButtonSecondary";
import ButtonPrimary from "../../components/UI/Buttons/ButtonPrimary";

const AddPostPage = (props) => {

    const [inputsData, setInputsData] = useState({
        title: '',
        tags: '',
        mainText: '',
    })

    return (
        <section className={style.addPost}>
            <div className={style.container}>
                <div className={style.inputs}>
                    <div className={style.add}>
                        <input type="file"/>
                    </div>
                    <div className={style.add}>
                        <div className={style.label}>Заголовок</div>
                        <TextField type="text" placeholder={"Введите заголовок статьи"}/>
                    </div>
                    <div className={style.add}>
                        <div className={style.label}>Тэги</div>
                        <TextField type="text" placeholder={"Тэги"}/>
                    </div>
                    <div className={style.add}>
                        <textarea placeholder={"Введите текст статьи..."}/>
                    </div>
                </div>
                <div className={style.buttons}>
                    <div className={style.btn}>
                        <ButtonSecondary>Опубликовать</ButtonSecondary>
                    </div>
                    <div className={style.btn}>
                        <ButtonPrimary>Отмена</ButtonPrimary>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AddPostPage;