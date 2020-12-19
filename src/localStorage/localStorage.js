export const setItem = (itemName, data) => {
    localStorage.setItem(itemName, data);
};

export const getItem = (itemName) => {
    try {
        const data = localStorage.getItem(itemName);
        return data === null ? undefined : data;
    } catch (e) {
        return undefined;
    }
};

export const removeItem = (itemName) => {
    localStorage.removeItem(itemName);
};