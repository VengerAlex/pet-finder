import React, {FC} from 'react';
import "../styles/app.scss"

interface IHeader {
    title: string
}

const Header: FC<IHeader> = ({title}) => {
    return (
        <h2 className="title">{title}</h2>
    );
};

export default Header;