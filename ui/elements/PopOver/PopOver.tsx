import React, { useEffect, useRef, useState } from 'react';

import { StyledPopOverContainer, StyledPopOverWrapper } from './PopOver.styles';
import { PopOverDirection, PopOverOffset, PopOverProps } from './types';

export default function PopOver(props: PopOverProps) {
    const {
        direction = 'bottom',
        trigger,
        children,
        autoAdjust = true,
        parentRef,
        minimumOffset = { top: 0, left: 0, right: 0, bottom: 0 },
    } = props;

    const [adjustedOffset, setAdjustedOffset] = useState<PopOverOffset | null>(
        null
    );
    const popOverRef = useRef<HTMLDivElement>(null);

    const handlePositionAdjust = (popOverDirection: PopOverDirection) => {
        const documentRect = document.body.getBoundingClientRect();
        const parent = parentRef?.current || document.body;
        const parentRect = parent.getBoundingClientRect();
        parent.style.border = '2px solid green';
        const popOverRect = popOverRef.current?.getBoundingClientRect();

        const parentTop =
            Math.max(parentRect.top, documentRect.top) + minimumOffset.top;
        const parentLeft =
            Math.max(parentRect.left, documentRect.left) + minimumOffset.left;
        const parentRight =
            Math.min(parentRect.right, documentRect.right) -
            minimumOffset.right;
        const parentBottom =
            Math.min(parentRect.bottom, documentRect.bottom) -
            minimumOffset.bottom;

        // Just for visualizing the boundaries of popover
        const newRect = document.createElement('div');
        newRect.style.position = 'absolute';
        newRect.style.top = `${parentTop}px`;
        newRect.style.left = `${parentLeft}px`;
        newRect.style.width = `${parentRight - parentLeft}px`;
        newRect.style.height = `${parentBottom - parentTop}px`;
        newRect.style.border = '2px solid blue';
        document.body.appendChild(newRect);
    };

    useEffect(() => {
        if (autoAdjust && popOverRef.current) {
            handlePositionAdjust(direction);
            window.addEventListener('resize', () =>
                handlePositionAdjust(direction)
            );
            return () =>
                window.removeEventListener('resize', () =>
                    handlePositionAdjust(direction)
                );
        }
        return () => {};
    }, [direction, autoAdjust]);

    return (
        <>
            <StyledPopOverWrapper>
                {trigger}
                <StyledPopOverContainer
                    ref={popOverRef}
                    $offset={adjustedOffset}
                    $direction={direction}
                >
                    {children}
                </StyledPopOverContainer>
            </StyledPopOverWrapper>
        </>
    );
}
