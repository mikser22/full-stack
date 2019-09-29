import React from 'react'

const AdvertCreate: React.FC = () => {
    return (
        <div className="container">
            <h2>Новое объявление</h2>
            <section className="new_advert">
                <form>
                    <div className="form-block">
                        <label htmlFor="form-name">Введите название:</label>
                        <input id="form-name" required name="name" />
                    </div>
                    <div className="form-block">
                        <label htmlFor="form-description">Описание:</label>
                        <textarea id="form-description" name="description" required/>
                    </div>
                    <div className="form-block">
                        <label htmlFor="form-price">Начальная цена:</label>
                        <input id="form-price" name="price" />
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
                    <input className="submit-button" type="submit" value="Подать объявление" name="button" />
                </form>
            </section>
        </div>
    )
};

export default AdvertCreate