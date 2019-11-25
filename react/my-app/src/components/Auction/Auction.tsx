import { Link } from 'react-router-dom'
import React from "react";

interface IAuction {
    startPriсe:number,
    currentPrice:number,
    lastPersonId:number,
    endDate:string

}

const Auction: React.FC<IAuction> = (props) => {
    const [price, setPrice] = React.useState('1');
    const handle = () => {
        console.log("повысить цену на ", price)
            //TODO: написать обработчик
    }
    return (
        <div className="auction">
            <h2>Данный товар(услуга) продается путем аукциона</h2>
            <div className="auction-date">Окончание аукциона: {props.endDate} (МСК)</div>
            <div className="auction-info">
                <div>
                    <span>Начальная цена: </span>
                    <span className="auction-price">{props.startPriсe} руб</span>
                </div>
                <div>
                    <span>Текущая цена: </span>
                    <span className="auction-price">{props.currentPrice} руб</span>
                </div>
                <div>
                    <span>Последнее предложение: </span>
                    <Link to="/profile">username3228</Link>
                </div>
            </div>
            <h3>Вы можете учавствовать</h3>
            <div className="auction-info">
                <div>
                    <span>Минимальный шаг: </span>
                    <span className="auction-price">1 руб</span>
                </div>
                <div>
                    <span>Ваше предложение: </span>
                    <input className="auction-price-input" placeholder={price} value={price} onChange={(e) => {+e.target.value >= 0 && setPrice(e.target.value)}}/>
                    <span className="auction-price"> руб</span>
                </div>
                <div>
                    <span>Итоговая цена: </span>
                    <span className="auction-price">{props.currentPrice + +price}  руб</span>
                </div>
            </div>
            <button className="buy-button" onClick={() => handle()}>Отправить это предложение</button>


        </div>
    )
};

export default Auction