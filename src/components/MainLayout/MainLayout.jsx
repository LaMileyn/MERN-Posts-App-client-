import React from 'react';
import style from './index.module.scss'
import {Outlet} from "react-router-dom";
<<<<<<< HEAD
=======
import Header from "../Header/Header";
>>>>>>> header-component


const MainLayout = (props) => {
    return (
        <section className={style.mainLayout}>
            <Header/>
            <Outlet />
        </section>
    );
}

export default MainLayout;