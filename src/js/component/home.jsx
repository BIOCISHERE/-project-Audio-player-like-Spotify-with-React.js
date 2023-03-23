import React, { useEffect, useState } from "react";
import Player from "./player.jsx";

const songURL = "https://assets.breatheco.de/apis/sound/";
const songObj = [];

const Home = () => {
	const [name, setName] = useState([])

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/sound/songs")
		.then(response => response.json())
		.then(data => {
			setName(data)
			for(let i = 0; i < data.length; i++){
				songObj.push(data[i]);
			}
		})
		console.log(songObj)
		
	})
	
	return (
		<div>
			<div className="songContainer">
				<ol className="mx-0 mt-0 mb-1 p-0">
					{name.map((title, i) => 
					<div className="trackContainer py-2 ps-5">
						{/* usar la clase trackSelected cuando se este reproduciendo la cancion */}
						<li className="track" key={i}>{title.name}</li>
					</div>)}
				</ol>
			</div>
			<Player />
		</div>
	);
};

export default Home;
