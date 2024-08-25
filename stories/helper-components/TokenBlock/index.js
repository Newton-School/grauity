/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { NSButton } from '../../../ui';
import { StyledHideOnPrintWrapper, StyledTokenBlock } from './index.styles';

const TokenBlock = ({ copy, children }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard
                .writeText(children)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 3000);
                })
                .catch((err) => {
                    console.error('Failed to copy token: ', err);
                });
        } else {
            console.error('Clipboard API not supported');
        }
    };

    return (
        <StyledTokenBlock>
            {children}
            {copy && (
                <StyledHideOnPrintWrapper>
                    <NSButton
                        onClick={handleCopy}
                        size="small"
                        variant="tertiary"
                        icon={copied ? 'check' : 'code'}
                    >
                        {copied ? 'copied!' : 'copy'}
                    </NSButton>
                </StyledHideOnPrintWrapper>
            )}
        </StyledTokenBlock>
    );
};

TokenBlock.propTypes = {
    copy: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

TokenBlock.defaultProps = {
    copy: false,
};

export default TokenBlock;
