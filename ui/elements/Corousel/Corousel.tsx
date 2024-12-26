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
        scrollAmount = 100,
        iconPosition = 'right',
        leftIcon = 'chevron-left',
        rightIcon = 'chevron-right',
        onLeftClick = () => {},
        onRightClick = () => {},
        onScrollEnd = () => {},
        gap = 12,
        style = {},
    } = props;

    const headerRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [translateX, setTranslateX] = useState(0);
    const [leftButtonDisabled, setLeftButtonDisabled] = useState(false);
    const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

    const handleControlClick = (direction: 'left' | 'right') => {
        const scrollableWidth = containerRef.current?.scrollWidth;
        const visibleWidth = containerRef.current?.clientWidth;

        const headerLeft = headerRef.current?.getBoundingClientRect().left;
        const containerLeft =
            containerRef.current?.getBoundingClientRect().left;
        const currentLeft = containerLeft - headerLeft;

        if (direction === 'left') {
            const newLeft = Math.min(0, currentLeft + scrollAmount);
            setTranslateX(newLeft);
            onLeftClick();
        } else if (direction === 'right') {
            const newLeft = Math.max(
                -scrollableWidth + visibleWidth,
                currentLeft - scrollAmount
            );
            setTranslateX(newLeft);
            onRightClick();
        }
    };

    useEffect(() => {
        setLeftButtonDisabled(translateX === 0);
        const scrolledToEnd =
            translateX <=
            containerRef.current?.clientWidth -
                containerRef.current?.scrollWidth;
        setRightButtonDisabled(scrolledToEnd);
        if (scrolledToEnd) {
            onScrollEnd();
        }
    }, [
        translateX,
        containerRef.current?.clientWidth,
        containerRef.current?.scrollWidth,
    ]);

    return (
        <StyledCorouselContainer style={style}>
            <StyledCorouselHeaderRow
                ref={headerRef}
                $iconPosition={iconPosition}
            >
                <StyledCorouselTitle>{title}</StyledCorouselTitle>
                <StyledCorouselControls>
                    <NSIconButton
                        size="small"
                        icon={leftIcon}
                        variant="tertiary"
                        style={{
                            width: '10px',
                            borderRadius: '50%',
                        }}
                        onClick={() => handleControlClick('left')}
                        disabled={leftButtonDisabled}
                    />
                    <NSIconButton
                        size="small"
                        icon={rightIcon}
                        variant="tertiary"
                        style={{
                            width: '10px',
                            borderRadius: '50%',
                        }}
                        onClick={() => handleControlClick('right')}
                        disabled={rightButtonDisabled}
                    />
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
