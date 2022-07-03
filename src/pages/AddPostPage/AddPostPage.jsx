import React, {useRef, useState} from 'react';
import style from './index.module.scss';
import TextField from "../../components/UI/Inputs/TextField/TextField";
import ButtonSecondary from "../../components/UI/Buttons/ButtonSecondary";
import ButtonPrimary from "../../components/UI/Buttons/ButtonPrimary";
import {baseURL, PostsApi, UploadApi} from "../../api";
import {useNavigate} from "react-router-dom";
const AddPostPage = (props) => {

    const [inputsData, setInputsData] = useState({
        title: '',
        tags: '',
        mainText: '',
        imageUrl: ''
    })
    const handleChangeFile = async (event) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append("image", file);
            const {data} = await UploadApi.getImage(formData)
            setInputsData({...inputsData, imageUrl: data.url})
        } catch (err) {
            console.warn(err)
        }
    }
    const onClickRemoveImage = () =>{
        setInputsData({...inputsData, imageUrl: ""})
    }
    const inputRef = useRef()
    const navigate = useNavigate()
    const submitData = async () =>{
        try {
            const fields = {
                title : inputsData.title,
                text  : inputsData.mainText,
                tags  : inputsData.tags,
                imageUrl : inputsData.imageUrl
            }
            const { data } = await PostsApi.addPost(fields)
            console.log(data)
            const id = data._id;
            navigate(`/posts/${id}`)
        }catch (error){
            console.warn(error)
        }
    }

    return (
        <section className={style.addPost}>
            <div className={style.container}>
                <div className={style.inputs}>
                    <div className={style.add}>
                        <div className={style.btnLoad} onClick={() => inputRef.current.click()}>
                            <ButtonSecondary>Загрузить файл</ButtonSecondary>
                        </div>
                        <input ref={inputRef} type="file" hidden onChange={handleChangeFile}/>
                        {
                            inputsData.imageUrl &&
                            (
                                <>
                                    <div className={style.delImgBtn} onClick={onClickRemoveImage}>
                                        <ButtonPrimary>Удалить</ButtonPrimary>
                                    </div>
                                    <div className={style.postImg}>
                                        <img src={baseURL+inputsData.imageUrl} alt=""/>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <div className={style.add}>
                        <div className={style.label}>Заголовок</div>
                        <TextField value={inputsData.title}
                                   onChange={(e) => setInputsData({...inputsData, title: e.currentTarget.value})}
                                   type="text" placeholder={"Введите заголовок статьи"}/>
                    </div>
                    <div className={style.add}>
                        <div className={style.label}>Тэги</div>
                        <TextField value={inputsData.tags}
                                   onChange={(e) => setInputsData({...inputsData, tags: e.currentTarget.value})}
                                   type="text" placeholder={"Тэги"}/>
                    </div>
                    <div className={style.add}>
                        <textarea value={inputsData.mainText}
                                  onChange={(e) => setInputsData({...inputsData, mainText: e.currentTarget.value})}
                                  placeholder={"Введите текст статьи..."}/>
                    </div>
                </div>
                <div className={style.buttons}>
                    <div className={style.btn} onClick={submitData}>
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