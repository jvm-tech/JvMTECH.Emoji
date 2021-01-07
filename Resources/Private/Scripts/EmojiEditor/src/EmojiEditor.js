import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { neos } from '@neos-project/neos-ui-decorators';
import { Picker } from 'emoji-mart';
import './EmojiEditor.vanilla-css';

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))
export default class EmojiEditor extends PureComponent {
    static propTypes = {
        i18nRegistry: PropTypes.object,
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
    };

    handleChange = emoji => {
        this.props.commit(emoji);
    };

    render() {
        const translatedLabel = {
            search: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:search'),
            clear: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:clear'),
            notfound: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:notfound'),
            skintext: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintext'),
            categories: {
                search: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.search'),
                recent: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.recent'),
                smileys: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.smileys'),
                people: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.people'),
                nature: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.nature'),
                foods: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.foods'),
                activity: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.activity'),
                places: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.places'),
                objects: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.objects'),
                symbols: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.symbols'),
                flags: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.flags'),
                custom: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.custom')
            },
            categorieslabel: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categorieslabel'),
            skintones: {
                1: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.1'),
                2: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.2'),
                3: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.3'),
                4: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.4'),
                5: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.5'),
                6: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.6')
            }
        };
        return <Picker emoji={this.props.value && this.props.value.id ? this.props.value.id : ''} emojiSize={18} i18n={translatedLabel} onSelect={this.handleChange} title="" color="#00ADEE" theme="dark" exclude={['recent']} />;
    }
}
