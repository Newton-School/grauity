import React, { useEffect, useRef, useState } from 'react';
import { NSIconButton } from 'ui/index';

import {
    StyledCorouselContainer,
    StyledCorouselControls,
    StyledCorouselHeaderRow,
    StyledCorouselItem,
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

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [translateX, setTranslateX] = useState(0);
    const [leftButtonDisabled, setLeftButtonDisabled] = useState(false);
    const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

    const handleControlClick = (direction: 'left' | 'right') => {
        const scrollableWidth = containerRef.current?.scrollWidth;
        const visibleWidth = containerRef.current?.clientWidth;
        const currentLeft = containerRef.current?.getBoundingClientRect().left;

        if (direction === 'left') {
            const newLeft = Math.min(0, currentLeft + visibleWidth);
            setTranslateX(newLeft);
            onLeftClick();
        } else {
            const newLeft = Math.max(
                -scrollableWidth + visibleWidth,
                currentLeft - visibleWidth
            );
            setTranslateX(newLeft);
            onRightClick();
        }
    };

    useEffect(() => {
        setLeftButtonDisabled(translateX === 0);
        setRightButtonDisabled(
            translateX <=
                containerRef.current?.clientWidth -
                    containerRef.current?.scrollWidth
        );
    }, [
        translateX,
        containerRef.current?.clientWidth,
        containerRef.current?.scrollWidth,
    ]);

    return (
        <StyledCorouselContainer style={style}>
            <StyledCorouselHeaderRow>
                <StyledCorouselTitle>{title}</StyledCorouselTitle>
                <StyledCorouselControls>
                    {leftIcon || (
                        <NSIconButton
                            size="small"
                            icon="chevron-left"
                            variant="tertiary"
                            style={{
                                width: '10px',
                                borderRadius: '50%',
                            }}
                            onClick={() => handleControlClick('left')}
                            disabled={leftButtonDisabled}
                        />
                    )}
                    {rightIcon || (
                        <NSIconButton
                            size="small"
                            icon="chevron-right"
                            variant="tertiary"
                            style={{
                                width: '10px',
                                borderRadius: '50%',
                            }}
                            onClick={() => handleControlClick('right')}
                            disabled={rightButtonDisabled}
                        />
                    )}
                </StyledCorouselControls>
            </StyledCorouselHeaderRow>
            <StyledCorouselItemsContainer
                ref={containerRef}
                $gap={gap}
                $translateX={translateX}
            >
                {items.map((item) => (
                    <StyledCorouselItem>{item}</StyledCorouselItem>
                ))}
            </StyledCorouselItemsContainer>
        </StyledCorouselContainer>
    );
};

export default Corousel;
