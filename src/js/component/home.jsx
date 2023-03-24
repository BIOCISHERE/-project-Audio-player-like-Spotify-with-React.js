import React, { useEffect, useState } from "react";
import Navbar from "./navbar.jsx";
import Player from "./player.jsx";

const songURL = "https://assets.breatheco.de/apis/sound/";
var songObj = [];

const Home = () => {
	const [name, setName] =useState([])

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/sound/songs")
		.then(response => response.json())
		.then(data => {
			songObj.push({id: 0, category: data[0].category, name: data[0].name, url: data[0].url});
			songObj.push({id: 1, category: data[1].category, name: data[1].name, url: data[1].url});
			songObj.push({id: 2, category: data[2].category, name: data[2].name, url: data[2].url});
			songObj.push({id: 3, category: data[3].category, name: data[3].name, url: data[3].url});
			songObj.push({id: 4, category: data[4].category, name: data[4].name, url: data[4].url});
			songObj.push({id: 5, category: data[5].category, name: data[5].name, url: data[5].url});
			songObj.push({id: 6, category: data[6].category, name: data[6].name, url: data[6].url});
			songObj.push({id: 7, category: data[7].category, name: data[7].name, url: data[7].url});
			songObj.push({id: 8, category: data[8].category, name: data[8].name, url: data[8].url});
			songObj.push({id: 9, category: data[9].category, name: data[9].name, url: data[9].url});
			songObj.push({id: 10, category: data[10].category, name: data[10].name, url: data[10].url});
			songObj.push({id: 11, category: data[11].category, name: data[11].name, url: data[11].url});
			songObj.push({id: 12, category: data[12].category, name: data[12].name, url: data[12].url});
			songObj.push({id: 13, category: 'cartoon', name: data[16].name, url: data[16].url});
			songObj.push({id: 14, category: 'cartoon', name: data[17].name, url: data[17].url});
			songObj.push({id: 15, category: 'cartoon', name: data[18].name, url: data[18].url});
			songObj.push({id: 16, category: 'cartoon', name: data[19].name, url: data[19].url});
			songObj.push({id: 17, category: 'cartoon', name: data[20].name, url: data[20].url});
			songObj.push({id: 18, category: 'cartoon', name: data[21].name, url: data[21].url});
			setName(songObj)
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
					</div>, console.log(songObj)
					)}					
*/
