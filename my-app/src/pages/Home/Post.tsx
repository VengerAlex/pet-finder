import React, {FC} from 'react';
import {IPost} from "../../redux/reducers/post/post.interface";
import Sketch from "../../assets/img/deffault.jpg"
import {useNavigate} from "react-router-dom";
import "./home.scss"
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegCalendarTimes } from 'react-icons/fa';
import Moment from "react-moment";

//AiOutlineHeart
//AiTwotoneHeart

const Post: FC<IPost> = (props) => {
    const navigate = useNavigate();
    const {title, _id, imgUrl, views, createdAt} = props;

    return (
            <div onClick={() => navigate(`post/${_id}`)} className="post">
                <div className="post__img">
                    <img src={"https://d2bki4h0nxsiqd.cloudfront.net/resized/210x210/animal-photos/930545/2702423e-0131-49ba-a947-9cadec84a270.jpg"} alt={title}/>
                    <h5 className="post__title">{title}</h5>
                    <div className="post__info">
                        <ul className="post__info-list">
                            <li className="post__info-item">
                                <AiOutlineEye />
                                <b className="post__views">{views}</b>
                            </li>
                            <li className="post__info-item">
                                <FaRegCalendarTimes />
                                <b className="post__views">
                                    <Moment date={createdAt} format="D MMM YYYY"/>
                                </b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default Post;