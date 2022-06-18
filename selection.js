
//loading and unloading sonuds from sound bank by click
function togglet(id) 
{
    //load sounds into sound bank

    if(isSoundScreen && loadedSounds <= 5)
    {
        let t = document.getElementById(id);
        let tstring = Array.from(id)
        let tindex;

        if(tstring.length == 2) { 
            tindex = tstring[1];
        }
        else if(tstring.length == 3) { 
            tindex = tstring[1] + tstring[2];
        }
    
        //if activated, remove
        if(currentSounds[parseInt(tindex)-1] == true)
        {
            loadclick(); playclick(); 
            t.style.border = 'solid 5px';
            t.style.opacity = '0.7';
            t.style.borderColor = 'rgba(0,0,0,0)';

            loadedSounds--;
            currentSounds[parseInt(tindex)-1] = false;

            let sb = document.getElementById("sb" + tindex);
            sb.remove();
        }

        //if not activated, activate
        else if(loadedSounds <= 4) {

            t.style.border = 'solid 5px black';
            t.style.opacity = '1.0';

            loadedSounds++;
            currentSounds[parseInt(tindex)-1] = true;

            selectSound(parseInt(tindex));

            let sb = document.createElement("img");
            sb.id = 'sb' + tindex;
            sb.onclick = function() { drawLoadedSound(sb.id) };
            sb.src = 'img/' + 't' + tindex + '.png';
            document.getElementById('gamehead').appendChild(sb);
        }

        if(loadedSounds == 5) { 
            document.getElementById('gameready').style.visibility = 'visible'; 
            document.getElementById('gamenotready').style.visibility = 'hidden'; 
        }
        else { 
            document.getElementById('gameready').style.visibility = 'hidden';
            document.getElementById('gamenotready').style.visibility = 'visible';  
        }

    }
}


//pick 5 sounds and add to sound bank
function pickFiveSounds()
{

    loadclear(); playclear();

    var chooser = randomNoRepeats(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']);

    //clear previously loaded sounds
    for(let i = 0; i < currentSounds.length; i++)
    {
        if(currentSounds[i] == true)
        {
            let t = document.getElementById('t' + (i+1));

            t.style.opacity = '0.7';
            t.style.border = 'solid 5px';
            t.style.borderColor = 'rgba(0,0,0,0)';
            currentSounds[i] = false;

            let sb = document.getElementById("sb" + (i+1));
            sb.remove();
        }
    }

    loadedSounds = 0;

    for(let i = 0; i < 5; i++)
    {
        let thisId = chooser();
        let t = document.getElementById('t' + thisId);
        t.style.border = 'solid 5px black';
        t.style.opacity = '1.0';
        loadedSounds++;
        currentSounds[parseInt(thisId)-1] = true;

        let sb = document.createElement("img");
        sb.id = 'sb' + thisId;
        sb.onclick = function() { drawLoadedSound(sb.id) };
        sb.src = 'img/' + 't' + thisId + '.png';
        document.getElementById('gamehead').appendChild(sb);

    }

    if(loadedSounds == 5) { 
        document.getElementById('gameready').style.visibility = 'visible'; 
        document.getElementById('gamenotready').style.visibility = 'hidden'; 
    }
    else { 
        document.getElementById('gameready').style.visibility = 'hidden';
        document.getElementById('gamenotready').style.visibility = 'visible';  
    }


}

//draw clicked sound to cursor
function drawLoadedSound(id)
{
    if(isGameScreen && !isInfoScreen)
    {

        if(loadedSound != null)
        {
            let t = document.getElementById('l' + loadedSound);
            t.remove();
        }

        let tstring = Array.from(id)
        if(tstring.length == 3) { 
            tindex = tstring[2];
        }
        else if(tstring.length == 4) { 
            tindex = tstring[2] + tstring[3];
        }

        loadedSound = tindex;

        let l = document.createElement("img");
        l.id = 'l' + tindex;
        l.src = 'img/' + 't' + tindex + '.png';
        l.style.width = '65px';
        l.style.position = 'absolute';
        l.style.opacity = 0.7;
        l.style.left = (mousePos[0]-30) + 'px';
        l.style.top = (mousePos[1]-30) + 'px';
        l.style.pointerEvents = 'none';
        document.getElementById('body').appendChild(l);
        l.style.visbility = 'hidden';
    }
}

//clear clicked sound from cursor
function clearLoadedSound()
{
    let t = document.getElementById('l' + loadedSound);
    t.remove();
    loadedSound = null;
}

//change clicked sond from cursor
function updateLoadedSound()
{
    let l = document.getElementById("l" + loadedSound);
    l.style.visbility = 'visible';
    l.style.left = (mousePos[0]-30) + 'px';
    l.style.top = (mousePos[1]-30) + 'px';
}

//shuffle sounds
function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }



//clicking in canvas
function clickHandler(event) 
{
    if(!hasLoaded && allBuffersLoaded == true)
    { 
        toSoundScreen();
    }
    else if(!allBuffersLoaded)
    { }
    else if(isGameScreen)
    {

        let tileDropped = false;
        const rect = document.getElementById('game').getBoundingClientRect();
        var x = Math.floor(event.clientX - rect.left) * scale; // divide by a tileW if needed
        var y = Math.floor(event.clientY - rect.top) * scale; // divide by a tileH if needed

        for(let thisY = 0; thisY < mapH; thisY++)
        {
            for(let thisX = 0; thisX < mapW; thisX++)
            {
                if(
                    (x >= thisX*tileW * xScale + xOffset && x <= thisX*tileW * xScale + xOffset + tileW) &&
                    (y >= thisY*tileH * yScale + yOffset && y <= thisY*tileH * yScale + yOffset + tileH)
                )
                { 
                    if(loadedSound != null)
                    {
                        gameMap[toIndex(thisX,thisY)] = parseInt(loadedSound);
                        selectSound(parseInt(loadedSound));
                        tileDropped = true;
                    }
                    else{ gameMap[toIndex(thisX,thisY)] = 0; }
                }
            }
        }
        if(!tileDropped && x >= 0 && y >= 0 && loadedSound != null)
        {
            clearLoadedSound();
        }
    }

}

//hover coordinates (not used)
function getHoverOver(event) {
    const rect = document.getElementById('body').getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    return([x,y]);
}
