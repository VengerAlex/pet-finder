import {FC, ReactNode} from "react";

import * as ReactIconsAi from 'react-icons/ai';
import * as ReactIconsBi from 'react-icons/bi';
import * as ReactIconsMd from 'react-icons/md';

interface Icon {
    icon: string
}

let IconComponent

const Icon: FC<Icon> = ({icon}): any => {
    switch (icon){
        case "AiOutlineHome":
            IconComponent = ReactIconsAi["AiOutlineHome"]
            break
        case "BiNews":
            IconComponent = ReactIconsBi["BiNews"]
            break
        case "MdHistoryEdu":
            IconComponent = ReactIconsMd["MdHistoryEdu"]
            break
        default:
            IconComponent = ReactIconsAi["AiOutlineHome"]
    }


    return <IconComponent />
};

export default Icon;