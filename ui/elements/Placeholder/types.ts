import { StyledDivProps } from '../Calendar/types';

export interface PlaceholderProps {
    /**
     * Width of the placeholder.
     * @default 100%
     */
    width?: string;

    /**
     * Height of the placeholder.
     * @default 100%
     */
    height?: string;

    /**
     * Border of the placeholder block.
     * @default 'none'
     */
    border?: string;

    /**
     * Border radius of the placeholder.
     * @default 0
     */
    borderRadius?: string;

    /**
     * Margin of the placeholder.
     * @default 0
     */
    margin?: string;

    /**
     * Background color of the placeholder.
     * @default 'var(--bg-tertiary, #EDEFF3)'
     */
    backgroundColor?: string;
}

export interface StyledPlaceholderProps extends StyledDivProps {
    $width: string;
    $height: string;
    $border: string;
    $borderRadius: string;
    $margin: string;
    $backgroundColor: string;
}
