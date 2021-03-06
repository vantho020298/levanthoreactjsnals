import {GET_LIST_USER} from './types';
import axios from 'axios';
import { setItem, getItem } from '../localStorage/localStorage';
import GetUsersType from '../types/getUsers';
import Account from '../types/account';
const loginUrl = 'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/login';
const getUsersUrl = 'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/users';

export const login = (account: Account) => {
    return (dispatch: any) => {
        axios.post(`${loginUrl}`, account)
            .then(response => {
                return response.data
            })
            .then(data => {
                setItem('token', data.token)
                window.location.href = '/listusers';
            })
            .catch(error => {
                throw (error);
            });
        }
};

export const getUsers = () => {
    return (dispatch: (action: GetUsersType) => void) => {
        axios.get(`${getUsersUrl}`, {
            headers: {
              'Authorization': `Basic ${getItem('token')}` 
            }})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: GET_LIST_USER,
                    data: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};