import kebabCase from 'lodash/kebabCase';

/**
 * Convert a string to kebab case, removing hyphens before numbers
 * 
 * For example, "MyComponent1" will be converted to "my-component1", instead of "my-component-1"
 * @param str The string to convert to kebab case
 * @returns
 */
export function getKebabCase(str: string): string {
    // First, convert the string to kebab case using lodash
    let kebabStr = kebabCase(str);

    // Use a regular expression to remove hyphens before numbers
    kebabStr = kebabStr.replace(/-(\d)/g, '$1');

    return kebabStr;
}
