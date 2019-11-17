import React from 'react'
import AdvertCard from "../AdvertCard";
import store from "../../store";

interface IBoardProps {
    fetchAdverts: (adverts : Item[]) => void
    advertList: number[],
    adverts: any

}

const Board: React.FC<IBoardProps> = (props) => {
    const {fetchAdverts, advertList, adverts} = props;
    console.log(props);
    React.useEffect(() => {
        void itemsGet()
    }, []);

    const itemsGet = React.useCallback(async () => {
        if(advertList.length == 0) {
            const response = await fetch('http://localhost:3000/garages/');
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