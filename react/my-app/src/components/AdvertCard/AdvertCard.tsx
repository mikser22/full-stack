import React from 'react'
import {Link} from "react-router-dom";

interface AdvertCardProps {
    item: Item
}

const AdvertCard: React.FC<AdvertCardProps> = (props) => {

    const {name, price} = props.item;

    return (
        <div className="main-advert">
            <Link to="/advertpage">
                <h3>{name}</h3>
                <img src="../../images/test-advert.jpg" alt="kek" />
                <p>Ну купи гараж,<br /> плез<br />эээ, слишь<br /> купил быстро! <br/> Всего за {price}</p>
            </Link>
        </div>
    )
};

export default AdvertCard