import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

import "./styles/app.scss";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {check} from "./redux/reducers/user/user.actions";
import About from "./pages/About";
import Layout from "./components/Layout";
import NewPost from "./pages/NewPost/NewPost";
import Post from "./pages/Post";


const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem("token")){
            dispatch(check())
        }
    }, [])

    return (
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/about-us" element={<About/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/new-post" element={<NewPost/>}/>
                    <Route path="/post/:id" element={<Post/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
    );
};

export default App;