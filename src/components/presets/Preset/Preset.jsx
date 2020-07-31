import React from "react";
import { Button, Figure } from "react-bootstrap";
import "./Preset.css"

const Preset = ({ setGridPreset, name, img }) => {
    return (
        <div className="preset-container">
            <Figure>
                <Figure.Image src={img} height={100} width={100} />
            </Figure>
            <Button
                onClick={() => setGridPreset(name)}
                variant="outline-secondary"
                size="lg"
            >
                {name}
            </Button>
        </div>
    );
};

export default Preset;
