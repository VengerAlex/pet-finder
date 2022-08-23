import React, {FC} from 'react';
import Header from "../../shared/Header";
import "../Home/home.scss"

const Favourites: FC = () => {
    let favourites = [1, 2, 3];

    return (
        <>
            <Header title="News" />

            {favourites.length > 0
                &&
                <>
                    <div>list of favourites</div>
                    <b className="view-more">view more</b>
                </>
            }

            {!favourites.length && <h5>There aren't favourites</h5>}
        </>
    );
};

export default Favourites;