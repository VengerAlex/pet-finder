import {Link} from "react-router-dom";
import {FC} from "react";
import "./not-found.scss"

const NotFound: FC = () => {
    return (
        <div className="not-found">
            <div className="not-found__box">
                <div className="not-found__box-error">404</div>
                <h1 className="not-found__box-text">OPPS! PAGE NOT FOUND</h1>
                <Link to={"/"}>
                    <button className="btn">RETURN HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;