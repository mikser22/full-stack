import {normalize , schema} from 'normalizr'

const advertSchema = new schema.Entity('advert');

export function advertsNormalize(adverts: Item[]) {
    return normalize(adverts, [advertSchema])
}

export function advertNormalize(adverts: Item) {
    return normalize(adverts, advertSchema)
}
