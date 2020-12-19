import { getItem } from '../localStorage/localStorage';

export const haveLogging = (): boolean => {
    return getItem('token') !== '';
}