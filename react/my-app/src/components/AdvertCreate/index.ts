import {connect} from 'react-redux'
import AdvertCreate from "./AdvertCreate";
import {fetchNewAdvert} from "../../actions/adverts";

function mapStateToProps(state: any, props: any) {
    return {}
}

const mapDispatchToProps =  {
    fetchNewAdvert
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertCreate)