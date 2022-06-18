
//play button
function togglePlay()
{
    if(isGameScreen && !isInfoScreen)
    {
        isPlaying = !isPlaying;

        if(!isPlaying)
        {
            resetItemMap();
            toggleSoundtrack(0);
        }

        else {
            document.getElementById("playbutton").src = "img/stopimg.png";
            document.getElementById("playtext").innerHTML = "Stop";
        }
    }
}

//speed button
function toggleSpeed(value)
{
    loadclick(); playclick();

    if(isGameScreen && !isInfoScreen)
    {
        isPlaying = false;
        resetItemMap();
        speed = value;
    }

    tempoDisplay(speed);
    toggleSoundtrack(0);

}


function tempoDisplay(value) 
{
    if(speed == 750)
    { 
        document.getElementById("imgfast").src = "img/imgfast.png";
        document.getElementById("imgmed").src = "img/imgmed.png";
        document.getElementById("imgslow").src = "img/imgslow2.png";
    }
    if(speed == 500)
    {
        document.getElementById("imgfast").src = "img/imgfast.png";
        document.getElementById("imgmed").src = "img/imgmed2.png";
        document.getElementById("imgslow").src = "img/imgslow.png"; 
    }
    if(speed == 300)
    {
        document.getElementById("imgfast").src = "img/imgfast2.png";
        document.getElementById("imgmed").src = "img/imgmed.png";
        document.getElementById("imgslow").src = "img/imgslow.png"; 
    }
}

//soundtrack button
function toggleSoundtrack(value)
{

    stopSoundtracks();

    if(!isInfoScreen)
    {
        isPlaying = false;
        resetItemMap();
        currentSoundtrack = value; 
        soundtrackDisplay(value);
    
        if(value != 0) { loadingSound = true; }
    }

}


function soundtrackDisplay(value) 
{
    if(value == 0)
    { 
        document.getElementById("nobg").src = "img/bgnone2.png";
        document.getElementById("bg1").src = "img/bg1.png";
        document.getElementById("bg2").src = "img/bg2.png";
    }

    if(value == 1)
    { 
        document.getElementById("nobg").src = "img/bgnone.png";
        document.getElementById("bg1").src = "img/bg12.png";
        document.getElementById("bg2").src = "img/bg2.png";
    }

    if(value == 2)
    { 
        document.getElementById("nobg").src = "img/bgnone.png";
        document.getElementById("bg1").src = "img/bg1.png";
        document.getElementById("bg2").src = "img/bg22.png";
    }

}

//shuffle button
function randomPattern() {

    loadclear(); playclear();
    
    isPlaying = false;
    resetItemMap();

    let allSounds = [];
    let theseSounds = [];

    for(let i = 0; i < currentSounds.length; i++)
    {
        if(currentSounds[i] == true)
        { allSounds.push(i); }
    }

    console.log(allSounds);

    var chooser = randomNoRepeats(allSounds);

    for(let i = 0; i < allSounds.length; i++)
    {
        theseSounds.push(chooser())
    }


    //make a random pattern in each row

    for(let y = 0; y < mapH; y++)
    {
        let r = randomInt(1);
        if(r == 0)
        {
            for(let x = 0; x < mapW; x++)
            {
                if(x % 2 == 1)
                { gameMap[toIndex(x,y)] = theseSounds[y] + 1 }
                else { gameMap[toIndex(x,y)] = theseSounds[y+1] + 1 }
            }
        }
        if(r == 1)
        {
            let r1 = randomInt(4);
            let r2 = randomInt(4);
            let r3 = randomInt(4);
            let r4 = randomInt(4);
            for(let x = 0; x < mapW; x++)
            {
                if(x == 0 || x == 4) { gameMap[toIndex(x,y)] = theseSounds[r1] + 1; }
                if(x == 1 || x == 5) { gameMap[toIndex(x,y)] = theseSounds[r2] + 1; }
                if(x == 2 || x == 6) { gameMap[toIndex(x,y)] = theseSounds[r3] + 1; }
                if(x == 3 || x == 7) { gameMap[toIndex(x,y)] = theseSounds[r4] + 1; }
            }  
        }

    }

}

//info button
function toggleInfoScreen() {

    loadclick(); playclick();
    
    isInfoScreen = !isInfoScreen;
    isPlaying = false;
    toggleSoundtrack(0);
    resetItemMap();

    if(isInfoScreen)
    {
        document.getElementById('infoscreen').style.visibility = 'visible';
    }
    else
    {
        document.getElementById('infoscreen').style.visibility = 'hidden';
    }


}

