export const setItem = (itemName:string, data:string): void => {
    localStorage.setItem(itemName, data);
};

export const getItem = (itemName:string):string => {
    try {
        const data = localStorage.getItem(itemName);
        return data === null ? '' : data;
    } catch (e) {
        return '';
    }
};

export const removeItem = (itemName:string):void => {
    localStorage.removeItem(itemName);
};