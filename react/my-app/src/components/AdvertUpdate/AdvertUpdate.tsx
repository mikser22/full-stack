import React from 'react'
import {BASEURL} from "../../config";

interface IProductUpdate {
    fetchAdvert : (advert : Item) => void
    toggleModal: (flag:boolean) => void
    advert: Item
}

const AdvertCreate: React.FC<IProductUpdate> = (props) => {
    const {advert: item, fetchAdvert, toggleModal} = props;
    const [name, setName] = React.useState(item.name);
    const [description, setDescription] = React.useState(item.description);
    const [price, setPrice] = React.useState(item.price+'');
    const onSubmit = React.useCallback(
        async (event) => {
            event.preventDefault()
            const id:number = item.id;

            const response = await fetch(`${BASEURL}api/products/${id}/`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, price, description})
            })
            const data: Item = await response.json();
            fetchAdvert(data);
            toggleModal(false);
        },
        [name, price, description]
    )
    return (
        <div className="advert-update">
            <h2>Изменить объявление</h2>
            <section className="new_advert">
                <form>
                    <div className="form-block">
                        <label htmlFor="form-name">Название:<br />
                        <input id="form-name" required name="name" value = {name}
                               onChange={(event) => setName(event.target.value)}/>
                        </label>
                    </div>
                    <div className="form-block">
                        <label htmlFor="form-description">Описание:<br />
                        <textarea id="form-description" name="description" required value = {description}
                                  onChange={(event) => setDescription(event.target.value)}/>
                        </label>
                    </div>
                    <div className="form-block">
                        <label htmlFor="form-price">Цена: <br />
                        <input id="form-price" name="price" value = {price}
                               onChange={(event) => setPrice(event.target.value)}/>
                        </label>
                    </div>
                    <input className="submit-button" type="submit" value="Изменить" name="button"
                           onClick={onSubmit}/>
                </form>
            </section>
        </div>
    )
};

export default AdvertCreate