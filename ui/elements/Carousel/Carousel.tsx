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
        headerGap = 12,
        gap = 12,
        style = {},
        className = '',
    } = props;

    const headerRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // const [translateX, setTranslateX] = useState(0);
    const [leftButtonDisabled, setLeftButtonDisabled] = useState(false);
    const [rightButtonDisabled, setRightButtonDisabled] = useState(false);
    const [showIcons, setShowIcons] = useState(true);

    const handleControlClick = (direction: 'left' | 'right') => {
        const container = containerRef.current;
        if (!container) return;
    
        // Determine how much to scroll
        const scrollAmountPixels = fullWidthItems
            ? container.clientWidth + gap
            : scrollAmount;
    
        // Set scroll direction
        const scrollValue = direction === 'left' ? -scrollAmountPixels : scrollAmountPixels;

        console.log('Button clicked:', direction, 'scrollValue:', scrollValue);
    
        // Trigger native smooth scrolling
        container.scrollBy({
            left: scrollValue,
            behavior: 'smooth',
        });
    
        // Call respective callback
        if (direction === 'left') {
            onLeftClick();
        } else {
            onRightClick();
        }
    };
    

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
    
        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;
    
            const atStart = scrollLeft <= 0;
            const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;

            console.log('Scroll event:', {scrollLeft, scrollWidth, clientWidth, atStart, atEnd});
    
            setLeftButtonDisabled(atStart);
            setRightButtonDisabled(atEnd);
    
            if (atEnd) {
                onScrollEnd();
            }
        };
    
        // Attach scroll listener
        container.addEventListener('scroll', handleScroll);
    
        // Initial check
        handleScroll();
    
        // Cleanup
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [onScrollEnd]);
    

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
            >
                <StyledCarouselTitle>{title}</StyledCarouselTitle>
                {showIcons && (
                    <StyledCarouselControls $iconGap={iconGap}>
                        <IconButton
                            size="small"
                            icon={leftIcon}
                            variant="secondary"
                            color="neutral"
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
                            variant="secondary"
                            color="neutral"
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
