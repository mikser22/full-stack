import {connect} from 'react-redux'
import AdvertPage from "./AdvertPage";
import {deleteAdvert} from "../../actions/adverts";

function mapStateToProps(state: any, props: any) {
    return {
        // adverts: " kek", //state.adverts.adverts[advertId]
        // id: advertId
        ...state,
        ...props
    }
}

const mapDispatchToProps =  {
    deleteAdvert
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertPage)