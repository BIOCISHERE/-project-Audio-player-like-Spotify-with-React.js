import React, { useEffect, useState } from "react";
import Navbar from "./navbar.jsx";
import Player from "./player.jsx";

const songURL = "https://assets.breatheco.de/apis/sound/";
var songObj = [];

const Home = () => {
	const [name, setName] = useState([])

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/sound/songs")
		.then(response => response.json())
		.then(data => {
			setName(data)
			for(let i = 0; i < data.length; i++){
				songObj.push({id: i, category: data[i].category, name: data[i].name, url: data[i].url});
			}
		})
		console.log(songObj, "songObj")
		
	}, [])
	
	return (
		<div>
			<Navbar />
			<div className="songContainer">
				<ol className="mx-0 mt-0 mb-1 p-0">
					{name.map((title, i) => 
					<div className="trackContainer py-2 ps-5" key={i}>
						{/* usar la clase trackSelected cuando se este reproduciendo la cancion */}
						<li className="track">{title.name}</li>
					</div>, console.log(songObj)
					)}
				</ol>
			</div>
			<audio src=""></audio>
			<Player />
		</div>
	);
};

export default Home;
