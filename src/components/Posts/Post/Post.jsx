import React from 'react';
import views from "../../../assets/icons/view.png";
import comments from "../../../assets/icons/commentt.png";
import style from './index.module.scss'

const Post = (props) => {
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
                        <div className={style.post__authorName}>Keff</div>
                        <div className={style.post__date}>12 june 2021</div>
                        <div className={style.post__title}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aperiam corporis ducimus, possimus quasi rerum
                            voluptas.
                        </div>
                        <div className={style.post__tags}>
                            <div className={style.tag}>#react</div>
                            <div className={style.tag}>#hello</div>
                            <div className={style.tag}>#js</div>
                        </div>
                    </div>
                    <div className={style.post__icons}>
                        <div className={style.views}>
                            <img src={views} alt=""/>
                            <span>4</span>
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