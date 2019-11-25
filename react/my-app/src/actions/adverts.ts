import {advertNormalize, advertsNormalize} from '../schemas/adverts'
import React from "react";

export  const FETCH_ADVERTS = 'FETCH_ADVERTS';
export const FETCH_ADVERT = 'FETCH_ADVERT';
export const FETCH_NEW_ADVERT = 'FETCH_NEW_ADVERT';
export const DELETE_ADVERT = 'DELETE_ADVERT';

export function fetchAdverts(adverts: Item[]) {
    return {
        type: FETCH_ADVERTS,
        payload: advertsNormalize(adverts)
    }
}

export function fetchAdvert(advert: Item) {
    console.log(advertNormalize(advert))
    return {
        type: FETCH_ADVERT,
        payload: advertNormalize(advert)
    }
}

export function fetchNewAdvert(advert: Item) {
    return {
        type: FETCH_NEW_ADVERT,
        payload: advertNormalize(advert)
    }
}

export function deleteAdvert(id: number) {
    return {
        type: DELETE_ADVERT,
        payload: id
    }
}

