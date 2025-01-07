import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import './Navbar.css';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false); // Close menu after a selection.

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">MyApp</div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/about-us" className={!isAuthenticated ? "disabled-link" : ""} onClick={closeMenu}>
                        About Us
                    </Link>
                    <Link to="/contact-us" className={!isAuthenticated ? "disabled-link" : ""} onClick={closeMenu}>
                        Contact Us
                    </Link>
                    {!isAuthenticated ? (
                        <>
                            <Link to="/login" onClick={closeMenu}>Login</Link>
                            <Link to="/register" onClick={closeMenu}>Register</Link>
                        </>
                    ) : (
                        <button onClick={() => { logout(); closeMenu(); }}>Logout</button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
