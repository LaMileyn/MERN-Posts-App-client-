import React from 'react';
import style from './index.module.scss';

const HomeTags = (props) => {
    return (
        <div className={style.homePage__tags}>
            <h3>Тэги</h3>
            <div className={style.tag}>
                <img
                    src="https://w7.pngwing.com/pngs/397/96/png-transparent-hashtag-computer-icons-number-sign-others-miscellaneous-desktop-wallpaper-symbol.png"
                    alt="hello"/>
                <span>react</span>
            </div>
            <div className={style.tag}>
                <img
                    src="https://w7.pngwing.com/pngs/397/96/png-transparent-hashtag-computer-icons-number-sign-others-miscellaneous-desktop-wallpaper-symbol.png"
                    alt="hello"/>
                <span>react</span>
            </div>
            <div className={style.tag}>
                <img
                    src="https://w7.pngwing.com/pngs/397/96/png-transparent-hashtag-computer-icons-number-sign-others-miscellaneous-desktop-wallpaper-symbol.png"
                    alt="hello"/>
                <span>react</span>
            </div>
        </div>
    );
}

export default HomeTags;