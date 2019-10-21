import {createStore} from 'redux'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

export default function initStore() {
    const store = {};

    return createStore(reducers, store, composeWithDevTools())
}