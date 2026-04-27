export interface KeyboardEventConfig {
    shouldDetect?: boolean;
    detectCombination?: boolean;
}

export interface UseKeyboardEventProps {
    onKeyPress: (event: KeyboardEvent) => void;
    keyCodes: string[];
    config?: KeyboardEventConfig;
}
