import React from 'react'
import {Link} from "react-router-dom";
import defaultImage from "../../images/test_advert.jpg"

interface IAdvertCard {
    adverts: Item

}

const AdvertCard: React.FC<IAdvertCard> = (props) => {
    const {adverts} = props;
    if(!adverts) {
        return null;
    }
    const {id, name, price, description, on_auction, image} = adverts;
    const str = description.length > 40 ? "..." : "";
    return (
        <div className="main-advert">
            {on_auction ? <div className="advert-card--auction">Аукцион</div> : ''}
            <Link to={"/advertpage/" + id}>
                <h3>{name}</h3>
                <img src={image} alt="kek" />
                <p>{description.slice(0, 40) + str}<br/> Цена <b>{price}</b></p>
            </Link>
        </div>
    )
};

export default AdvertCard