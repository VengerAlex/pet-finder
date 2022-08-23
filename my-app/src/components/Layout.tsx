import React, {FC} from 'react';
import Header from "./Header";

import "../styles/app.scss"

interface ILayout {
    children: React.ReactNode
}

const Layout: FC<ILayout> = ({children}) => {
    return (
        <>
            <div className="app">
                <Header />
                {children}
            </div>
        </>
    );
};

export default Layout;