import React, {FC, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import "./post.scss";
import {IPost} from "../../redux/reducers/post/post.interface";
import PostService from "../../services/post/postService";
import {BsArrowLeft} from 'react-icons/bs';
import {TiDeleteOutline} from 'react-icons/ti';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {deletePost} from "../../redux/reducers/post/post.actions";
import {deleteOne} from "../../redux/reducers/post/postSlice";

const Index: FC = () => {
    const [post, setPost] = useState<IPost>();
    const {id} = useParams()
    const navigate = useNavigate();
    const {user} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getOnePost = async () => {
            const response = await PostService.getPost(id);

            setPost(response)
            console.log("RESPONSE", response)
        }

        getOnePost();
        console.log("!!@!@!@!")
    }, [id])

    const deleteHandler = () => {
        console.log(post?._id)
        dispatch(deleteOne(post?._id))
        dispatch(deletePost({id: post?._id}))

        navigate("/");
    }

    return (
        <div className="container">
            <Link to="/">
                <div className="go-back">
                    <BsArrowLeft/>
                </div>
            </Link>


            <div className="post__container">
                <div className="post__image">
                    <img
                        src={"https://d2bki4h0nxsiqd.cloudfront.net/resized/410x410/animal-photos/187684/1f779321-2bc0-49af-85c9-3ee25857c0a4.jpg"}
                        alt="dog"/>
                </div>
                <div className="post__info">
                    <div className="post__header">
                        <h2 className="post__name">{post?.title}</h2>
                        {post?.author === user?.id && <div className="post__header-delete">
                            <TiDeleteOutline onClick={deleteHandler}/>
                        </div>}
                    </div>

                    <div className="post__box">
                        <ul className="post__list">
                            <li className="post__item">
                                <span>Breed:</span>{post?.breed}
                            </li>
                            <li className="post__item">
                                <span>Size:</span>{post?.size}
                            </li>
                            <li className="post__item">
                                <span>Gender:</span>{post?.gender}
                            </li>
                        </ul>
                        <div className="post__descr post__item">
                            <span>Description:</span>{post?.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;