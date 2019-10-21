import {advertsNormalize} from '../schemas/adverts'

export  const FETCH_ADVERTS = 'FETCH_ADVERTS';

export function fetchAdverts(adverts: Item[]) {
    return {
        type: FETCH_ADVERTS,
        payload: advertsNormalize(adverts)
    }
}