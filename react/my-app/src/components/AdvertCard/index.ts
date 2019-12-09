import {connect} from 'react-redux'
import AdvertCard from "./AdvertCard";
import {isUndefined} from "util";

function mapStateToProps(state: any, props: any) {
    const {advertId} = props
    if(isUndefined(state.adverts.adverts)){
        return {adverts: null}
    }
    return {
        adverts: state.adverts.adverts[advertId]
    }
}

export default connect(mapStateToProps)(AdvertCard)