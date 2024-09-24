import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { GAP_BETWEEN_TRIGGER_AND_POPOVER } from './constants';
import { StyledPopOverContainer } from './PopOver.styles';
import { PopOverDirection, PopOverOffset, PopOverProps } from './types';

export default function PopOver(props: PopOverProps) {
    const {
        isOpen = false,
        direction = 'bottom',
        triggerRef,
        children,
        autoAdjust = true,
        parentRef,
        minimumOffset = { top: 0, left: 0, right: 0, bottom: 0 },
    } = props;

    const [adjustedOffset, setAdjustedOffset] = useState<PopOverOffset | null>(
        null
    );
    const [offsetSetOnce, setOffsetSetOnce] = useState(false);

    const popOverRef = useRef<HTMLDivElement>(null);

    const calculateOffset = (
        popOverDirection: PopOverDirection
    ): PopOverOffset => {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const popOverRect = popOverRef.current.getBoundingClientRect();

        if (popOverDirection === 'top') {
            return {
                top:
                    triggerRect.top -
                    popOverRect.height -
                    GAP_BETWEEN_TRIGGER_AND_POPOVER,
                left:
                    triggerRect.left +
                    triggerRect.width / 2 -
                    popOverRect.width / 2,
            };
        }
        if (popOverDirection === 'right') {
            return {
                top:
                    triggerRect.top +
                    triggerRect.height / 2 -
                    popOverRect.height / 2,
                left:
                    triggerRect.left +
                    triggerRect.width +
                    GAP_BETWEEN_TRIGGER_AND_POPOVER,
            };
        }
        if (popOverDirection === 'bottom') {
            return {
                top:
                    triggerRect.top +
                    triggerRect.height +
                    GAP_BETWEEN_TRIGGER_AND_POPOVER,
                left:
                    triggerRect.left +
                    triggerRect.width / 2 -
                    popOverRect.width / 2,
            };
        }
        if (popOverDirection === 'left') {
            return {
                top:
                    triggerRect.top +
                    triggerRect.height / 2 -
                    popOverRect.height / 2,
                left:
                    triggerRect.left -
                    popOverRect.width -
                    GAP_BETWEEN_TRIGGER_AND_POPOVER,
            };
        }
        return {
            top:
                triggerRect.top +
                triggerRect.height +
                GAP_BETWEEN_TRIGGER_AND_POPOVER,
            left:
                triggerRect.left +
                triggerRect.width / 2 -
                popOverRect.width / 2,
        };
    };

    const handlePositionAdjust = (popOverDirection: PopOverDirection) => {
        const documentRect = document.body.getBoundingClientRect();
        const parent = parentRef?.current || document.body;
        const parentRect = parent.getBoundingClientRect();
        parent.style.border = '2px solid green';
        const popOverRect = popOverRef.current?.getBoundingClientRect();
        const triggerRect = triggerRef.current?.getBoundingClientRect();

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

        // New Offset
        let top = adjustedOffset?.top;
        let left = adjustedOffset?.left;

        if (popOverDirection === 'top') {
            if (popOverRect.top < parentTop) {
                top =
                    triggerRect.top +
                    triggerRect.height +
                    GAP_BETWEEN_TRIGGER_AND_POPOVER;
            }
            if (popOverRect.left < parentLeft) {
                left = parentLeft;
            }
            if (popOverRect.right > parentRight) {
                left = parentRight - popOverRect.width;
            }
        }

        if (popOverDirection === 'right') {
            if (popOverRect.right > parentRight) {
                left =
                    triggerRect.left -
                    popOverRect.width -
                    GAP_BETWEEN_TRIGGER_AND_POPOVER;
            }
            if (popOverRect.top < parentTop) {
                top = parentTop;
            }
            if (popOverRect.bottom > parentBottom) {
                top = parentBottom - popOverRect.height;
            }
        }

        if (popOverDirection === 'bottom') {
            if (popOverRect.bottom > parentBottom) {
                top =
                    triggerRect.top -
                    popOverRect.height -
                    GAP_BETWEEN_TRIGGER_AND_POPOVER;
            }
            if (popOverRect.left < parentLeft) {
                left = parentLeft;
            }
            if (popOverRect.right > parentRight) {
                left = parentRight - popOverRect.width;
            }
        }

        if (popOverDirection === 'left') {
            if (popOverRect.left < parentLeft) {
                left = triggerRect.right + GAP_BETWEEN_TRIGGER_AND_POPOVER;
            }
            if (popOverRect.top < parentTop) {
                top = parentTop;
            }
            if (popOverRect.bottom > parentBottom) {
                top = parentBottom - popOverRect.height;
            }
        }

        setAdjustedOffset({
            top: Math.max(parentTop, top),
            left: Math.max(parentLeft, left),
        });
        setOffsetSetOnce(true);
    };

    useEffect(() => {
        if (isOpen && triggerRef && triggerRef.current) {
            const offset = calculateOffset(direction);
            setAdjustedOffset(offset);
        }
    }, [isOpen, direction]);

    useEffect(() => {
        if (isOpen && autoAdjust && adjustedOffset && !offsetSetOnce) {
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
    }, [isOpen, autoAdjust, adjustedOffset, direction]);

    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <StyledPopOverContainer ref={popOverRef} $offset={adjustedOffset}>
            {children}
        </StyledPopOverContainer>,
        document.body
    );
}
