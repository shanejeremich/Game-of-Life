import React from "react";
import "./theme/App.css";
import Grid from "./components/grid/Grid";

function App() {

    return (
        <>
            <h1>Conway's Game of Life</h1>
            <div className="middle-row">
                <Grid />
            </div>
        </>
    );
}

export default App;
