import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

const Header = ({ t }) => ( // eslint-disable-line react/prop-types
    <header>
        <nav>
            <ul>
                <li><Link to="/">{t('home.name')}</Link></li>
                <li><Link to="/tasks">{t('tasks.name')}</Link></li>
            </ul>
        </nav>
    </header>
);

export default translate()(Header);

