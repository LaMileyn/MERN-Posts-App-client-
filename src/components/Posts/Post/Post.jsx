import React from 'react';
import views from "../../../assets/icons/view.png";
import comments from "../../../assets/icons/commentt.png";
import style from './index.module.scss'

const Post = ({ data }) => {
    return (
        <div className={style.post}>
            <div className={style.post__image}>
                <img
                    src="https://img.desktopwallpapers.ru/rocks/pics/wide/1920x1200/27640f370156a0e0ae3ee9608fc8480a.jpg"
                    alt=""/>
            </div>
            <div className={style.post__details}>
                <div className={style.post__authorImage}>
                    <img
                        src="https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"
                        alt="hello"/>
                </div>
                <div className={style.post__textAndIcons}>
                    <div className={style.post__text}>
                        <div className={style.post__authorName}>{ data.user.fullName}</div>
                        <div className={style.post__date}>{ data.createdAt}</div>
                        <div className={style.post__title}>{ data.text}</div>
                        <div className={style.post__tags}>
                            {
                                data.tags.map( (tag,index) => (
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