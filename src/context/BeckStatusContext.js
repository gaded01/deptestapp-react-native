import {useContext , createContext} from 'react';

export const BeckStatusContext = createContext({
   beckStatus: '',
   setBeckStatus: () => {}
}) 

export const useBeckStatusContext = () => useContext(BeckStatusContext);