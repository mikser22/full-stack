import {connect} from 'react-redux'
import {fetchAdverts} from '../../actions/adverts'
import Board from "./Board";

function mapStateToProps(state: any) {
    return {
        advertList: state.adverts.adverts
    }
}

const mapDispatchToProps =  {
    fetchAdverts
};

export default connect(mapStateToProps, mapDispatchToProps)(Board)