import React from 'react'

const setGridPreset = (preset) => {
    let grid = initializeGrid();

    switch(preset) {
        case 'glider':
            grid[11][11] = 1;
            grid[11][12] = 1;
            grid[12][11] = 1;
            grid[12][12] = 1;
            grid[13][13] = 1;
            grid[14][13] = 1;
            grid[13][14] = 1;
            grid[14][14] = 1;
            break;

        case 'beacon':
            grid[8][11] = 1;
            grid[9][11] = 1;
            grid[10][11] = 1;
            grid[11][11] = 1;
            grid[12][11] = 1;
            grid[13][11] = 1;
            grid[14][11] = 1;
            grid[15][11] = 1;

            grid[8][12] = 1;
            grid[10][12] = 1;
            grid[11][12] = 1;
            grid[12][12] = 1;
            grid[13][12] = 1;
            grid[15][12] = 1;

            grid[8][13] = 1;
            grid[9][13] = 1;
            grid[10][13] = 1;
            grid[11][13] = 1;
            grid[12][13] = 1;
            grid[13][13] = 1;
            grid[14][13] = 1;
            grid[15][13] = 1;
            break;

        case 'pulsar':
            grid[4][3] = 1;
            grid[5][3] = 1;

            grid[3][4] = 1;
            grid[4][4] = 1;
            grid[5][4] = 1;

            grid[3][5] = 1;
            grid[4][5] = 1;
            grid[6][5] = 1;

            grid[4][6] = 1;
            grid[5][6] = 1;
            grid[6][6] = 1;

            grid[5][7] = 1;
            break;
            
            case 'toad':
            grid[4][3] = 1;
            grid[5][3] = 1;

            grid[3][4] = 1;
            grid[4][4] = 1;
            grid[5][4] = 1;

            grid[3][5] = 1;
            grid[4][5] = 1;
            grid[6][5] = 1;

            grid[4][6] = 1;
            grid[5][6] = 1;
            grid[6][6] = 1;

            grid[5][7] = 1;
            break;

        default:
            return preset;
    }

    setGrid(preset);
}

function Presets() {
    return (
        <div>
            
        </div>
    )
}

export default Presets
