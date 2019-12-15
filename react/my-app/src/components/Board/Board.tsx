import React from 'react'
import AdvertCard from "../AdvertCard";
import "../../config"
import {BASEURL} from "../../config";

interface IBoardProps {
    fetchAdverts: (adverts : Item[]) => void
    advertList: number[],
    adverts: any
    match: {
        params: {
            id: number
        }
    },

}

const Board: React.FC<IBoardProps> = (props) => {
    const {fetchAdverts, advertList} = props;
    React.useEffect(() => {
        void itemsGet(props.match.params.id)

    }, [props.match.params.id]);

    const itemsGet = React.useCallback(async (id) => {
        let response;
        if(id){
            response = await fetch(`${BASEURL}api/category?id=${id}`);
            const data = await response.json();
            fetchAdverts(data)
        } else {
            response = await fetch(`${BASEURL}api/products/`);
            const data = await response.json();
            fetchAdverts(data)
        }

    }, []);

    if(!advertList) {
        return null;
    }
    return (
        <div className="container">
            <h2>Доска объявлений</h2>
            <div className="advert-board">
                {
                    advertList.map((advertId, index) => (
                        <AdvertCard key={index} advertId={advertId}/>
                    ))
                }
            </div>
        </div>
    )
};
export default Board