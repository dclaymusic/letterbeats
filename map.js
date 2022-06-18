function drawMap()
{
	gameMap = [];
	itemMap = [];

	gameMap = [
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0
	];

	itemMap = [
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0
	]

	firstPlay = true;

}

function drawMapTiles()
{

	for(var y = 0; y < mapH; ++y)
	{
		for(var x = 0; x < mapW; ++x)
		{
			//draw letter drop boxes
			var tile = tileTypes[gameMap[toIndex(x,y)]];
			ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
				x*tileW * xScale + xOffset, y*tileH * yScale + yOffset, tileW, tileH);

			if(itemMap[toIndex(x,y)] != 0)
			{
				ctx.strokeStyle = 'red';
				ctx.lineWidth = 10;
				ctx.strokeRect(x*tileW * xScale + xOffset, y*tileH * yScale + yOffset, tileW, tileH);
			}
		}
	}

}



function resetItemMap()
{
    document.getElementById("playbutton").src = "img/playimg.png";
    document.getElementById("playtext").innerHTML = "Play";

    itemMap = [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ];

    firstPlay = true;

}