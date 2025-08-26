/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { ReactNode, useState } from 'react';
import { NSIcon, NSTooltip } from 'ui/index';

import { ColorRenderer } from '../ColorRenderer';
import {
    StyledTokenBlock,
    StyledTokenBlockCopiedContainer,
} from './index.styles';

interface TokenBlockProps {
    copy?: boolean;
    showCopiedOverlay?: boolean;
    color?: string;
    children?: ReactNode;
    contentToCopy?: ReactNode;
    background?: string;
}

const TokenBlock = ({
    copy = false,
    showCopiedOverlay = false,
    color = null,
    children,
    contentToCopy,
    background,
}: TokenBlockProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard
                .writeText((contentToCopy || children) as string)
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

    const WrapperComponent = copy
        ? ({ children: _children }: any) => (
              <NSTooltip
                  content={
                      copied
                          ? showCopiedOverlay
                              ? null
                              : 'Copied!'
                          : 'Click to copy'
                  }
              >
                  {_children}
              </NSTooltip>
          )
        : React.Fragment;

    return (
        <WrapperComponent>
            <StyledTokenBlock
                background={background}
                interactive={copy}
                onClick={copy ? handleCopy : null}
            >
                {color && <ColorRenderer color={color} size="small" />}
                {children}
                {showCopiedOverlay && (
                    <StyledTokenBlockCopiedContainer copied={copied}>
                        <NSIcon name="check" color="var(--text-emphasis-success-default, #007a51)" />
                        Copied!
                    </StyledTokenBlockCopiedContainer>
                )}
            </StyledTokenBlock>
        </WrapperComponent>
    );
};

export default TokenBlock;
