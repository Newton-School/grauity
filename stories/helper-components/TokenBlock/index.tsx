import React, { ReactNode, useState } from 'react';
import Button from 'ui/elements/Button';
import { NSIcon } from 'ui/index';

import {
    StyledHideOnPrintWrapper,
    StyledTokenBlock,
    StyledTokenBlockCopiedContainer,
} from './index.styles';

interface TokenBlockProps {
    copy?: boolean;
    showCopiedOverlay?: boolean;
    children?: ReactNode;
}

const TokenBlock = ({
    copy = false,
    children,
    showCopiedOverlay = false,
}: TokenBlockProps) => {
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
                    <Button
                        onClick={handleCopy}
                        size="small"
                        variant="tertiary"
                        icon={copied ? 'check' : 'code'}
                    >
                        {copied ? 'copied!' : 'copy'}
                    </Button>
                </StyledHideOnPrintWrapper>
            )}
            {showCopiedOverlay && (
                <StyledTokenBlockCopiedContainer copied={copied}>
                    <NSIcon name="check" />
                    Copied!
                </StyledTokenBlockCopiedContainer>
            )}
        </StyledTokenBlock>
    );
};

export default TokenBlock;
