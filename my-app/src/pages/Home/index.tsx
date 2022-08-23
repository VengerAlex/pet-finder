import {FC, useEffect, useState} from 'react';

import "./home.scss"
import Favourites from "./Favourites";
import HomeHeader from "./HomeHeader";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getPosts} from "../../redux/reducers/post/post.actions";
import {useAppSelector} from "../../hooks/useAppSelector";
import Post from "./Post";

const Home: FC = () => {
    const dispatch = useAppDispatch();
    const {posts, isLoading} = useAppSelector(state => state.post);
    const {isTrending, isNew} = useAppSelector(state => state.post)

    useEffect(() => {
        dispatch(getPosts({isTrending, isNew}))

    }, [dispatch, isTrending, isNew])


    if (isLoading) {
        return <h1>LOADING</h1>
    }

    return (
        <div className="container">
            <div className="home__container">
                    <div className="sidebar">
                            <Favourites />
                    </div>
                    <div className="posts">
                        <HomeHeader />
                        <div className="posts-items">
                            {posts.map(post => <Post key={post._id} {...post}/>)}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Home;