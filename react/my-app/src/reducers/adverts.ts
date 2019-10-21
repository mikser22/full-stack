import {FETCH_ADVERTS} from '../actions/adverts'

const initialState: IAdvertState = {
    advertList: [],
    adverts: {}
};

export default function(state = initialState, action: IAdvertAction) {
    switch(action.type) {
        case FETCH_ADVERTS:
            return{
                adverts: action.payload.entities.advert,
                advertList: action.payload.result
            };
    }
    return state;
}