import React, {FC, useState} from 'react';
import "../../src/styles/app.scss"
import { RiArrowUpSFill } from 'react-icons/ri';
import clsx from "clsx";

interface ISelect {
    title: string;
    options: string[]
    selectHandler: (elem: any) => void
}

const Select: FC<ISelect> = ({title, options, selectHandler}) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div onClick={() => setIsActive(!isActive)} className="dropdown">
            <div className="dropdown-btn">{title}</div>
            <RiArrowUpSFill className={clsx("arrow", {"arrow-active": isActive})}/>
            {isActive &&
                <div className="dropdown-content">
                    {options.map((elem, index) => (
                        <div
                            onClick={() => selectHandler(elem)}
                            key={index}
                            className="dropdown-item">{elem}</div>
                    ))}
                </div>
            }
        </div>
    );
};

export default Select;