import { GET_LIST_USER } from '../actions/types';

export default function listUsers(state = [], action) {
    switch (action.type) {
        case GET_LIST_USER:
            return action.data;
        default:
            return state;
    }
}