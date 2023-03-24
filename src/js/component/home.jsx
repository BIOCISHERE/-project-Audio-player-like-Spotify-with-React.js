import React, { useEffect, useState } from "react";
import Navbar from "./navbar.jsx";
import Player from "./player.jsx";

const songURL = "https://assets.breatheco.de/apis/sound/";

const Home = () => {
	const [songArray, setSongArray] = useState([{id: '', category: '', name: '', url: ''}])

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/sound/songs")
		.then(response => response.json())
		.then(data => setSongArray([
			{id: 0, category: data[0].category, name: data[0].name, url: data[0].url},
			{id: 1, category: data[1].category, name: data[1].name, url: data[1].url},
			{id: 2, category: data[2].category, name: data[2].name, url: data[2].url},
			{id: 3, category: data[3].category, name: data[3].name, url: data[3].url},
			{id: 4, category: data[4].category, name: data[4].name, url: data[4].url},
			{id: 5, category: data[5].category, name: data[5].name, url: data[5].url},
			{id: 6, category: data[6].category, name: data[6].name, url: data[6].url},
			{id: 7, category: data[7].category, name: data[7].name, url: data[7].url},
			{id: 8, category: data[8].category, name: data[8].name, url: data[8].url},
			{id: 9, category: data[9].category, name: data[9].name, url: data[9].url},
			{id: 10, category: data[10].category, name: data[10].name, url: data[10].url},
			{id: 11, category: data[11].category, name: data[11].name, url: data[11].url},
			{id: 12, category: data[12].category, name: data[12].name, url: data[12].url},
			{id: 13, category: 'cartoon', name: data[16].name, url: data[16].url},
			{id: 14, category: 'cartoon', name: data[17].name, url: data[17].url},
			{id: 15, category: 'cartoon', name: data[18].name, url: data[18].url},
			{id: 16, category: 'cartoon', name: data[19].name, url: data[19].url},
			{id: 17, category: 'cartoon', name: data[20].name, url: data[20].url},
			{id: 18, category: 'cartoon', name: data[21].name, url: data[21].url}
		]));
	}, [])
	
	return (
		<div>
			<Navbar />
			<div className="songContainer">
				<ol className="mx-0 mt-0 mb-1 p-0">
				    {songArray.map((title, i) => 
				        <div className="trackContainer py-2 ps-5" key={i}>
						    {/* usar la clase trackSelected cuando se este reproduciendo la cancion */}
						    <li className="track">{title.name}</li>
					    </div>
					)}
				</ol>
				<button type="button" className="btn-close" aria-label="Close" onClick={console.log(songArray[0])}></button>
			</div>
			<audio src='' /> 
			<Player />
		</div>
	);
};

export default Home;
/*
					{name.map((title, i) => 
					<div className="trackContainer py-2 ps-5" key={i}>
						 usar la clase trackSelected cuando se este reproduciendo la cancion }
						<li className="track">{title.name}</li>
					</div>
					)}					
*/
