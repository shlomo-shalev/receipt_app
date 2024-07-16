const localStorage = (typeof window !== 'undefined' && window.localStorage) ? window.localStorage : {
    getItem: () => null,
    setItem: () => null,
    removeItem: () => null,
};

export default localStorage;