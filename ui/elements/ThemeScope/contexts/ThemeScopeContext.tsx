import { createContext } from 'react';

import { Theme, ThemeType } from '../types';

const ThemeScopeContext = createContext<{
    theme: Theme;
}>({
    theme: ThemeType.Light,
});

export { ThemeScopeContext };
