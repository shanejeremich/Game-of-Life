import React, { useState } from "react";
import "./Grid.css";
import produce from "immer";
import Buttons from "../buttons/Buttons";
import { gridContainer } from "../../theme/theme";

const rows = 25;
const cols = 25;
const InitializeGrid = () => {
    const arr = [];
    // create number of rows equal to our const rows variable
    for (let i = 0; i < rows; i++) {
        // push a copy of Array equal to const cols variable, set values to all 0
        arr.push(Array.from(Array(cols), () => 0));
    }
    return arr;
};

function Grid({ setGeneration }) {
    const [grid, setGrid] = useState(() => {
        return InitializeGrid();
    });
    
    

    return (
        <div>
            <div style={gridContainer}>
                {grid.map((rows, i) =>
                    rows.map((none, j) => (
                        <div
                            className="cell"
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
                setGrid={setGrid}
                InitializeGrid={InitializeGrid}
                rows={rows}
                cols={cols}
                setGeneration={setGeneration}
            />
        </div>
    );
}

export default Grid;
