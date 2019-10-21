import {connect} from 'react-redux'
import {fetchAdverts} from '../../actions/adverts'
import AdvertCard from "./AdvertCard";

function mapStateToProps(state: any, props:any) {
    const {advertId} = props;
    return {
        adverts: state.adverts.adverts[advertId]
    }
}

export default connect(mapStateToProps)(AdvertCard)
// export { default } from './Board'