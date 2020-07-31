import React, { useState} from "react";
import "./theme/App.css"
import Grid from "./components/grid/Grid";

function App() {
    const [generation, setGeneration] = useState(0);

    return (
        <div className="center">
            <h1>Conway's Game of Life</h1>
            <h2>Generation: {generation}</h2>
            <Grid setGeneration={setGeneration}/>
        </div>
    );
}

export default App;
