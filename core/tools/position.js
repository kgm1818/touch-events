
// position.js

class Position {
    constructor(){
        this.lastClientObjs = [];
    }
    initLastClientObjs(lastClientObjs) {
        this.lastClientObjs = Object.assign([], lastClientObjs);
    }
    getDisplacement(thisClientObjs) {
        thisClientObjs = Array.from(thisClientObjs);
        return thisClientObjs.map((item, index) => {
            const {x, y} = this.lastClientObjs[index];
            return {
                x: item.clientX - x,
                y: item.clientY - y
            }
        })
    }
}

module.exports = Position;