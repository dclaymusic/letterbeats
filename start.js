//display sound loadbar
function loadbarHandler()
{
    let loadbarloading = document.getElementById('loadbarloading');
    loadbarloading.style.width = (checkBuffers()/numberOfSounds) * 200 + 'px';
    //before start
    if(checkBuffers() == numberOfSounds)
    {
        allBuffersLoaded = true;
        let loadtext = document.getElementById('loadtext');
        loadtext.innerHTML = '(Click anywhere to begin.)';
        let loadbarloading = document.getElementById('loadbarloading');
        loadbarloading.style.backgroundColor = 'rgba(0,255,100,1)';
    }
    else 
    { } //opening state;
}

//restart - back to sound selection
function toSoundScreen() { 

    loadshuffle(); playshuffle();

    stopSoundtracks();

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

    if(loadedSound != null)
    { clearLoadedSound(); }

    document.getElementById("gamehead").style.visibility = 'visible';
    document.getElementById("gamefoot").style.visibility = 'hidden';

    let loadscreen = document.querySelector('#loadscreen');
    loadscreen.style.visibility = 'hidden';

    let soundscreen = document.querySelector('#soundscreen');
    soundscreen.style.visibility = 'visible';

    document.getElementById('gameready').style.visibility = 'hidden';
    document.getElementById('gamenotready').style.visibility = 'visible';
    
    document.getElementById('infoscreen').style.visibility = 'hidden';


    hasLoaded = true;
    isSoundScreen = true;
    isGameScreen = false;
    isInfoScreen = false;
    isPlaying = false;

}

//into main game canvas
function toGameScreen() {

    loadclick(); playclick(); 
    toggleSoundtrack(0);
    speed = 750;
    drawMap();
    resetItemMap();
    tempoDisplay(speed);

    document.getElementById("gamefoot").style.visibility = 'visible';

    let soundscreen = document.getElementById('soundscreen');
    soundscreen.style.visibility = 'hidden';
    document.getElementById('gameready').style.visibility = 'hidden';

    //initialize game screen by drawing tile map.
    isSoundScreen = false;
    isGameScreen = true;

}

//frame rate check
function frameRate()
{
    ctx.fillStyle = "#ff0000";
    ctx.font = "30px Andale Mono";
    ctx.textAlign = "start";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);
}
