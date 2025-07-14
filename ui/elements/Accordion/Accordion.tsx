import { AnimatePresence, motion } from 'framer-motion';
import React, { forwardRef, useEffect, useState } from 'react';

import { Icon } from '../Icon';
import {
    StyledAccordionContent,
    StyledAccordionHeader,
    StyledAccordionHeaderSuffix,
    StyledAccordionWrapper,
    StyledLine,
} from './Accordion.styles';
import { AccordionProps } from './types';

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    (
        {
            title,
            expanded = false,
            onToggle = () => {},
            children,
            suffix = null,
            headerBackgroundColor = 'var(--bg-secondary, #F6F7F9)',
            contentBackgroundColor = 'var(--bg-secondary, #F6F7F9)',
            iconColor = 'var(--text-primary, #16191D)',
            style = {},
            className = '',
            iconSize = '16',
            showSeparator = true,
        },
        ref
    ) => {
        const [isExpanded, setIsExpanded] = useState(expanded);
        const handleToggle = () => {
            setIsExpanded(!isExpanded);
            onToggle(!isExpanded);
        };

        useEffect(() => {
            setIsExpanded(expanded);
        }, [expanded]);

        const motionProps = {
            initial: 'hidden',
            animate: 'visible',
            exit: 'exit',
            variants: {
                hidden: { height: 0 },
                visible: { height: 'auto' },
                exit: { height: 0 },
            },
            transition: { duration: 0.3 },
        };

        return (
            <StyledAccordionWrapper
                ref={ref}
                style={style}
                className={className}
            >
                <StyledAccordionHeader
                    onClick={handleToggle}
                    $headerBackgroundColor={headerBackgroundColor}
                    className="ns-accordion-header"
                >
                    {title}
                    <StyledAccordionHeaderSuffix>
                        {suffix}
                        <Icon
                            color={iconColor}
                            name={isExpanded ? 'chevron-up' : 'chevron-down'}
                            size={iconSize}
                            className="ns-accordion-icon"
                        />
                    </StyledAccordionHeaderSuffix>
                </StyledAccordionHeader>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div {...motionProps}>
                            <StyledAccordionContent
                                $contentBackgroundColor={contentBackgroundColor}
                                className="ns-accordion-content"
                            >
                                {showSeparator && <StyledLine />}
                                {children}
                            </StyledAccordionContent>
                        </motion.div>
                    )}
                </AnimatePresence>
            </StyledAccordionWrapper>
        );
    }
);

export default Accordion;
