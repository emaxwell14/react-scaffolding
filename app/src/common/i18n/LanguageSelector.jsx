import React, { Component } from 'react';
import { func } from 'prop-types';
import { translate } from 'react-i18next';
import i18n from './i18n';

const propTypes = {
    t: func,
};

@translate()
class LanguageSelector extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <button onClick={() => i18n.changeLanguage('en')}>{t('actions.languages.en')}</button>
                <button onClick={() => i18n.changeLanguage('fr')}>{t('actions.languages.fr')}</button>
            </div>
        );
    }
}

LanguageSelector.propTypes = propTypes;

export default LanguageSelector;
