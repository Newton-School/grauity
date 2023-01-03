import { FontAssetType, generateFonts, OtherAssetType } from 'fantasticon';
import * as fs from 'fs';

const INPUT_DIRECTORY = './iconland/optimised';
const OUTPUT_DIRECTORY = './iconland/font-icons';
const UI_DIRECTORY = './ui';
const UI_LIBRARY_CORE_DIRECTORY = `${UI_DIRECTORY}/core`;
const UI_LIBRARY_CSS_DIRECTORY = `${UI_DIRECTORY}/css`;
const UI_LIBRARY_FONTS_DIRECTORY = `${UI_DIRECTORY}/fonts`;
const UI_LIBRARY_CORE_ICON_DIRECTORY = `${UI_LIBRARY_CORE_DIRECTORY}/icons`;
const tagIconsObject = {};
const iconTags = {};

generateFonts({
    name: 'gui-icons',
    inputDir: INPUT_DIRECTORY,
    outputDir: OUTPUT_DIRECTORY,
    fontTypes: [
        FontAssetType.EOT,
        FontAssetType.WOFF,
        FontAssetType.WOFF2,
        FontAssetType.TTF,
    ],
    assetTypes: [OtherAssetType.JSON, OtherAssetType.TS, OtherAssetType.SCSS],
    tag: 'i',
    prefix: 'gui-icon',
    formatOptions: {
        json: {
            indent: 2,
        },
        ts: {
            singleQuotes: true,
            enumName: 'GUI_ICONS',
            literalIdName: 'guiIconName',
            literalKeyName: 'guiIconKey',
            constantName: 'GUI_ICON_CODEPOINTS',
        },
    },
    pathOptions: {
        eot: `${UI_LIBRARY_FONTS_DIRECTORY}/gui-icons.eot`,
        woff: `${UI_LIBRARY_FONTS_DIRECTORY}/gui-icons.woff`,
        woff2: `${UI_LIBRARY_FONTS_DIRECTORY}/gui-icons.woff2`,
        ttf: `${UI_LIBRARY_FONTS_DIRECTORY}/gui-icons.ttf`,
        ts: `${UI_LIBRARY_CORE_ICON_DIRECTORY}/index.ts`,
        scss: `${UI_LIBRARY_CSS_DIRECTORY}/gui-icons.scss`,
    },
    getIconId: ({
        basename,
        // relativeDirPath,
        absoluteFilePath,
        // relativeFilePath,
    }) => {
        const splitBaseName = basename.split('|');
        if (splitBaseName.length <= 1) {
            throw new Error(
                `No tag provided for the icon ${absoluteFilePath}.` +
                    ' The tags should be separated by a pipe character (|).' +
                    ' For example: \'tag1|tag2|tag3|...|tagN|icon-name.svg\''
            );
        }
        const tags = splitBaseName.slice(0, splitBaseName.length - 1);
        const iconName = splitBaseName[splitBaseName.length - 1];
        tags.forEach((tag) => {
            if (!tagIconsObject[tag]) {
                tagIconsObject[tag] = [];
            }
            tagIconsObject[tag].push(iconName);
        });
        iconTags[iconName] = tags;
        return iconName;
    },
})
    .then((results) => {
        // fs.writeFile(
        //     './iconland/font/iconland.ts',
        //     `export const ICON_TAGS = ${JSON.stringify(iconTags, null, 2)};`
        // );
        // fs.writeFile(
        //     './iconland/font/iconland.ts',
        //     `export const ICON_TAGS = ${JSON.stringify(iconTags, null, 2)};`
        // );
        let scssContent = results.assetsOut.scss;

        scssContent = scssContent.replace(
            /\.\/gui-icons\./g,
            'fonts/gui-icons.'
        );
        fs.writeFile(results.options.pathOptions.scss, scssContent, (err) => {
            if (err) {
                throw err;
            }
        });
        console.log(results);
    })
    .catch((error) => {
        console.error(error);
    });
