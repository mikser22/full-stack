import React from 'react'

interface IAdvertCreate {
    history: {
        push: (url: string) => void
    },
    adverts: any,
    fetchNewAdvert : (advert : Item) => void,
}

const AdvertCreate: React.FC<IAdvertCreate> = (props) => {
    const {history, fetchNewAdvert} = props;
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');
    const onSubmit = React.useCallback(
        async (event) => {
            event.preventDefault()
            const response = await fetch('http://localhost:3000/garages', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, price, description, owner: 1 })
            })
            const data = await response.json();
            fetchNewAdvert(data);
            history.push('')
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
                    <div className="form-block">
                        <label htmlFor="form-phone">Телефон:</label>
                        <input id="form-phone" name="phone" />
                    </div>
                    <div className="form-block form-block-file">
                        <label htmlFor="form-file">Загрузить<br />изображение:</label>
                        <input className="form-file" type="file" name="file" id="form-file" />
                    </div>
                    <div className="form-block-radio">
                        <label>Выберите тип:<br />
                            <input className="radio-button" type="radio" name="type" required /> объявление<br />
                            <input className="radio-button" type="radio" name="type" required /> аукцион<br />
                        </label>
                    </div>
                    <input className="submit-button" type="submit" value="Подать объявление" name="button"
                            onClick={onSubmit}/>
                </form>
            </section>
        </div>
    )
};

export default AdvertCreate