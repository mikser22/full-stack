import React from 'react'
import AdvertCard from "../AdvertCard";

const Board: React.FC = () => {
    const [items, setItems] = React.useState<Item[]>([]);

    React.useEffect(() => {
        void itemsGet()
    }, []);

    const itemsGet = React.useCallback(async () => {
        const response = await fetch('http://127.0.0.1:8000/api/garages');
        const data = await response.json();
        setItems(data.items);
        console.log(items)
    }, []);

    return (
        <div className="container">
            <h2>Доска объявлений</h2>
            <div className="advert-board">
                {
                    items.map(item => (
                        <AdvertCard item={item}/>
                    ))
                }
            </div>
        </div>
    )
};
export default Board