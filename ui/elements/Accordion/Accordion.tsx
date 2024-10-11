import { AnimatePresence } from 'framer-motion';
import React, { forwardRef, useEffect, useState } from 'react';

import { Icon } from '../Icon';
import {
    StyledAccordionContent,
    StyledAccordionHeader,
    StyledAccordionWrapper,
    StyledLine,
} from './Accordion.styles';
import { AccordionProps } from './types';

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    ({ title, expanded = false, onToggle = () => {}, children }, ref) => {
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
            <StyledAccordionWrapper ref={ref}>
                <StyledAccordionHeader onClick={handleToggle}>
                    {title}
                    <Icon
                        color="var(--text-primary)"
                        name={isExpanded ? 'chevron-up' : 'chevron-down'}
                        size="16"
                    />
                </StyledAccordionHeader>
                <AnimatePresence>
                    {isExpanded && (
                        <StyledAccordionContent {...motionProps}>
                            <StyledLine />
                            {children}
                        </StyledAccordionContent>
                    )}
                </AnimatePresence>
            </StyledAccordionWrapper>
        );
    }
);

export default Accordion;
