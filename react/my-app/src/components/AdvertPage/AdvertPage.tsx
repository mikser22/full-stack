import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../images/svarit-garazh.jpg";
import Modal from "../Modal/Modal";
import AdvertUpdate from "../AdvertUpdate";
import { BASEURL } from "../../config";
import Auction from "../Auction";
import Message from "../Message";

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
  const [isErrorModalOpen, toggleErrorModal] = React.useState();
  const [errorCode, setErrorCode] = React.useState(0);
  const [errorText, setErrorText] = React.useState("");

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
        `${BASEURL}api/products/` + props.match.params.id + "/",
        { headers }
      );
      const data = await response.json();
      console.log(data);
      fetchAdvert(data);
    }
  }, []);
  const deleting = React.useCallback(async event => {
    event.preventDefault();
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
    console.log(response);
    if (response.status == 200) {
      deleteAdvert(props.match.params.id);
      window.history.back();
    } else {
      setErrorCode(response.status);
      setErrorText(response.statusText);
      toggleErrorModal(true);
    }
  }, []);
  if (!advert) {
    return <div>loading</div>;
  }
  const ownerUserName = advert.owner.username;
  const currentUserName = window.localStorage.getItem("user");
  const isOwner = ownerUserName == currentUserName;
  return (
    <div className="container">
      <h2>{advert.name}</h2>
      <div className="advert">
        <div className="desc-block">
          <img src={advert.image} alt="kek" />
          <div className="advert-description">
            <h2>Описание</h2>
            <p>{advert.description}</p>
            {isOwner && (
              <div className={"delete-button"} onClick={deleting}>
                x
              </div>
            )}
          </div>
        </div>
        <div className="advert-info">
          {!advert.on_auction ? (
            <div className="main-advert-information">
                <br/>
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
            <Link to={`/profile/${advert.owner.id}`}>Профиль пользователя</Link>
            <br />
            <br />
          </div>
          {isOwner && (
            <button className="buy-button" onClick={() => toggleModal(true)}>
              Изменить
            </button>
          )}
          {isModalOpen && (
            <Modal toggleModal={() => toggleModal(false)} isError={false}>
              <AdvertUpdate
                toggleModal={toggleModal}
                id={props.match.params.id}
              />
            </Modal>
          )}
          {isErrorModalOpen && (
            <Modal toggleModal={() => toggleErrorModal(false)} isError={true}>
              <Message
                errorText={errorText}
                errorCode={errorCode}
                needAdditional={true}
              />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvertPage;
