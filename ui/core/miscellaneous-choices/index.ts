export type {
    grauityRotatedChoiceName,
    grauityFlippedChoiceName,
} from './miscellaneousTypes';

export enum GRAUITY_ROTATED_CHOICES {
    CLOCKWISE = 'clockwise',
    COUNTERCLOCKWISE = 'counterclockwise',
}

export enum GRAUITY_FLIPPED_CHOICES {
    HORIZONTALLY = 'horizontally',
    VERTICALLY = 'vertically',
}

export const GRAUITY_ICON_ROTATED_CHOICES = [
    GRAUITY_ROTATED_CHOICES.CLOCKWISE,
    GRAUITY_ROTATED_CHOICES.COUNTERCLOCKWISE,
];

export const GRAUITY_ICON_FLIPPED_CHOICES = [
    GRAUITY_FLIPPED_CHOICES.HORIZONTALLY,
    GRAUITY_FLIPPED_CHOICES.VERTICALLY,
];
