import React from 'react'
import {Link} from "react-router-dom";
import image from "../../images/test_advert.jpg"
import {Item} from "../../types"

interface AdvertCardProps {
    item: Item
}

const AdvertCard: React.FC<AdvertCardProps> = (props) => {

    const {id, name, price, description} = props.item;

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