import manifest from '@neos-project/neos-ui-extensibility';
import EmojiEditor from './EmojiEditor';

manifest('JvMTECH.Emoji:EmojiEditor', {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');
    editorsRegistry.set('JvMTECH.Emoji/EmojiEditor', {
        component: EmojiEditor
    });
});
