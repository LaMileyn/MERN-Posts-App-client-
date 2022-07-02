import React from 'react';
import style from './index.module.scss'

const HomePage = (props) => {
    return (
        <section className={style.homePage}>
            <div className={style.container}>
                <div className={style.homePage__posts}>
                    <div className={style.post}>
                        <div className={style.post__image}>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.post__details}>
                            <div className={style.post__authorImage}>
                                <img src="" alt="hello"/>
                            </div>
                            <div className={style.post__textAndIcons}>
                                <div className={style.post__text}>
                                    <span className={style.post__authorName}>Keff</span>
                                    <span className={style.post__date}>12 june 2021</span>
                                    <span className={style.post__title}>12 june 2021</span>
                                    <div className={style.post__tags}>
                                        <div className={style.tag}>#react</div>
                                        <div className={style.tag}>#hello</div>
                                        <div className={style.tag}>#js</div>
                                    </div>
                                </div>
                                <div className={style.post__icons}>
                                    <div className={style.views}></div>
                                    <div className={style.comments}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.homePage__tagsAndComments}>
                    <div className={style.homePage__tags}>
                        <h3>Тэги</h3>
                        <div className={style.tag}>
                            <img src="" alt="gdf"/>
                            <span>react</span>
                        </div>
                        <div className={style.tag}>
                            <img src="" alt="gdf"/>
                            <span>react</span>
                        </div>
                        <div className={style.tag}>
                            <img src="" alt="gdf"/>
                            <span>react</span>
                        </div>
                    </div>
                    <div className={style.homePage__comments}>
                        <h3>Комментарии</h3>
                        {Array(5).fill(null).map((el, index) => (
                            <div key={index} className={style.comment}>
                                <div className={style.comment__photo}>
                                    <img src="" alt="photo"/>
                                </div>
                                <div className={style.comment__text}>
                                    <span className={style.comment__authorName}>Вася Пупкин</span>
                                    <p className={style.comment__textData}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime placeat
                                        reiciendis rem
                                        repudiandae sed. Accusantium animi autem delectus facere illo incidunt quae quo
                                        sit
                                        voluptates?
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;