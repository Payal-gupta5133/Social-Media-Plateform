import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:5500/api/auth/login', { email, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    setUser(jwt_decode(token));
  };

  const register = async (username, email, password) => {
    const response = await axios.post('http://localhost:5500/api/auth/register', { username, email, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    setUser(jwt_decode(token));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
