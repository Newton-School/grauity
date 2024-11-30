import {
    arrow,
    autoUpdate,
    computePosition,
    flip,
    hide,
    offset,
    shift,
    size,
} from '@floating-ui/dom';
import React, { cloneElement, useEffect, useRef, useState } from 'react';

import { StyledTooltipArrow, StyledTooltipWrapper } from './Tooltip.styles';
import { TooltipProps } from './types';

const Tooltip = (props: TooltipProps) => {
    const {
        placement = 'top',
        fixedPositioning = false,
        content,
        config,
        hidden = false,
        hideArrow = false,
        recomputedTrigger,
        defaultOpen = false,
        children,
    } = props;
    const [showTooltip, setShowTooltip] = useState(defaultOpen);
    const floatingEl = useRef<HTMLDivElement>(null);
    const referenceEl = useRef<HTMLDivElement>(null);
    const arrowEl = useRef<HTMLDivElement>(null);

    const showTooltipHandler = () => {
        setShowTooltip(true);
    };

    const hideTooltipHandler = () => {
        setShowTooltip(false);
    };

    useEffect(() => {
        const onClickOutSide = (e: Event) => {
            if (
                floatingEl.current &&
                !floatingEl.current.contains(e.target as Node) &&
                referenceEl.current &&
                !referenceEl.current.contains(e.target as Node)
            ) {
                setShowTooltip(false);
            }
        };
        document.addEventListener('click', onClickOutSide);
        return () => {
            document.removeEventListener('click', onClickOutSide);
        };
    }, []);

    useEffect(() => {
        let cleanup: () => void;
        if (showTooltip && floatingEl.current && referenceEl.current) {
            cleanup = autoUpdate(
                referenceEl.current,
                floatingEl.current,
                () => {
                    if (!referenceEl?.current) {
                        return;
                    }
                    computePosition(referenceEl.current, floatingEl.current, {
                        placement,
                        strategy: fixedPositioning ? 'fixed' : 'absolute',
                        middleware: [
                            offset(8),
                            flip(),
                            shift({ padding: 2 }),
                            !hideArrow &&
                                arrow({ element: arrowEl.current, padding: 4 }),
                            size({
                                apply({
                                    availableWidth,
                                    availableHeight,
                                    elements,
                                }: {
                                    availableWidth: number;
                                    availableHeight: number;
                                    elements: { floating: HTMLElement };
                                }) {
                                    Object.assign(elements.floating.style, {
                                        maxWidth: `${
                                            config?.tooltip?.maxWidth ||
                                            availableWidth
                                        }px`,
                                        maxHeight: `${availableHeight}px`,
                                    });
                                },
                            }),
                            hidden && hide(),
                        ],
                    })
                        .then(
                            ({
                                x,
                                y,
                                middlewareData,
                                placement: _placement,
                            }) => {
                                if (floatingEl.current) {
                                    Object.assign(floatingEl.current.style, {
                                        left: `${x}px`,
                                        top: `${y}px`,
                                        position: fixedPositioning
                                            ? 'fixed'
                                            : 'absolute',
                                    });
                                }

                                if (!hideArrow) {
                                    const { x: arrowX, y: arrowY } =
                                        middlewareData.arrow;
                                    const staticSide = {
                                        top: 'bottom',
                                        right: 'left',
                                        bottom: 'top',
                                        left: 'right',
                                    }[_placement.split('-')[0]];
                                    if (arrowEl?.current?.style) {
                                        Object.assign(arrowEl.current.style, {
                                            left:
                                                arrowX != null
                                                    ? `${arrowX}px`
                                                    : '',
                                            top:
                                                arrowY != null
                                                    ? `${arrowY}px`
                                                    : '',
                                            right: '',
                                            bottom: '',
                                            [staticSide]: '-4px',
                                        });
                                    }
                                }
                            }
                        )
                        .catch(() => {
                            // eslint-disable-next-line no-console
                            console.log('error in computePosition');
                        });
                }
            );
        }
        return () => {
            if (typeof cleanup === 'function') {
                cleanup();
            }
        };
    }, [showTooltip, fixedPositioning, recomputedTrigger, content]);

    useEffect(() => {
        if (referenceEl.current) {
            referenceEl.current.addEventListener(
                'mouseleave',
                hideTooltipHandler
            );
            referenceEl.current.addEventListener(
                'mouseenter',
                showTooltipHandler
            );
            referenceEl.current.addEventListener(
                'onmouseover',
                showTooltipHandler
            );
        }
        return () => {
            if (referenceEl.current) {
                referenceEl.current.removeEventListener(
                    'mouseenter',
                    showTooltipHandler
                );
                referenceEl.current.removeEventListener(
                    'mouseleave',
                    hideTooltipHandler
                );
                referenceEl.current.removeEventListener(
                    'onmouseover',
                    showTooltipHandler
                );
            }
        };
    }, []);

    const cloneChildren = React.isValidElement(children)
        ? cloneElement(children as React.ReactElement<any>, {
            ref: referenceEl,
            style: {
                position: 'relative',
            },
        })
        : children;

    return (
        <>
            {cloneChildren}
            {showTooltip && content && !hidden && (
                <StyledTooltipWrapper
                    ref={floatingEl}
                    padding={config?.tooltip?.padding}
                >
                    {content}
                    {!hideArrow && (
                        <StyledTooltipArrow
                            ref={arrowEl}
                            data-testid="testid-tooltip-arrow"
                        />
                    )}
                </StyledTooltipWrapper>
            )}
        </>
    );
};

export default Tooltip;
