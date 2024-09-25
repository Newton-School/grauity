import React, { forwardRef, useEffect, useState } from 'react';

import {
    StyledAccordionContent,
    StyledAccordionHeader,
    StyledAccordionWrapper,
    StyledIcon,
} from './Accordion.styles';
import { DOWN_ARROW_ICON, UP_ARROW_ICON } from './contants';
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
                    <StyledIcon
                        src={isExpanded ? UP_ARROW_ICON : DOWN_ARROW_ICON}
                    />
                </StyledAccordionHeader>
                <StyledAccordionContent expanded={isExpanded}>
                    {children}
                </StyledAccordionContent>
            </StyledAccordionWrapper>
        );
    }
);

export default Accordion;
