import React, { useState, useEffect } from 'react';
import AuthForm from '../components/AuthForm';
import SearchBar from '../components/SearchBar';
import GifGallery from '../components/GifGallery';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logout } from '../services/firebaseConfig';

const Home = () => {
    const [user, setUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            setUser(null); // Update the user state to null on successful logout
        } catch (error) {
            console.error('Logout Error:', error);
            // Handle logout error (e.g., show an error message)
        }
    };

    return (
        <div>
            <h1>GIF Search App</h1>
            {!user ? (
                <AuthForm />
            ) : (
                <>
                    <button onClick={handleLogout}>Log Out</button>
                    <SearchBar onSearch={setSearchTerm} />
                    <GifGallery searchTerm={searchTerm} />
                </>
            )}
        </div>
    );
};

export default Home;