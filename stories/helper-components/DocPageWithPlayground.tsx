import {
    ArgsTable,
    Description,
    Primary,
    PRIMARY_STORY,
    Stories,
    Subtitle,
    Title,
} from '@storybook/addon-docs';
import PropTypes from 'prop-types';
import React from 'react';
import { Playground } from 'storybook-addon-code-editor';

import * as grauity from '../../ui';
import { GrauityInit } from '../../ui';

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
            <Stories />
            <GrauityInit>
                <Playground
                    code={exampleSourceCode}
                    availableImports={{
                        '@newtonschool/grauity': grauity,
                    }}
                    height="560px"
                    onCreateEditor={(editor, monaco) => {
                        editor?.getModel()?.updateOptions({ tabSize: 2 });
                        monaco.editor.setTheme('vs-dark');
                    }}
                />
            </GrauityInit>
        </>
    );
}

DocPageWithPlayground.propTypes = {
    exampleSourceCode: PropTypes.string.isRequired,
};
