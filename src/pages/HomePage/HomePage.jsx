import React from 'react';
import style from './index.module.scss'
import Posts from "../../components/Posts/Posts";
import HomeTags from "../../components/HomeTags/HomeTags";
import HomeComments from "../../components/HomeComments/HomeComments";


const HomePage = (props) => {

    return (
        <section className={style.homePage}>
            <div className={style.container}>
                <Posts/>
                <div className={style.homePage__tagsAndComments}>
                    <HomeTags/>
                    <HomeComments/>
                </div>
            </div>
        </section>
    );
}

export default HomePage;