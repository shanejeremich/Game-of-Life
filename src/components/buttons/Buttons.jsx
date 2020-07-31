// /* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Buttons.css";
import {
    Button
    // Dropdown,
    // DropdownButton
} from "react-bootstrap";

function Buttons({
    setPlay,
    play,
    playRef,
    start,
    setGrid,
    InitializeGrid,
    rows,
    cols,
    setGeneration
}) {
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
                    setGrid(InitializeGrid());
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
