import { getItem } from '../localStorage/localStorage';

export const isLogin = (): boolean => {
    return getItem('token') !== '';
}