/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const svgpath = require('svgpath');

// Function to read all SVG files from a directory
function getSvgFiles(dirPath) {
    return fs.readdirSync(dirPath).filter(file => path.extname(file) === '.svg');
}

// Function to process an SVG file and fix path directions
function processSvgFile(filePath) {
    const svgContent = fs.readFileSync(filePath, 'utf-8');
    const regex = /<path\s[^>]*d="([^"]*)"/g;
    let match;
    let fixedSvgContent = svgContent;

    while ((match = regex.exec(svgContent)) !== null) {
        const originalPathData = match[1];
        const fixedPathData = fixPathDirection(originalPathData);
    
        // Replace the original path data with the fixed one
        fixedSvgContent = fixedSvgContent.replace(originalPathData, fixedPathData);
    }

    // Write the fixed SVG content back to a new directory
    const outputDir = path.join(path.dirname(filePath), 'nonzero-winding-icons');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    const fixedFilePath = path.join(outputDir, path.basename(filePath));
    fs.writeFileSync(fixedFilePath, fixedSvgContent, 'utf-8');
    console.log(`Processed: ${filePath}, Saved as: ${fixedFilePath}`);
}

// Function to fix path directions (main logic)
function fixPathDirection(pathData) {
    const pathDataSubArr = splitSubpaths(pathData);  // Split subpaths
    const fixedPathData = fixInnerPathDirections(pathDataSubArr);
    return fixedPathData.join(' ');
}

// Function to fix inner path directions
function fixInnerPathDirections(pathDataSubArr) {
    const outerPathData = pathDataSubArr[0]; // Assume first path is outer path
    const outerClockwise = isClockwise(outerPathData);

    return pathDataSubArr.map((pathDataSub, i) => {
        if (i > 0) {
            const isClockwiseInner = isClockwise(pathDataSub);
            // Reverse if inner path is same direction as outer path
            if (isClockwiseInner === outerClockwise) {
                return reversePathData(pathDataSub);
            }
        }
        return pathDataSub;
    });
}

// Helper functions
function isClockwise(pathData) {
    const svgPath = svgpath(pathData);
    let total = 0;
    svgPath.iterate((seg) => {
        if (seg[0] === 'M') {return;}
        const x1 = seg[1]; const y1 = seg[2];
        const x2 = seg[5]; const y2 = seg[6];
        total += (x2 - x1) * (y2 + y1);
    });
    return total > 0;
}

function reversePathData(pathData) {
    return svgpath(pathData).reverse().toString();
}

function splitSubpaths(pathData) {
    const subPaths = [];
    const commands = svgpath(pathData).iterate();

    let currentPath = [];
    commands.forEach(cmd => {
        if (cmd[0] === 'M' && currentPath.length) {
            subPaths.push(currentPath);
            currentPath = [];
        }
        currentPath.push(cmd);
    });
    if (currentPath.length) {
        subPaths.push(currentPath);
    }
    return subPaths;
}

// Main function to process all SVGs in a directory
function processSvgDirectory(dirPath) {
    const svgFiles = getSvgFiles(dirPath);

    svgFiles.forEach(file => {
        const filePath = path.join(dirPath, file);
        processSvgFile(filePath);
    });
}

// Run the script with a specified directory
const svgDirectory = './iconland/seeds';
processSvgDirectory(svgDirectory);
