import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <Navbar />
            <div className='content'>
                {/* Pages' content */}
                { children }
            </div>
            <footer>
                <p>Copyright 2022. Gatsby Portfolio.</p>
            </footer>
        </div>
    )
}
