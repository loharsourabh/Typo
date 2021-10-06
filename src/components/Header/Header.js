import './Header.css';
import React, {useLayoutEffect, useRef} from 'react';
import {Link} from 'react-router-dom';


function Header() {
    const logo = useRef();

    useLayoutEffect(() => {
        window.addEventListener('load', event => {
            logo.current.classList.add('animate');
        });
    }, []);

    return (
        <div className='header'>
            <header>
                <Link to='/' className='logo_link'>
                    <div className='logo' ref={logo}>
                        <span className='square'>T</span>
                        <span className='square'>Y</span>
                        <span className='square'>P</span>
                        <span className='square'>O</span>
                    </div>
                </Link>
            </header>
        </div>  
    );
}
    
export default Header;