import React, { useCallback, useEffect, useRef, useState } from 'react';

import { IconButton } from '../Button';
import {
    StyledCarouselContainer,
    StyledCarouselControls,
    StyledCarouselHeaderRow,
    StyledCarouselItem,
    StyledCarouselItemsContainer,
    StyledCarouselTitle,
} from './Carousel.styles';
import { CLASSNAMES, SWIPE_THRESHOLD } from './constants';
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
        iconButtonVariant = 'secondary',
        iconButtonColor = 'neutral',
        onLeftClick = () => {},
        onRightClick = () => {},
        onScrollEnd = () => {},
        headerGap = 12,
        gap = 12,
        style = {},
        className = '',
    } = props;

    const headerRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

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

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    }, []);

    const handleSwipe = useCallback(() => {
        const swipeDistance = touchEndX.current - touchStartX.current;

        if (Math.abs(swipeDistance) < SWIPE_THRESHOLD) {
            return;
        }

        if (swipeDistance > 0 && !leftButtonDisabled) {
            // Swipe right - show previous
            handleControlClick('left');
        } else if (swipeDistance < 0 && !rightButtonDisabled) {
            // Swipe left - show next
            handleControlClick('right');
        }
    }, [leftButtonDisabled, rightButtonDisabled, handleControlClick]);

    const handleTouchEnd = useCallback(
        (e: React.TouchEvent) => {
            touchEndX.current = e.changedTouches[0].clientX;
            handleSwipe();
        },
        [handleSwipe]
    );

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
        <StyledCarouselContainer
            style={style}
            className={className}
            $headerGap={headerGap}
        >
            <StyledCarouselHeaderRow
                ref={headerRef}
                $iconPosition={iconPosition}
                className={CLASSNAMES.NS_CAROUSEL_HEADER_ROW}
            >
                <StyledCarouselTitle className={CLASSNAMES.NS_CAROUSEL_TITLE}>
                    {title}
                </StyledCarouselTitle>
                {showIcons && (
                    <StyledCarouselControls
                        className={CLASSNAMES.NS_CAROUSEL_CONTROLS}
                        $iconGap={iconGap}
                    >
                        <IconButton
                            size="small"
                            icon={leftIcon}
                            variant={iconButtonVariant}
                            color={iconButtonColor}
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
                            variant={iconButtonVariant}
                            color={iconButtonColor}
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
                className={CLASSNAMES.NS_CAROUSEL_ITEMS_CONTAINER}
                $gap={gap}
                $translateX={translateX}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                role="list"
                aria-label="Carousel items"
            >
                {items.map((item) => (
                    <StyledCarouselItem
                        className={CLASSNAMES.NS_CAROUSEL_ITEM}
                        $fullWidth={fullWidthItems}
                        role="listitem"
                    >
                        {item}
                    </StyledCarouselItem>
                ))}
            </StyledCarouselItemsContainer>
        </StyledCarouselContainer>
    );
};

export default Carousel;
