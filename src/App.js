import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<div>Главная страница статей</div>}></Route>
                    <Route path="posts" element={<div>Главная страница статей</div>}></Route>
                    <Route path="posts/:id" element={<div>Одна статья</div>}></Route>
                    <Route path="add-post" element={<div>Добавление поста</div>}></Route>
                    <Route path="login" element={<div>Логин</div>}></Route>
                    <Route path="register" element={<div>Регистрация</div>}></Route>
                </Route>
                <Route path="*" element={<div>404 - страница не найдена</div>}/>
            </Routes>
        </div>
    );
}

export default App;
