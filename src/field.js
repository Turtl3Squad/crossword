class Field {


    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    static getBasicGrid(size) {
        let grid = []
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                grid.concat(new Field(i, j))
            }
        }
        return grid
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }
}