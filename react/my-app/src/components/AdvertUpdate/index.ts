import {connect} from 'react-redux'
import AdvertUpdate from "./AdvertUpdate";
import {fetchAdvert} from "../../actions/adverts";

function mapStateToProps(state: any, props: any) {
    return {
        ...state,
        ...props,
        advert: state.adverts.adverts[props.id]
    }
}

const mapDispatchToProps =  {
    fetchAdvert
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertUpdate)