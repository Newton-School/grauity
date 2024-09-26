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

        return (
            <StyledAccordionWrapper ref={ref} expanded={isExpanded}>
                <StyledAccordionHeader onClick={handleToggle}>
                    {title}
                    <Icon
                        color="var(--text-primary)"
                        name={isExpanded ? 'chevron-up' : 'chevron-down'}
                        size="16"
                    />
                </StyledAccordionHeader>
                <StyledAccordionContent expanded={isExpanded}>
                    <StyledLine />
                    {children}
                </StyledAccordionContent>
            </StyledAccordionWrapper>
        );
    }
);

export default Accordion;
