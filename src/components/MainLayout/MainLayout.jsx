import React from 'react';
import style from './index.module.scss'
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";


const MainLayout = (props) => {
    return (
        <section className={style.mainLayout}>
            <Header/>
            <Outlet />
        </section>
    );
}

export default MainLayout;