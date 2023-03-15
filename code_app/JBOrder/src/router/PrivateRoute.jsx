import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {
    
    const { pathname, search } = useLocation();
    
    const lastPath = pathname + search;    
    localStorage.setItem('lastPath', lastPath );    
    return children     
}
