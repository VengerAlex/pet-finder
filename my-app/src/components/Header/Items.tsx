import {FC} from 'react';
import {Link, useLocation} from "react-router-dom";

import Icon from "../Icon";

import {items} from "../../utils/data";
import "../../styles/header.scss"
import clsx from 'clsx';

const Items: FC = () => {
    const {pathname} = useLocation();

    return (
        <ul className="header__list">
            {items.map(item => (
                <Link key={item.to} to={item.to}>
                    <li className={clsx(
                        "header__list-item",
                        {"header__list-item--active": pathname === item.to}
                    )}>
                        <Icon icon={item.icon}/>
                        {item.title}
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default Items;