import {connect} from 'react-redux'
import AdvertPage from "./AdvertPage";
import {deleteAdvert} from "../../actions/adverts";
import {fetchAdvert} from "../../actions/adverts";

function mapStateToProps(state: any, props: any) {
    return {
        advert: state.adverts.adverts[props.match.params.id]
    }
}

const mapDispatchToProps =  {
    deleteAdvert,
    fetchAdvert
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertPage)