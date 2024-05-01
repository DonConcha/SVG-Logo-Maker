class shape {
    constructor() {
        this.color = "";
    }
setColor(color) {
    this.color = color;
   } 
}

class square extends shape {
    render() {
        return `<rect x="10" y="10" width="300" height="300" fill="${this.color}"/>`
    }
}

class circle extends shape {
    render() {
        return `circle cx="150" cy="150" r="150" fill="${this.color}" />`; 
    }
}

class triangle extends shape {
    render() {
        return `<polygon points= "150,20 300,300 20, 300" fill="${this.color}" />`
    }
}

module.exports = { square, circle, triangle}