import React from "react";
import "./theme/App.css";
import Grid from "./components/grid/Grid";

function App() {
    return (
        <>
            <h1>
                <strong>Conway's Game of Life</strong>
            </h1>
            <div className="middle-row">
                <Grid />
            </div>
            <div>
                <h2>About this Algorithm:</h2>
                <p>
                    The Game of Life (sometimes known simply as Life) is an
                    example of a cellular automaton devised by the British
                    mathematician John Horton Conway in 1970. It takes place on
                    an infinite two-dimensional grid in which cells can be ‘on’
                    (alive) or ‘off’ (dead), and is defined by a set of rules
                    that jointly determine the state of a cell given the state
                    of its neighbours. Following specification of an initial
                    configuration, patterns evolve over time across the grid
                    requiring no further user input (thus ‘zero-player’). First
                    popularized in 1970 in the Scientific American (Gardner,
                    1970), the Game of Life has attracted lasting appeal among
                    both scientific and amateur communities. One reason for its
                    appeal is that it is very simple to program, yet at the same
                    time it appears to exemplify emergent and self-organized
                    behaviour. Even though its (simple) rules are specified at
                    the level of individual cells, one sees entities at
                    coarse-grained ‘higher’ levels of description, whose
                    behaviors are better described by rules at these higher
                    levels.
                </p>
                <a
                    href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                    target="blank"
                >
                    Conway's Game of Life Wikipedia
                </a>
            </div>
        </>
    );
}

export default App;
