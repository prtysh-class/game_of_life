// http://www.stephanimoroni.com/how-to-create-a-2d-array-in-javascript/
let system;
var canvas;

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

var grid;

class cell {
    constructor(_pos, _state, _size) {
        this.pos = _pos;
        this.state = _state;
        this.size = _size;
    }

    show() {
        rect(this.pos.x, this.pos.y, this.size, this.size);
    }
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-10');

    grid = Array.matrix(10, 10, 0);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            grid[i][j] = floor(random(0, 10));
        }
    }
}

function draw() {

    background(255);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            text(grid[i][j], 30* i, 30* j);
        }
    }

}

Array.matrix = function (numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
 }