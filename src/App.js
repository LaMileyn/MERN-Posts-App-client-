import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import './styles/main.scss'
import HomePage from "./pages/HomePage/HomePage";

const App = () => {


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage/>}/>
                    <Route path="posts" element={<div>Главная страница статей</div>}/>
                    <Route path="posts/:id" element={<div>Одна статья</div>}/>
                    <Route path="add-post" element={<div>Добавление поста</div>}/>
                    <Route path="login" element={<div>Логин</div>}/>
                    <Route path="register" element={<div>Регистрация</div>}/>
                </Route>
                <Route path="*" element={<div>404 - страница не найдена</div>}/>
            </Routes>
        </div>
    );
}

export default App;
