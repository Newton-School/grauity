import { StyledDivProps } from '../../../common/types';

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
     * @default 'var(--bg-subtle-tertiary-default, #edeff3)'
     */
    backgroundColor?: string;

    /**
     * Additional class name for the placeholder
     * @default ''
     */
    className?: string;
}

export interface StyledPlaceholderProps extends StyledDivProps {
    $width: string;
    $height: string;
    $border: string;
    $borderRadius: string;
    $margin: string;
    $backgroundColor: string;
}
