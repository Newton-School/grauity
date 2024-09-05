import PropTypes from 'prop-types';
import React, { ReactNode , useState } from 'react';
import NSButton from 'ui/elements/Button';

import { StyledHideOnPrintWrapper, StyledTokenBlock } from './index.styles';

interface TokenBlockProps {
    copy?: boolean;
    children: ReactNode;
}

const TokenBlock = ({ copy, children }: TokenBlockProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard
                .writeText(children as string)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 3000);
                })
                .catch((err) => {
                    // eslint-disable-next-line no-console
                    console.error('Failed to copy token: ', err);
                });
        } else {
            // eslint-disable-next-line no-console
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
