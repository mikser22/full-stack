import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/test_advert.jpg";
import photo from "../../images/noavatar.jpg";
import { BASEURL } from "../../config";
import AdvertCard from "../AdvertCard";

interface IProfile {
  fetchAdverts: (adverts: Item[]) => void;
  advertList: number[];
  match: {
    params: {
      id: number;
    };
  };
}

const Profile: React.FC<IProfile> = props => {
  const { fetchAdverts, advertList } = props;
  const [user, setUser] = React.useState();


  React.useEffect(() => {
    void itemsGet(props.match.params.id);
    void userGet(props.match.params.id);
  }, [props.match.params.id]);

  const itemsGet = React.useCallback(async id => {
    const response = await fetch(`${BASEURL}api/userproducts?id=${id}`);
    const data = await response.json();
    console.log(data);
    fetchAdverts(data);
  }, []);

  const userGet = React.useCallback(async id => {
    const response = await fetch(`${BASEURL}api/users/${id}`);
    const data = await response.json();
    console.log(data);
    setUser(data);
  }, []);
  if(!user){
    return <div>loading</div>;
  }
  if(!props.match.params.id){
    return null
  }
  return (
    <div className="container">
      <div className="content">
        <h2>Профиль {user.username}</h2>
        <div className="profile">
          <img src={photo} alt="аватар" />
          <div className="profile-info">
            <span className="profile-details">Имя: </span>
            <span className="profile-details-answer"> {user.first_name}</span>
            <br />
            <span className="profile-details">Фамилия: </span>
            <span className="profile-details-answer"> {user.last_name}</span>
            <br />
            <span className="profile-details">e-mail: </span>
            <span className="profile-details-answer">
              {user.email}
            </span>
            <br />
            <br />
          </div>
        </div>
      </div>
      <h3>Все объявления пользователя:</h3>
      <div className="profile-other-adverts">
        {advertList.map((advertId, index) => (
          <AdvertCard key={index} advertId={advertId} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
