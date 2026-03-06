import { ReactNode } from 'react';

export interface TokenBlockProps {
    copy?: boolean;
    showCopiedOverlay?: boolean;
    color?: string;
    children?: ReactNode;
    contentToCopy?: ReactNode;
    background?: string;
}
