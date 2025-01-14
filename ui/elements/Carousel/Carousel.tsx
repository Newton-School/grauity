import React, { useEffect, useRef, useState } from 'react';

import { IconButton } from '../Button';
import {
    StyledCarouselContainer,
    StyledCarouselControls,
    StyledCarouselHeaderRow,
    StyledCarouselItem,
    StyledCarouselItemsContainer,
    StyledCarouselTitle,
} from './Carousel.styles';
import { CarouselProps } from './types';

const Carousel = (props: CarouselProps) => {
    const {
        items = [],
        title = null,
        fullWidthItems = false,
        scrollAmount = 100,
        hideIconsOnLessItems = false,
        iconPosition = 'right',
        leftIcon = 'chevron-left',
        rightIcon = 'chevron-right',
        iconGap = 12,
        onLeftClick = () => {},
        onRightClick = () => {},
        onScrollEnd = () => {},
        gap = 12,
        style = {},
        className = '',
    } = props;

    const headerRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [translateX, setTranslateX] = useState(0);
    const [leftButtonDisabled, setLeftButtonDisabled] = useState(false);
    const [rightButtonDisabled, setRightButtonDisabled] = useState(false);
    const [showIcons, setShowIcons] = useState(true);

    const handleControlClick = (direction: 'left' | 'right') => {
        const scrollableWidth = containerRef.current?.scrollWidth;
        const visibleWidth = containerRef.current?.clientWidth;

        const headerLeft = headerRef.current?.getBoundingClientRect().left;
        const containerLeft =
            containerRef.current?.getBoundingClientRect().left;
        const currentLeft = containerLeft - headerLeft;

        const actualScrollAmount = fullWidthItems
            ? visibleWidth + gap
            : scrollAmount;

        if (direction === 'left') {
            const newLeft = Math.min(0, currentLeft + actualScrollAmount);
            setTranslateX(newLeft);
            onLeftClick();
        } else if (direction === 'right') {
            const newLeft = Math.max(
                -scrollableWidth + visibleWidth,
                currentLeft - actualScrollAmount
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

    useEffect(() => {
        if (hideIconsOnLessItems) {
            const containerWidth = containerRef.current?.clientWidth;
            const scrollWidth = containerRef.current?.scrollWidth;
            if (containerWidth >= scrollWidth) {
                setShowIcons(false);
            } else {
                setShowIcons(true);
            }
        } else {
            setShowIcons(true);
        }
    }, [
        hideIconsOnLessItems,
        containerRef.current?.clientWidth,
        containerRef.current?.scrollWidth,
    ]);

    return (
        <StyledCarouselContainer style={style} className={className}>
            <StyledCarouselHeaderRow
                ref={headerRef}
                $iconPosition={iconPosition}
            >
                <StyledCarouselTitle>{title}</StyledCarouselTitle>
                {showIcons && (
                    <StyledCarouselControls $iconGap={iconGap}>
                        <IconButton
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
                        <IconButton
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
                    </StyledCarouselControls>
                )}
            </StyledCarouselHeaderRow>
            <StyledCarouselItemsContainer
                ref={containerRef}
                $gap={gap}
                $translateX={translateX}
            >
                {items.map((item) => (
                    <StyledCarouselItem $fullWidth={fullWidthItems}>
                        {item}
                    </StyledCarouselItem>
                ))}
            </StyledCarouselItemsContainer>
        </StyledCarouselContainer>
    );
};

export default Carousel;
