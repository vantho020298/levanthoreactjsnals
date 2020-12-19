import { getItem } from '../localStorage/localStorage';

export const isLogin = () => {
    return getItem('token') !== undefined;
}