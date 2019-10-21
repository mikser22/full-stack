import React from 'react'
import {Link} from "react-router-dom";
import image from "../../images/test_advert.jpg"

interface IAdvertCard {
    item: Item

}

const AdvertCard: React.FC<IAdvertCard> = (props) => {
    const {item} = props;
    const {id, name, price, description} = item;

    return (
        <div className="main-advert">
            <Link to={"/advertpage/" + id}>
                <h3>{name}</h3>
                <img src={image} alt="kek" />
                <p>{description}<br/> Цена {price}</p>
            </Link>
        </div>
    )
};

export default AdvertCard