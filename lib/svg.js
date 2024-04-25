const shape = require('./shape');
const { square, circle, traingle } = require('./shape');

function renderShape(shape) {
    const shapeOption = {
        "square": new shape.Square(),
        "triangle": new shape.Triangle(),
        "circle": new shape.circle(),
    }
    const shapeSVGOutput = shapeOption[shape];
    return ShapeSVGOutput
}
const generateSVG = (userInput) => {
    const { shape, color, logoText, LogoColor } = userInput;
    const shapeSVG = renderShapeObj(shape);

    shapeSVG.setColor(color);

    const outputSVG = `<svg version="1.1" width="300" height="300"
    xmlns="http://www.w3.org/2000/svg">

    ${shapeSVG.render()}

    <text x="150" y="175" font-size="100" text-anchor="middle
    fill="${logoColor}">${logoColor}</text></svg>`
    
    return outputSVG
}

module.exports = generateSVG