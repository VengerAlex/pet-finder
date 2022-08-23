import {FC} from 'react';
import {Link, useLocation} from "react-router-dom";

import Items from "./Items";
import FilterSearch from "./FilterSearch";

import "../../styles/header.scss"
import Logo from "../../assets/img/logo.jpg"
import {useAppSelector} from "../../hooks/useAppSelector";
import Avatar from "./Avatar";


const Header: FC = () => {
    const {pathname} = useLocation();
    const {user} = useAppSelector(state => state.user)

    if (pathname === "/login") return null

    return (
        <header className="header">
            <div className="header__container">
                <Link to={"/"}>
                    <div className="header__box">
                            <img className="header__box-img" src={Logo} alt="logo"/>
                    </div>
                </Link>

                <Items />
                <FilterSearch />
                <Avatar />

                {!user && (
                     <div className="header__login">
                         <Link to="/login">
                             <button>Login</button>
                         </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;