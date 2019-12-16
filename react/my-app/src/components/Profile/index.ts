import {connect} from 'react-redux'
import {fetchAdverts} from '../../actions/adverts'
import Profile from "./Profile";

function mapStateToProps(state: any) {
    return {
        advertList: state.adverts.advertList,
        adverts: state.adverts.adverts,
    }
}

const mapDispatchToProps =  {
    fetchAdverts
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)