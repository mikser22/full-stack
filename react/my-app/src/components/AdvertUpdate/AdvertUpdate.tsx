import React from 'react'
import store from "../../store";

interface IProductUpdate {
    item: Item
    fetchAdvert : (advert : Item) => void
    history: {
        push: (url: string) => void
    },
}

const AdvertCreate: React.FC<IProductUpdate> = (props) => {
    const {item, fetchAdvert, history} = props;
    const [name, setName] = React.useState(item.name);
    const [description, setDescription] = React.useState(item.description);
    const [price, setPrice] = React.useState(item.price+'');
    const onSubmit = React.useCallback(
        async (event) => {
            event.preventDefault()
            const id:number = item.id
            const response = await fetch(`http://localhost:3000/garages/${id}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, price, description})
            })
            const data = await response.json();
            fetchAdvert(data);
            window.location.assign(`/advertpage/${id}`)
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