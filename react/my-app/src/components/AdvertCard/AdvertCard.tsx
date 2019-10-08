import React from 'react'
import {Link} from "react-router-dom";
import image from "../../images/test_advert.jpg"

interface AdvertCardProps {
    item: Item
}

const AdvertCard: React.FC<AdvertCardProps> = (props) => {

    const {id, name, price} = props.item;

    return (
        <div className="main-advert">
            <Link to={"/advertpage/" + id}>
                <h3>{name}</h3>
                <img src={image} alt="kek" />
                <p>Ну купи гараж,<br /> плез<br />эээ, слишь<br /> купил быстро! <br/> Всего за {price}</p>
            </Link>
        </div>
    )
};

export default AdvertCard