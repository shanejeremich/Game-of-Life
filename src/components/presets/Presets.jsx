import React from "react";
import Preset from "./Preset/Preset";
import "./Presets.css"

import beaconImg from "../img/beacon.gif"
import gliderImg from "../img/glider.gif"
import pulsarImg from "../img/pulsar.gif"
import toadImg from "../img/toad.gif"

const Presets = ({ setGridPreset }) => {
    return (
        <div className="presets-container">
            <Preset name="Beacon" setGridPreset={setGridPreset} img={beaconImg} />
            <Preset name="Glider" setGridPreset={setGridPreset} img={gliderImg} />
            <Preset name="Pulsar" setGridPreset={setGridPreset} img={pulsarImg} />
            <Preset name="Toad" setGridPreset={setGridPreset} img={toadImg} />
        </div>
    );
};

export default Presets;
