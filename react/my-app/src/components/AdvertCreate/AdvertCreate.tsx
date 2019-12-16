import React from "react";
import { BASEURL } from "../../config";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import Message from "../Message";

interface IAdvertCreate {
  history: {
    push: (url: string) => void;
  };
  adverts: any;
  fetchNewAdvert: (advert: Item) => void;
}

const AdvertCreate: React.FC<IAdvertCreate> = props => {
  const { history, fetchNewAdvert } = props;
  const token = window.localStorage.getItem("access");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [on_auction, setAuction] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [image, setImage] = React.useState<File | null>(null);

  const [isModalOpen, toggleModal] = React.useState(false);
  const [errorCode, setErrorCode] = React.useState(0);
  const [errorText, setErrorText] = React.useState('');

  const onDrop = React.useCallback(acceptedFiles => {
    if (acceptedFiles && acceptedFiles[0]) {
      setImage(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  let response;
  const onSubmit = React.useCallback(
    async event => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("on_auction", on_auction);
      if (image) {
        formData.append("image", image);
      }
      event.preventDefault(); // из-за этого не работает проверка важных полей
      response = await fetch(`${BASEURL}api/my/`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      const data = await response.json();
      console.log(data, response);
      if(response.status >= 300 || response.status < 200){
        setErrorText(response.statusText)
        setErrorCode(response.status)
        toggleModal(true)
      } else {
        fetchNewAdvert(data);
        history.push("");
      }
    },
    [category, on_auction, name, price, description, image]
  );
  return (
    <div className="container">
      <h2>Новое объявление</h2>
      <section className="new_advert">
        <form>
          <div className="form-block">
            <label htmlFor="form-name">
              Введите название:
              <br />
              <input
                id="form-name"
                placeholder="Название объявления"
                required
                name="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </label>
          </div>
          <div className="form-block">
            <label htmlFor="form-description">
              Описание:
              <br />
              <textarea
                id="form-description"
                placeholder="Описание объявления"
                name="description"
                required
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </label>
          </div>
          <div className="form-block">
            <label htmlFor="form-category">
              Категория:
              <br />
              <select
                id="selector"
                required
                onChange={e => {
                  setCategory(e.target.value);
                }}
              >
                <option selected value={1}>
                  Недвижимость
                </option>
                <option value={2}>Транспорт</option>
                <option value={3}>Работа</option>
                <option value={4}>Бытовая электроника</option>
                <option value={5}>Животные</option>
                <option value={6}>Хобби и отдых</option>
                <option value={7}>Для дома и дачи</option>
              </select>
            </label>
          </div>
          <div className="form-block">
            <label htmlFor="form-price">
              Начальная цена:
              <br />
              <input
                id="form-price"
                placeholder="цена"
                name="price"
                value={price}
                onChange={event => setPrice(event.target.value)}
              />
            </label>
          </div>
          <div className="form-block">
            <label htmlFor="form-file">
              Изображение:
              <br />
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="image-field">
                  {(image && image.name) || "Файл не выбран"}
                </div>
              </div>
            </label>
          </div>
          <div className="form-block-radio">
            <label className="form-block-radio-main-label">
              Выберите тип:
              <br />
              <label>
                <input
                  className="radio-button"
                  type="radio"
                  name="type"
                  required
                  value="0"
                  onChange={event => setAuction(event.target.value)}
                />{" "}
                объявление
              </label>
              <br />
              <label>
                <input
                  className="radio-button"
                  type="radio"
                  name="type"
                  required
                  value="1"
                  onChange={event => setAuction(event.target.value)}
                />{" "}
                аукцион
              </label>
              <br />
            </label>
          </div>
          <input
            className="submit-button"
            type="submit"
            value="Создать объявление"
            name="button"
            onClick={onSubmit}
          />
        </form>
      </section>
      <div>
        {isModalOpen && (
          <Modal toggleModal={() => toggleModal(false)} isError={true}>
            <Message errorText={errorText} errorCode={errorCode} needAdditional={true}/>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default AdvertCreate;
