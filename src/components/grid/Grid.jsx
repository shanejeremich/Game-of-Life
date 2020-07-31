import React, { useState, useCallback, useRef } from "react";
import "./Grid.css";
import produce from "immer";
import Buttons from "../buttons/Buttons";
import Presets from "../presets/Presets";
import { operations } from "../grid/operations/operations";

/**
 * Initialize Grid
 */
const rows = 25;
const cols = 25;
const InitializeGrid = () => {
    const arr = [];
    // create number of rows equal to our const rows variable
    for (let i = 0; i < rows; i++) {
        // push a copy of Array equal to const cols variable
        // set values to all 0
        arr.push(Array.from(Array(cols), () => 0));
    }
    return arr;
};

function Grid() {
    const [generation, setGeneration] = useState(0);
    const [play, setPlay] = useState(false);
    const [grid, setGrid] = useState(() => {
        return InitializeGrid();
    });
    console.log(grid);
    const playRef = useRef(play);
    playRef.current = play;

    // Use Callback function so this doesnt change and not be rerendered
    const start = useCallback(() => {
        // If not playing stop
        if (!playRef.current) {
            return;
        }

        setGrid(currentGrid => {
            // Produce is going to generate a new grid and update setGrid
            return produce(currentGrid, gridCopy => {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newRowI = i + x;
                            const newColI = j + y;

                            // Check to not go out of bounds
                            if (
                                newRowI >= 0 &&
                                newRowI < rows &&
                                newColI >= 0 &&
                                newColI < cols
                            ) {
                                // If live cell add 1 to neighbors
                                neighbors += currentGrid[newRowI][newColI];
                            }
                        });

                        // If neighbors is less than 2 or greater than three
                        // Cell is Dead
                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = 0;
                        }
                        // If cell is dead and there is exactly 3 neighbors
                        // Cell is alive
                        else if (currentGrid[i][j] === 0 && neighbors === 3) {
                            gridCopy[i][j] = 1;
                        }
                    }
                }
            });
        });

        setGeneration(prev => {
            const next = prev + 1;
            return next;
        });

        setTimeout(start, 100);
    }, [setGeneration]);

    const setGridPreset = preset => {
        let grid = InitializeGrid();

        switch (preset) {
            case "Beacon":
                grid[6][9] = 1;
                grid[6][10] = 1;
                grid[7][9] = 1;
                grid[7][10] = 1;
                grid[8][11] = 1;
                grid[8][12] = 1;
                grid[9][11] = 1;
                grid[9][12] = 1;
                break;

            case "Glider":
                grid[6][9] = 1;
                grid[7][10] = 1;
                grid[8][8] = 1;
                grid[8][9] = 1;
                grid[8][10] = 1;
                break;

            case "Pulsar":
                grid[6][9] = 1;
                grid[6][10] = 1;
                grid[6][11] = 1;
                
                grid[6][15] = 1;
                grid[6][16] = 1;
                grid[6][17] = 1;
                
                grid[8][7] = 1;
                grid[9][7] = 1;
                grid[10][7] = 1;
                
                grid[8][12] = 1;
                grid[9][12] = 1;
                grid[10][12] = 1;
                
                grid[8][14] = 1;
                grid[9][14] = 1;
                grid[10][14] = 1;
                
                grid[8][19] = 1;
                grid[9][19] = 1;
                grid[10][19] = 1;
                
                grid[11][9] = 1;
                grid[11][10] = 1;
                grid[11][11] = 1;
                
                grid[11][9] = 1;
                grid[11][10] = 1;
                grid[11][11] = 1;
                
                grid[11][15] = 1;
                grid[11][16] = 1;
                grid[11][17] = 1;
                
                grid[13][9] = 1;
                grid[13][10] = 1;
                grid[13][11] = 1;
                
                grid[13][15] = 1;
                grid[13][16] = 1;
                grid[13][17] = 1;
                
                grid[14][7] = 1;
                grid[15][7] = 1;
                grid[16][7] = 1;
                
                grid[14][12] = 1;
                grid[15][12] = 1;
                grid[16][12] = 1;
                
                grid[14][14] = 1;
                grid[15][14] = 1;
                grid[16][14] = 1;
                
                grid[14][19] = 1;
                grid[15][19] = 1;
                grid[16][19] = 1;
                
                grid[18][9] = 1;
                grid[18][10] = 1;
                grid[18][11] = 1;
                
                grid[18][15] = 1;
                grid[18][16] = 1;
                grid[18][17] = 1;
                break;
                
            case "Toad":
                grid[6][9] = 1;
                grid[6][10] = 1;
                grid[6][11] = 1;

                grid[5][10] = 1;
                grid[5][11] = 1;
                grid[5][12] = 1;
                break;

            default:
                return grid;
        }

        setGrid(grid);
    };

    return (
        <>
            <div className="game-container">
                <h2>Generation: {generation}</h2>
                <div className="grid-container">
                    {grid.map((rows, i) =>
                        rows.map((none, j) => (
                            <div
                                className="grid-item"
                                key={`${i}-${j}`}
                                onClick={() => {
                                    // produce makes a mutable change and creates a new grid
                                    const newGrid = produce(grid, gridCopy => {
                                        // each cell toggle - If cell is dead make it alive otheriwse make it alive
                                        gridCopy[i][j] = grid[i][j] ? 0 : 1;
                                    });
                                    setGrid(newGrid);
                                }}
                                style={{
                                    backgroundColor: grid[i][j]
                                        ? "black"
                                        : undefined
                                }}
                            />
                        ))
                    )}
                </div>
                <Buttons
                    setPlay={setPlay}
                    play={play}
                    playRef={playRef}
                    start={start}
                    setGrid={setGrid}
                    InitializeGrid={InitializeGrid}
                    rows={rows}
                    cols={cols}
                    setGeneration={setGeneration}
                />
            </div>
            <Presets
                InitializeGrid={InitializeGrid}
                setGridPreset={setGridPreset}
            />
        </>
    );
}

export default Grid;
