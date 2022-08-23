import React, {FC, useState} from 'react';
import "./new-post.scss";
import {Input} from "../../shared/Input";
import useInput from "../../hooks/useInput";
import Select from "../../shared/Select";
import TextArea from "../../shared/TextArea";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {createPost} from "../../redux/reducers/post/post.actions";
import {useNavigate} from "react-router-dom";

const NewPost: FC = () => {
    const name = useInput("");
    const [description, setDescription] = useState("dasdas");
    const [gender, setGender] = useState("Gender");
    const [breed, setBreed] = useState("Breed");
    const [size, setSize] = useState("Size");
    const [image, setImage] = useState(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const newPost = {
            title: name.value,
            breed,
            gender,
            size,
            text: description,
            imgUrl: image
        }

        dispatch(createPost(newPost));
        navigate("/");
    }

    const imageHandler = (event: any) => {
        setImage(event.target.files[0])
    }

    return (
        <div className="container">
            <div className="new-post">
                <h3>Create Post</h3>

                <form onSubmit={submitHandler}>
                    <Input
                        placeholder="Name"
                        {...name}
                        type="text"/>
                    <Select
                        selectHandler={setBreed}
                        title={breed}
                        options={["Dog", "Cat", "Other"]}
                    />
                    <Select
                        selectHandler={setGender}
                        title={gender}
                        options={["Male", "Female"]}
                    />
                    <Select
                        selectHandler={setSize}
                        title={size}
                        options={["Small", "Medium", "Big"]}
                    />
                    <TextArea
                        placeholder="Description"
                        value={description}
                        changeHandler={setDescription}
                    />
                    {image && <div className="new-post__image"><img src={URL.createObjectURL(image)} alt="img"/></div>}
                    {!image &&
                        <div className="img-uploader">
                            <input id="file" type="file" onChange={imageHandler}/>
                            <label htmlFor="file">Load an Image</label>
                        </div>
                    }
                    <button>Create Post</button>
                    <button onClick={() => setImage(null)} className="new-post__cancel">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default NewPost;