const { FontAssetType, generateFonts, OtherAssetType } = require('fantasticon');

const INPUT_DIRECTORY = './iconland/optimised';
const OUTPUT_DIRECTORY = './iconland/font-icons';

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
    assetTypes: [
        OtherAssetType.CSS,
        OtherAssetType.HTML,
        OtherAssetType.JSON,
        OtherAssetType.TS,
        OtherAssetType.SCSS,
    ],
    tag: 'i',
    prefix: 'gui-icon',
    formatOptions: {
        json: {
            indent: 2,
        },
        ts: {
            singleQuotes: true,
        },
    },
    pathOptions: {
    // ts: './iconland/font/iconland.ts'
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
        return basename;
    },
}).then((results) => {
    console.log(results);
});
