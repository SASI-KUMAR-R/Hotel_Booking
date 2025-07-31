import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    userType: null 
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userType = localStorage.getItem('userType');
    setAuthState({
      isLoggedIn: loggedIn,
      userType: userType
    });
  }, []);

  const login = (userType) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userType', userType);
    setAuthState({
      isLoggedIn: true,
      userType: userType
    });
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    setAuthState({
      isLoggedIn: false,
      userType: null
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);