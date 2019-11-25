/// <reference types="react-scripts" />
interface Item {
    id: number,
    name: string,
    description: string,
    price: any,
    on_auction: boolean
}

interface IAdvertState {
    advertList: number[]
    adverts: {[key:number] : Item}
}

interface IAdvertAction {
    type: string
    payload: {
        result: number[],
        entities: {advert: {[key:number] : Item}}
    }
}