import {Link} from "react-router-dom";
import {useState} from "react";

import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {logout} from "../../redux/reducers/user/userSlice";

const Avatar = () => {
    const {user} = useAppSelector(state => state.user)
    const [isVisibleBox, setIsVisibleBox] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const visibleBoxHandler = () => {
        setIsVisibleBox(prevValue => !prevValue)
    }

    return (
        <>
        {user && <div className="header__avatar">
            <div className="header__avatar-img">
                <img src="https://icon-library.com/images/icon-avatar/icon-avatar-19.jpg" alt="avatar"/>
            </div>
            <div className="header__avatar-box" onClick={visibleBoxHandler}>
                <h4 className="header__avatar-username">{user?.fullName}</h4>
                <span className="header__avatar-rating">4.3k</span>
            </div>
            {isVisibleBox &&
                <>
                    <div className="header-ad__box" onClick={visibleBoxHandler}>
                        <button
                            onClick={() => dispatch(logout())}
                            className="header-ad__box-btn">Logout</button>
                        <Link to="/settings">
                            <button className="header-ad__box-btn">Setting</button>
                        </Link>
                    </div>
                </>
            }
        </div>}
        </>
    );
};

export default Avatar;