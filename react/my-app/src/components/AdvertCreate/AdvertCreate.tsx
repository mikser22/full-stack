import React from 'react'
import {BASEURL} from "../../config";
import {Link} from "react-router-dom";

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
    const [on_auction, setAuction] = React.useState('');
    const [category, setCategory] = React.useState('');
    let headers = {} as any
    const token = window.localStorage.getItem('access')

    if (token) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    console.log(token)
    const onSubmit = React.useCallback(
        async (event) => {
            event.preventDefault() // из-за этого не работает проверка важных полей
            const response = await fetch(`${BASEURL}api/my/`, {
                method: 'post',
                headers,
                body: JSON.stringify({ name, price, description, owner: 1 , on_auction})
            })
            const data = await response.json();
            fetchNewAdvert(data);
            history.push('')
        },
        [category, on_auction, name, price, description]
    )
    return (
        <div className="container">
            <h2>Новое объявление</h2>
            <section className="new_advert">
                <form>
                    <div className="form-block">
                        <label htmlFor="form-name">Введите название:<br />
                            <input id="form-name" placeholder="Название объявления" required name="name" value = {name}
                                   onChange={(event) => setName(event.target.value)}/>
                        </label>
                    </div>
                    <div className="form-block">
                        <label htmlFor="form-description">Описание:<br />
                            <textarea id="form-description" placeholder="Описание объявления" name="description" required value = {description}
                                      onChange={(event) => setDescription(event.target.value)}/>
                        </label>
                    </div>
                    <div className="form-block">
                        <label htmlFor="form-category">Категория:<br />
                            <select id="selector" required >
                                <option selected disabled >Выберите категорию</option>
                                <option value="Недвижимость" >Недвижимость</option>
                                <option value="Транспорт">Транспорт</option>
                                <option value="Работа">Работа</option>
                                <option value="Бытовая электроника">Бытовая электроника</option>
                                <option value="Животные">Животные</option>
                                <option value="Хобби и отдых">Хобби и отдых</option>
                                <option value="Для дома и дачи">Для дома и дачи</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-block">
                        <label htmlFor="form-price" >Начальная цена:<br />
                            <input id="form-price" placeholder="цена" name="price" value = {price}
                                   onChange={(event) => setPrice(event.target.value)}/>
                        </label>
                    </div>
                    <div className="form-block">
                        <label htmlFor="form-phone">Телефон:<br />
                            <input id="form-phone" name="phone" placeholder="ваш телефон" />
                        </label>
                    </div>
                    <div className="form-block form-block-file">
                        <label htmlFor="form-file">Загрузить изображение:<br />
                            <input className="form-file" type="file" name="file" id="form-file" />
                        </label>
                    </div>
                    <div className="form-block-radio">
                        <label className="form-block-radio-main-label" >Выберите тип:<br />
                            <label><input className="radio-button" type="radio" name="type" required value="0"
                                          onChange={(event) => setAuction(event.target.value)}/> объявление</label><br />
                            <label><input className="radio-button" type="radio" name="type" required value="1"
                                          onChange={(event) => setAuction(event.target.value)}/> аукцион</label><br />
                        </label>
                    </div>
                    <input className="submit-button" type="submit" value="Создать объявление" name="button"
                            onClick={onSubmit}/>
                </form>
            </section>
        </div>
    )
};

export default AdvertCreate