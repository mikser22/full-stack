import {FETCH_ADVERTS} from '../actions/adverts'


const initialState = {
    adverts: []
};

interface IAdvertAction {
    type: string
    payload: any
}

export default function(state = initialState, action: IAdvertAction) {
    switch(action.type) {
        case FETCH_ADVERTS:
            return{
                adverts: action.payload
            };
    }
    return state;
}