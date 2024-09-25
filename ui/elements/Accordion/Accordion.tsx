import React, { forwardRef, useEffect, useState } from 'react';

import {
    AccordionContent,
    AccordionHeader,
    AccordionIcon,
    StyledAccordionDiv,
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
            <StyledAccordionDiv ref={ref} expanded={isExpanded}>
                <AccordionHeader onClick={handleToggle} expanded={isExpanded}>
                    {title}
                    <AccordionIcon>{isExpanded ? '-' : '+'}</AccordionIcon>
                </AccordionHeader>
                <AccordionContent expanded={isExpanded}>
                    {children}
                </AccordionContent>
            </StyledAccordionDiv>
        );
    }
);

export default Accordion;
