import {FETCH_ADVERTS, FETCH_ADVERT, FETCH_NEW_ADVERT, DELETE_ADVERT} from '../actions/adverts'

const initialState: IAdvertState = {
    advertList: [],
    adverts: {}
};

export default function(state = initialState, action: any) {
    switch(action.type) {
        case FETCH_ADVERT:
            return {
                advertList: state.advertList,
                adverts: {
                    ...state.adverts,
                    ...action.payload.entities.advert,
                }
            };
        case FETCH_NEW_ADVERT:
            return {
                adverts: {
                    ...state.adverts,
                    ...action.payload.entities.advert,
                },
                advertList:[
                    ...state.advertList,
                    action.payload.result
                ]
            };
        case DELETE_ADVERT:
            const id = action.payload;
            for(let i = 0; i < state.advertList.length; ++i) {
                if(state.advertList[i] == id) {
                    state.advertList.splice(i, 1)
                    break;
                }
            }
            delete state.adverts[id]
            return {
                adverts: state.adverts,
                advertList: state.advertList
            }
        case FETCH_ADVERTS:
            return{
                adverts: action.payload.entities.advert,
                advertList: action.payload.result
            };

    }
    return state;
}