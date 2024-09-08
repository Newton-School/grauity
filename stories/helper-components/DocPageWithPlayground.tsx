import {
    Description,
    Primary,
    // PRIMARY_STORY,
    // PureArgsTable,
    Stories,
    Subtitle,
    Title,
} from '@storybook/addon-docs';
import PropTypes from 'prop-types';
import React from 'react';
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
            {/* <PureArgsTable /> */}
            <Stories />
            <Playground
                code={exampleSourceCode}
                availableImports={{
                    '@newtonschool/grauity': grauity,
                }}
                height="560px"
                modifyEditor={(monaco, editor) => {
                    editor?.getModel()?.updateOptions({ tabSize: 2 });
                    monaco.editor.setTheme('vs-dark');
                }}
            />
        </>
    );
}

DocPageWithPlayground.propTypes = {
    exampleSourceCode: PropTypes.string.isRequired,
};
