import React, {useEffect, useState} from 'react';
import style from './index.module.scss';
import HomeComments from "../../components/HomeComments/HomeComments";
import {useParams} from "react-router-dom";
import Post from "../../components/Posts/Post/Post";
import {PostsApi} from "../../api";
import {useSelector} from "react-redux";


const PostPage = (props) => {

    const [postData, setPostData] = useState(null)
    const {id} = useParams()
    const userData = useSelector( state => state.auth.data )

    useEffect(() => {
        PostsApi.getOnePost(id)
            .then(res => {
                console.log(res)
                setPostData(res.data)
            })
    }, [id])
    return (
        <section className={style.postPage}>
            <div className={style.container}>
                <Post data={postData} noLink={true} isOwner={userData?._id === postData?.user._id}/>
                <HomeComments/>
            </div>
        </section>
    );
}

export default PostPage;