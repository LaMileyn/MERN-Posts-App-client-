import React, {useEffect, useRef, useState} from 'react';
import style from './index.module.scss';
import TextField from "../../components/UI/Inputs/TextField/TextField";
import ButtonSecondary from "../../components/UI/Buttons/ButtonSecondary";
import ButtonPrimary from "../../components/UI/Buttons/ButtonPrimary";
import {baseURL, PostsApi, UploadApi} from "../../api";
import {useNavigate, useParams} from "react-router-dom";

const AddPostPage = (props) => {

    const [inputsData, setInputsData] = useState({
        title: '',
        tags: '',
        mainText: '',
        imageUrl: ''
    })
    const [isEditing,setIsEditing] = useState(false)
    const {id} = useParams()
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
    const onClickRemoveImage = () => {
        setInputsData({...inputsData, imageUrl: ""})
    }
    const inputRef = useRef()
    const navigate = useNavigate()
    useEffect(() => {
        if (id) {
            try {
                PostsApi.getOnePost(id)
                    .then(({data}) => {
                        setInputsData({
                            title: data.title,
                            tags: data.tags,
                            mainText: data.text,
                            imageUrl: data.imageURL
                        })
                        setIsEditing(true)
                    })
            } catch (er) {
                console.warn(er)
            }

        }
    }, [])
    const submitData = async () => {
        try {
            const fields = {
                title: inputsData.title,
                text: inputsData.mainText,
                tags: inputsData.tags,
                imageUrl: inputsData.imageUrl
            }
            const {data} = isEditing
                ? await PostsApi.updatePost(id,fields)
                : await PostsApi.addPost(fields)
            const _id = isEditing ? id : data._id;
            navigate(`/posts/${_id}`)
        } catch (error) {
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
                                        <img src={baseURL + inputsData.imageUrl} alt=""/>
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
                                   onChange={(e) => {
                                       setInputsData({...inputsData, tags: e.currentTarget.value.split(" ").join(",")})
                                   }}
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
                        { isEditing && <ButtonSecondary>Сохранить</ButtonSecondary>}
                        { !isEditing && <ButtonSecondary>Опубликовать</ButtonSecondary>}
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