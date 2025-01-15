export type ThemeColorObjType = {
    [colorCategory: string]: {
        [colorIntensity: string]: {
            [colorName: string]: {
                [colorState: string]: string;
            };
        };
    };
};

export type ExtractColorVariablesType = (
    themeColorObj: ThemeColorObjType
) => String[];
