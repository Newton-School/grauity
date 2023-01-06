import React from 'react';
import PropTypes from 'prop-types';
import {
    ArgsTable,
    Description,
    Primary,
    PRIMARY_STORY,
    Stories,
    Subtitle,
    Title,
} from '@storybook/addon-docs';
import { Playground } from 'storybook-addon-code-editor';

import * as grauity from '../../ui';

export default function DocPageWithPlayground({
    exampleSourceCode,
}: {
    exampleSourceCode: string;
}) {
    return (
        <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
            <Playground
                code={exampleSourceCode}
                availableImports={{
                    grauity,
                }}
                height="560px"
                onCreateEditor={(editor, monaco) => {
                    editor.getModel().updateOptions({ tabSize: 2 });
                    monaco.editor.setTheme('vs-dark');
                }}
            />
            <Stories />
        </>
    );
}

DocPageWithPlayground.propTypes = {
    exampleSourceCode: PropTypes.string.isRequired,
};
