import React from 'react';
import { NSIconButton } from 'ui/index';

import {
    StyledCorouselContainer,
    StyledCorouselControls,
    StyledCorouselHeaderRow,
    StyledCorouselItemsContainer,
    StyledCorouselTitle,
} from './Corousel.styles';
import { CorouselProps } from './types';

const Corousel = (props: CorouselProps) => {
    const {
        items = [],
        title = null,
        leftIcon = null,
        rightIcon = null,
        onLeftClick = () => {},
        onRightClick = () => {},
        gap = 12,
        style = {},
    } = props;

    const handleControlClick = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            onLeftClick();
        } else {
            onRightClick();
        }
    };

    return (
        <StyledCorouselContainer style={style}>
            <StyledCorouselHeaderRow>
                <StyledCorouselTitle>{title}</StyledCorouselTitle>
                <StyledCorouselControls>
                    {leftIcon}
                    {!leftIcon && (
                        <NSIconButton
                            size="small"
                            icon="chevron-left"
                            variant="tertiary"
                            style={{
                                width: '10px',
                                borderRadius: '50%',
                            }}
                            onClick={() => handleControlClick('left')}
                        />
                    )}
                    {rightIcon}
                    {!rightIcon && (
                        <NSIconButton
                            size="small"
                            icon="chevron-right"
                            variant="tertiary"
                            style={{
                                width: '10px',
                                borderRadius: '50%',
                            }}
                            onClick={() => handleControlClick('right')}
                        />
                    )}
                </StyledCorouselControls>
            </StyledCorouselHeaderRow>
            <StyledCorouselItemsContainer $gap={gap}>
                {items}
            </StyledCorouselItemsContainer>
        </StyledCorouselContainer>
    );
};

export default Corousel;
