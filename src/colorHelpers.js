import chroma from 'chroma-js';

function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        colors: []
    };
    for (let color of starterPalette.colors) {
        newPalette.colors.push({
            name: color.name,
            hex: color.color,
            rgb: chroma(color.color).css()  
        })
    }
    return newPalette;
}

export { generatePalette };