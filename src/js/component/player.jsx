import React, { useState } from "react";
import { FaStepBackward, FaStepForward, FaPlay, FaPause } from "react-icons/fa";


const Player = ({ audioTag, isPlaying, setIsPlaying, songArray, currentSong, setCurrentSong   }) => {
    const playOrPause = () => {
        setIsPlaying(!isPlaying);
    };

    const previus = () => {
        const index = songArray.findIndex(x => x.id == songArray[currentSong].id);

        if(index == 0){
            setCurrentSong(songArray.length - 1);
        } else {
            setCurrentSong(index - 1);
        };
        audioTag.current.currentTime = 0;
    }; 

    const next = () => {
        const index = songArray.findIndex(x => x.id == songArray[currentSong].id);

        if(index == songArray.length - 1){
            setCurrentSong(0);
        } else {
            setCurrentSong(index + 1);
        };
        audioTag.current.currentTime = 0;
    }; 

	return (
		<div className="containerPlayer fixed-bottom text-center bg-dark">
            <div className="titlePlayer text-white fs-3 pt-3">
                <p>Currently Playing: {songArray[currentSong].name}</p>
            </div>
            <div className="controls py-4">
                <FaStepBackward className="songControl fs-3 mx-3" onClick={previus} />
                {isPlaying ? <FaPause className="songControl fs-3 mx-3" onClick={playOrPause} /> 
                : <FaPlay className="songControl fs-3 mx-3" onClick={playOrPause} />}
                <FaStepForward className="songControl fs-3 mx-3" onClick={next} />
            </div>
		</div>
	);
};

export default Player;