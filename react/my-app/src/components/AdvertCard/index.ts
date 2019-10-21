import {connect} from 'react-redux'
import AdvertCard from "./AdvertCard";

function mapStateToProps(state: any, props: any) {
    const {advertId} = props
    return {
        adverts: state.adverts.adverts[advertId]
    }
}

export default connect(mapStateToProps)(AdvertCard)