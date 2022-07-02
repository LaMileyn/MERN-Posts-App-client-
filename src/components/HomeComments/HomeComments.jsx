import React from 'react';
import style from './index.module.scss';


const HomeComments = (props) => {
    return (
        <div className={style.homePage__comments}>
            <h3>Комментарии</h3>
            {Array(5).fill(null).map((el, index) => (
                <div key={index} className={style.comment}>
                    <div className={style.comment__photo}>
                        <img
                            src="https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"
                            alt="hello"/>
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
    );
}

export default HomeComments;