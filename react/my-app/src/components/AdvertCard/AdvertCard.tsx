import React from 'react'
import {Link} from "react-router-dom";
import image from "../../images/test_advert.jpg"

interface IAdvertCard {
    adverts: Item

}

const AdvertCard: React.FC<IAdvertCard> = (props) => {
    const {adverts} = props
    if(!adverts) {
        return null;
    }
    const {id, name, price, description} = adverts;

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