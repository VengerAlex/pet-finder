import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {setIsNew, setIsTrending} from "../../redux/reducers/post/postSlice";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import "./home.scss"
import clsx from "clsx";
import { MdOutlineTrendingUp, MdLocalFireDepartment } from 'react-icons/md';

const HomeHeader: FC = () => {
    const {isNew, isTrending} = useAppSelector(state => state.post);
    const dispatch = useAppDispatch();

    return (
        <div className="posts__header">
            <ul className="posts__list">
                <li
                   className={clsx('posts__item', {"posts__item-active": isNew})}
                   onClick={() => dispatch(setIsNew())}>
                    <MdLocalFireDepartment />
                    New
                </li>
                <li
                    className={clsx('posts__item', {"posts__item-active": isTrending})}
                    onClick={() => dispatch(setIsTrending())}>
                    <MdOutlineTrendingUp />
                    Trending
                </li>
            </ul>
            <Link to="/new-post"><button>Create Post</button></Link>
        </div>
    );
};

export default HomeHeader;