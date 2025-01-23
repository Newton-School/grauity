export const getRandomPastelColor = () => {
    const color = `hsla(${Math.random() * 360}, 70%, 50%, 0.4)`;
    const borderColor = color.replace('0.4', '0.7');

    return { color, borderColor };
};
