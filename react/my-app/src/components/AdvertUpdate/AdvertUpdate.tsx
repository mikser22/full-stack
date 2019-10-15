import React from 'react'
import {Item} from "../../types"

interface IProductUpdate {
    item: Item
}

const AdvertCreate: React.FC<IProductUpdate> = (props) => {
    const {item} = props
    const [name, setName] = React.useState(item.name);
    const [description, setDescription] = React.useState(item.description);
    const [price, setPrice] = React.useState(item.price+'');
    const onSubmit = React.useCallback(
        async (event) => {
            event.preventDefault()
            await fetch('http://localhost:3000/garages/' + item.id, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, price, description})
            })
            window.history.back()
        },
        [name, price, description]
    )
    return (
        <div className="container">
            <h2>Новое объявление</h2>
            <section className="new_advert">
                <form>
                    <div className="form-block">
                        <label htmlFor="form-name">Введите название:</label>
                        <input id="form-name" required name="name" value = {name}
                               onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="form-block">
                        <label htmlFor="form-description">Описание:</label>
                        <textarea id="form-description" name="description" required value = {description}
                                  onChange={(event) => setDescription(event.target.value)}/>
                    </div>
                    <div className="form-block">
                        <label htmlFor="form-price">Начальная цена:</label>
                        <input id="form-price" name="price" value = {price}
                               onChange={(event) => setPrice(event.target.value)}/>
                    </div>
                    <input className="submit-button" type="submit" value="Изменить" name="button"
                           onClick={onSubmit}/>
                </form>
            </section>
        </div>
    )
};

export default AdvertCreate