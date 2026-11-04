
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("shopsphere-user")) || null;
        } catch {
            return null;
        }
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("shopsphere-user", JSON.stringify(user));
        } else {
            localStorage.removeItem("shopsphere-user");
        }
    }, [user]);

    const register = (name, email, password) => {
        const users = JSON.parse(localStorage.getItem("shopsphere-users") || "[]");

        if (users.some(item => item.email === email)) {
            return { success: false, message: "Email already registered." };
        }

        const newUser = { name, email, password };

        localStorage.setItem(
            "shopsphere-users",
            JSON.stringify([...users, newUser])
        );

        setUser({ name, email });

        return { success: true };
    };

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("shopsphere-users") || "[]");

        const found = users.find(
            item => item.email === email && item.password === password
        );

        if (!found) {
            return { success: false, message: "Invalid email or password." };
        }

        setUser({ name: found.name, email: found.email });

        return { success: true };
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
