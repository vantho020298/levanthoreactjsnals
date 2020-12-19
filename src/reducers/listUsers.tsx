import { GET_LIST_USER } from '../actions/types';

interface User {
    id: number;
    avatar: string;
    email: string;
    name: string;
    phone: string;
}

interface Action {
    type: string;
    data: User[]
}

export default function listUsers(state = [], action: Action): User[] {
    switch (action.type) {
        case GET_LIST_USER:
            return action.data;
        default:
            return state;
    }
}