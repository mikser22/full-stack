import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../images/svarit-garazh.jpg";
import Modal from "../Modal/Modal";
import AdvertUpdate from "../AdvertUpdate";
import { BASEURL } from "../../config";
import Auction from "../Auction";

interface AdvertPageProps {
  match: {
    params: {
      id: number;
    };
  };
  advert: Item;
  deleteAdvert: (advert: number) => void;
  fetchAdvert: (advert: Item) => void;
}

const AdvertPage: React.FC<AdvertPageProps> = props => {
  const { deleteAdvert, advert, fetchAdvert } = props;
  const [isModalOpen, toggleModal] = React.useState();

  const headers = {} as any;
  const token = window.localStorage.getItem("access");

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  useEffect(() => {
    void itemGet();
  }, []);

  const itemGet = React.useCallback(async () => {
    if (!advert) {
      const response = await fetch(
        `${BASEURL}api/products/` + props.match.params.id,
        { headers }
      );
      const data = await response.json();
      console.log(data)
      fetchAdvert(data);
    }
  }, []);
  const deleting = React.useCallback(async event => {
    event.preventDefault();
    deleteAdvert(props.match.params.id);
    const response = await fetch(
      `${BASEURL}api/products/${props.match.params.id}/`,
      {
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: props.match.params.id })
      }
    );
    window.history.back();
  }, []);
  if (!advert) {
    return <div>loading</div>;
  }
  const ownerUserName = advert.owner.username;
  const currentUserName = window.localStorage.getItem('user')
  const isOwner = ownerUserName == currentUserName;
  console.log("cur", currentUserName, "owner", ownerUserName)
  return (
    <div className="container">
      <h2>{advert.name}</h2>
      <div className="advert">
        <div className="desc-block">
          <img src={advert.image} alt="kek" />
          <div className="advert-description">
            <h2>Описание</h2>
            <p>{advert.description}</p>
            {isOwner && <Link to="/" className={"delete-button"} onClick={deleting}>
              x
            </Link>}
          </div>
        </div>
        <div className="advert-info">
          {!advert.on_auction ? (
            <div className="main-advert-information">
              <span>Цена: </span>
              <span>{advert.price}</span>
              <br />
            </div>
          ) : (
            <Auction
              currentPrice={advert.price}
              lastPersonId={2}
              startPriсe={100}
              endDate={advert.creation_date}
            />
          )}
          <div className="main-advert-information">
            <br />
            <span>Контакты: </span>
            <Link to="/profile">Профиль пользователя</Link>
            <br />
            <br />
          </div>
          {isOwner && <button className="buy-button" onClick={() => toggleModal(true)}>
            Изменить
          </button>}
          {isModalOpen && (
            <Modal toggleModal={() => toggleModal(false)}>
              <AdvertUpdate
                toggleModal={toggleModal}
                id={props.match.params.id}
              />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvertPage;
