import { createContext } from 'react';

const accessToken: any = localStorage.getItem('accessToken');
const visitor: any = localStorage.getItem('visitor');

const AppContext = createContext({
    accessToken: accessToken ? accessToken : '',
    visitor: visitor ? JSON.parse(visitor) : {},
});

export { AppContext };
