// operations
// where [0,0] is the cell we are checking
export const operations = [
    [0, 1], // right of cell
    [0, -1], // left of cell
    [1, -1], // bottom left diagonal of cell
    [-1, 1], // top right diagonal of cell
    [1, 1], // bottom right diagonal of cell
    [-1, -1], // top left diagonal of cell
    [1, 0], // bottom of cell
    [-1, 0] // top of cell
];