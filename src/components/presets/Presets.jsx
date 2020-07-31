import React from "react";
import "./Presets.css";
import { Dropdown } from "react-bootstrap";
import Preset from "./Preset/Preset";

import beaconImg from "../img/beacon.gif";
import gliderImg from "../img/glider.gif";
import pulsarImg from "../img/pulsar.gif";
import toadImg from "../img/toad.gif";

const Presets = ({ setGridPreset, setSpeed }) => {
    return (
        <div className="presets-container">
            <h2>Presets:</h2>
            <Preset
                name="Beacon"
                setGridPreset={setGridPreset}
                img={beaconImg}
            />
            <Preset
                name="Glider"
                setGridPreset={setGridPreset}
                img={gliderImg}
            />
            <Preset
                name="Pulsar"
                setGridPreset={setGridPreset}
                img={pulsarImg}
            />
            <Preset name="Toad" setGridPreset={setGridPreset} img={toadImg} />
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
};

export default Presets;
