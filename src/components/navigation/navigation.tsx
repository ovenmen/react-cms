import React from 'react';
import { Link } from 'react-router-dom';

import { NavigationStyled } from './navigation.style';

export function Navigation() {

    return (
        <NavigationStyled>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                </ul>
            </nav>
        </NavigationStyled>
    );
}