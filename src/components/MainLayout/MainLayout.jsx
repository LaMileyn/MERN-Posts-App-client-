import React from 'react';
import style from './index.module.scss'
import {Outlet} from "react-router-dom";


const MainLayout = (props) => {
    return (
        <section className={style.mainLayout}>
            <div>header</div>
            <Outlet />
        </section>
    );
}

export default MainLayout;