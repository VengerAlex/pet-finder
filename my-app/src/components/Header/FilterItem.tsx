import React, {FC} from 'react';
import {IPost} from "../../redux/reducers/post/post.interface";
import {useNavigate} from "react-router-dom";

interface IFilterItem extends IPost {
    closeHandler: () => void
}

const FilterItem: FC<IFilterItem> = (props) => {
    const {title, breed, _id, imgUrl, username, closeHandler} = props;
    const navigate = useNavigate();

    const goToPageHandler = () => {
        closeHandler()
        navigate(`/post/${_id}`)
    }


    return (
        <li className="search__list-item" onClick={goToPageHandler}>
            <div className="list__item-img">
                <img src="https://d2bki4h0nxsiqd.cloudfront.net/resized/210x210/animal-photos/553660/24b0b956-0fd9-48f6-bf6a-df002498aeba.png" alt={breed}/>
            </div>
            <ul className="list__item-info">
                <li>
                    name: <b>{title}</b>
                </li>
                <li>
                    auth: <b>{username}</b>
                </li>
            </ul>
        </li>
    );
};

export default FilterItem;