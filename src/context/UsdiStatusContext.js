import {useContext , createContext} from 'react';

export const UsdiStatusContext = createContext({
   usdiStatus: '',
   setUsdiStatus: () => {}
}) 

export const useUsdiStatusContext = () => useContext(UsdiStatusContext);