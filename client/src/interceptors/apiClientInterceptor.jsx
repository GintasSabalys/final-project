import { useEffect } from 'react';

const ApiClientInterceptor = ({ client }) => {
  useEffect(() => {
    client.interceptors.request.use((req) => {
      if (!req) return req;
      req.headers['auth-token'] = localStorage.getItem('jwt'); 
       return req;
     });
  }, [client])


  return null;
}

export default ApiClientInterceptor;