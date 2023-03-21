import React from "react";
import { FaStepBackward, FaStepForward, FaPlay, FaPause } from "react-icons/fa";


const Player = () => {
	return (
		<div className="containerPlayer fixed-bottom text-center bg-dark">
            <div className="titlePlayer text-white fs-3 pt-3">
                <p>First song</p>
            </div>
            <div className="controls py-4">
                <FaStepBackward className="songControl fs-3 mx-3" />
                <FaPlay className="songControl fs-3 mx-3" />
                <FaStepForward className="songControl fs-3 mx-3" />
            </div>
		</div>
	);
};

export default Player;