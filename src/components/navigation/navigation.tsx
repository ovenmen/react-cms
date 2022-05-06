import React from 'react';
import { Link } from 'react-router-dom';

import { NavigationStyled } from './navigation.style';

export function Navigation() {

    return (
        <NavigationStyled>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Домашняя</Link>
                    </li>
                    <li>
                        <Link to="/about">О сайте</Link>
                    </li>
                </ul>
            </nav>
        </NavigationStyled>
    );
}