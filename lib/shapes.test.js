const shape = require("./lib/shape");
const { square, circle, triangle } = require('./lib/shape');

const circle = new circle();
square.setColor("purple");
expect(circle.render()).toEqual(`<circle cx="150" cy="150" r="150" fill="blue" />`);

const square = new square();
square.setColor("red");
expect(square.render()).toEqual(`<rect x="10" y="10" width="300" height= "300" fill="red" />`);