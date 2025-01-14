import { StyledDivProps } from '../../../common/types';
import { ButtonSizes, ButtonVariants } from '../Button/types';

export type PaginationJustifyContent =
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end';

export interface PaginationProps {
    /**
     * The total number of pages.
     */
    totalPageCount: number;

    /**
     * The default current page. Defaults to number 1.
     * @default 1
     */
    defaultCurrentPage?: number;

    /**
     * The function that will be called when the page changes. It will receive the new page number as an argument.
     */
    onPageChange: (pageNumber: number) => void;

    /**
     * The size of the pagination. Defaults to 'small'.
     * @default 'small'
     */
    size?: ButtonSizes;

    /**
     * The alignment of the pagination items (analogous to `justifyContent`). Defaults to 'space-between'.
     * @default 'space-between'
     */
    justifyContent?: PaginationJustifyContent;

    /**
     * The type of the pagination button. Defaults to 'tertiary'.
     * @default 'tertiary'
     */
    buttonVariant?: ButtonVariants;

    /**
     * The type of the active pagination button. Defaults to 'secondary'.
     * @default 'secondary'
     */
    activeButtonVariant?: ButtonVariants;

    /**
     * The type of the control pagination button. Defaults to 'tertiary'.
     * @default 'tertiary'
     */
    controlButtonVariant?: ButtonVariants;

    /**
     * The class name of the pagination.
     * @default ''
     */
    className?: string;
}

export interface StyledPaginationProps extends StyledDivProps {
    $justifyContent: PaginationJustifyContent;
}
