import {
    ADD_MORE_PRODUCT,
    ADD_TO_CART,
    REMOVE_PRODUCT
} from './types.js';
import axios from 'axios';
const apiUrl = 'https://tiki.vn/api/v2/widget/deals/mix?page=';
const loginUrl = 'http://localhost:3001/login';
let page = 1;

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
};

export const removeProduct = deal_id => {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            deal_id
        }
    }
}

export const moreProduct = () => {
    return (dispatch) => {
        axios.get(`${apiUrl + page++}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: ADD_MORE_PRODUCT,
                    payload: data.data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const login = (account, password) => {
    return (dispatch) => {
        axios.post(`${loginUrl}`, {account, password})
            .then(response => {
                return response.data
            })
            .then(data => {
                debugger
                dispatch({
                    type: ADD_MORE_PRODUCT,
                    payload: data.data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};