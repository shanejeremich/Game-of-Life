// /* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Buttons.css";
import { Button, Dropdown } from "react-bootstrap";

function Buttons({
    setPlay,
    play,
    playRef,
    start,
    setGrid,
    InitializeGrid,
    rows,
    cols,
    setGeneration,
    setSpeed
}) {
    return (
        <div className="buttons-container">
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
            <Dropdown className="dropdown">
                <Dropdown.Toggle variant="outline-secondary" size="lg">
                    Speed
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        onClick={() => {
                            setSpeed(1000);
                        }}
                    >
                        Slow
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setSpeed(100);
                        }}
                    >
                        Medium
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setSpeed(50);
                        }}
                    >
                        Fast
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Buttons;
