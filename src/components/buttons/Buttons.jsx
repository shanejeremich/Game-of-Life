// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "./Buttons.css"
import {
    Button
    // Dropdown,
    // DropdownButton
} from "react-bootstrap";
import { operations } from "../grid/operations/operations";

function Buttons({ setGrid, emptyGrid, rows, cols, setGeneration }) {
    const [play, setPlay] = useState(false);
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

                        // Once we check how many neighbors we determine if cell
                        // becomes dead or alive
                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = 0;
                            // If the cell is dead and has exactly 3 neighbors, then it comes to life
                        } else if (currentGrid[i][j] === 0 && neighbors === 3) {
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
    }, [setGrid, cols, rows, setGeneration]);

    return (
        <div className="buttons-container">
            {/* Play Button */}
            <Button
                variant="outline-secondary"
                size="lg"
                onClick={() => {
                    // toggle playing and stop Button
                    setPlay(!play);
                    if (!play) {
                        playRef.current = true;
                        start();
                    }
                }}
            >
                {play ? "Stop" : "Play"}
            </Button>

            {/* Clear Button */}
            <Button
                variant="outline-secondary"
                size="lg"
                onClick={() => {
                    setGrid(emptyGrid());
                    setPlay(false);
                    setGeneration(0);
                }}
            >
                Clear
            </Button>

            {/* Random Button */}
            <Button
                variant="outline-secondary"
                size="lg"
                onClick={() => {
                    const arr = [];
                    for (let i = 0; i < rows; i++) {
                        arr.push(
                            Array.from(Array(cols), () =>
                                Math.random() > 0.6 ? 1 : 0
                            )
                        );
                    }
                    setGrid(arr);
                }}
            >
                Random
            </Button>
        </div>
    );
}

export default Buttons;
