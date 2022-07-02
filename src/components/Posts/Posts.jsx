import React, {useEffect} from 'react';
import style from './index.module.scss'
import Post from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../../store/actions/postActions";


const Posts = (props) => {
    const { posts : { items : { data }, status } }  = useSelector( state => state.posts)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(fetchAllPosts())
    },[dispatch])

    if ( status === "loading" ) return <div>Loading..</div>
    return (
        <div className={style.posts}>
            {
                data.map(  post => (
                    <Post key={post._id} data={post}/>
                ))
            }
        </div>
    );
}

export default Posts;