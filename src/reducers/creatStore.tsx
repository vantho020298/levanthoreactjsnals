import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '.';

const createNewStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}

export default createNewStore;