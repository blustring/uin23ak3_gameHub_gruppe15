import { useEffect } from 'react';

const useAuthentication = () => {
  useEffect(() => {
    const isLoggedIn = () => {
      const user = localStorage.getItem('user');
      return user !== null;
    };

    if (!isLoggedIn()) {
      // Redirect to the login page or perform any other action
      window.location.href = '/';
    }
  }, []);
};

export default useAuthentication;
