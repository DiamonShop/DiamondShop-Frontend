import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                const currentTime = Math.floor(Date.now() / 1000); // Thời gian hiện tại tính bằng giây

                if (decodedToken.exp < currentTime) {
                    localStorage.removeItem('token');
                    console.log("Token đã hết hạn và bị xóa.");
                } else {
                    setUser({
                        userId: decodedToken.sid,
                        email: decodedToken.email,
                        role: decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
                    });
                }
            } catch (error) {
                console.error("Token không hợp lệ:", error);
                localStorage.removeItem('token');
            }
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
