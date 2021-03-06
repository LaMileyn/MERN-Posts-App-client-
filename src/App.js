import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import './styles/main.scss'
import HomePage from "./pages/HomePage/HomePage";
import PostPage from "./pages/PostPage/PostPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAuth} from "./store/actions/authActions";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddPostPage from "./pages/AddPostPage/AddPostPage";

const App = () => {

    const isAuth = useSelector(state => Boolean(state.auth.data))
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchAuth())
    },[dispatch])
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage/>}/>
                    <Route path="posts" element={<HomePage/>}/>
                    <Route path="posts/:id" element={<PostPage />}/>
                    <Route path="posts/:id/edit" element={<AddPostPage/>}/>
                    <Route path="add-post" element={<AddPostPage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="register" element={<RegisterPage/>}/>
                </Route>
                <Route path="*" element={<div>404 - страница не найдена</div>}/>
            </Routes>
        </div>
    );
}

export default App;
