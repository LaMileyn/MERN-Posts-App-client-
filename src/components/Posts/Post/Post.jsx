import React from 'react';
import views from "../../../assets/icons/view.png";
import comments from "../../../assets/icons/commentt.png";
import style from './index.module.scss'
import {Link, useNavigate} from "react-router-dom";
import cn from 'classnames';
import close from '../../../assets/icons/close.png'
import edit from '../../../assets/icons/edit.png'
import {baseURL} from "../../../api";
import {useDispatch} from "react-redux";
import {fetchDeletePost} from "../../../store/actions/postActions";

const Post = ({data, noLink, isOwner}) => {

    const dispatch = useDispatch()


    const clickDeleteHandler = () =>{
        if (window.confirm("Вы действительно хотите удалить пост?")) {
            dispatch(fetchDeletePost(data._id))
        }
    }
    const navigate = useNavigate()

    if (!data) return "Loading..."

    return (
        <div className={cn(style.post, {[style.hoveredPost]: !noLink})}>
            {
                data.imageUrl && (
                    <div className={style.post__image}>
                        <img
                            src={baseURL + data.imageUrl}
                            alt=""/>
                    </div>
                )
            }
            <div className={style.post__details}>
                <div className={style.post__authorImage}>
                    <img
                        src="https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"
                        alt="hello"/>
                </div>
                <div className={style.post__textAndIcons}>
                    <div className={style.post__text}>
                        <div className={style.post__controlsAndTitles}>
                            <div className={style.post__titles}>
                                <div className={style.post__authorName}>{data.user.fullName}</div>
                                <div className={style.post__date}>{data.createdAt}</div>
                            </div>
                            {/* only if its an owner */}
                            {isOwner &&
                                (
                                    <div className={style.post__controls}>
                                        <div className={cn(style.iconControl)} onClick={ () => navigate(`/posts/${data._id}/edit`)}>
                                            <img src={edit} alt=""/>
                                        </div>
                                        <div className={cn(style.iconControl)} onClick={clickDeleteHandler}>
                                            <img src={close} alt=""/>
                                        </div>
                                    </div>
                                )}
                            {/* only if its an owner */}

                        </div>
                        <div className={style.post__title}>
                            {
                                noLink
                                    ? data.title
                                    : <Link to={`/posts/${data._id}`}>{data.title}</Link>
                            }
                        </div>
                        <div className={style.post__text}>
                            {
                                data.text
                            }
                        </div>
                        <div className={style.post__tags}>
                            {
                                data.tags.map((tag, index) => (
                                    <div key={index} className={style.tag}>#{tag}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={style.post__icons}>
                        <div className={style.views}>
                            <img src={views} alt=""/>
                            <span>{data.viewsCount}</span>
                        </div>
                        <div className={style.comments}>
                            <img src={comments} alt=""/>
                            <span>3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;