import React, { Component } from 'react';
import { func } from 'prop-types';
import { translate } from 'react-i18next';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu,DropdownItem } from 'reactstrap';
import i18n from './i18n';

const propTypes = {
    t: func,
};

@translate()
class LanguageSelector extends Component {
    render() {
        const { t } = this.props;
        return (
            <UncontrolledButtonDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {t('language')}
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem onClick={() => i18n.changeLanguage('en')}>
                        {t('actions.languages.en')}
                    </DropdownItem>
                    <DropdownItem onClick={() => i18n.changeLanguage('fr')}>
                        {t('actions.languages.fr')}
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        );
    }
}

LanguageSelector.propTypes = propTypes;

export default LanguageSelector;
