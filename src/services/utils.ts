export const isClient = typeof window !== 'undefined';

export const saveLocalStorage = (key: string, value: string) => {
    if (isClient) {
        localStorage.setItem(key, value)
    }
}

export const getLocalStorage = (key: string) => {
    if (isClient) {
        return localStorage.getItem(key)
    }
    return null;
}

export const clearLocalStorage = () => {
    if (isClient) {
        localStorage.removeItem("token");
    }
}

export const getToken = () => {
    if (isClient) {
        return localStorage.getItem('token');
    }
    return null;
};

export const setToken = (token: string) => {
    if (isClient) {
        localStorage.setItem('token', token);
    }
};

export const removeToken = () => {
    if (isClient) {
        localStorage.removeItem('token');
    }
};
