import React from 'react';
import style from './index.module.scss'
import Post from "./Post/Post";


const Posts = (props) => {
    return (
        <div className={style.posts}>
            {
                [Array(5).fill(1).map((post, index) => (
                    <Post key={index} data={post}/>
                ))]
            }
        </div>
    );
}

export default Posts;