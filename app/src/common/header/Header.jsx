import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { translate } from 'react-i18next';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import LanguageSelector from '../i18n/LanguageSelector';


const propTypes = {
    t: PropTypes.func,
};

@translate()
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    @autobind
    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { t } = this.props;
        return (
            <header>
                <nav>
                    <Navbar color="faded" light expand="md">
                        <NavbarBrand href="/">{t('title')}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/">{t('home.name')}</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/tasks">{t('tasks.name')}</Link>
                                </NavItem>
                                <LanguageSelector />
                            </Nav>
                        </Collapse>
                    </Navbar>
                </nav>
            </header>
        );
    }
}

Header.propTypes = propTypes;

export default Header;
