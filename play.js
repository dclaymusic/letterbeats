function soundLoader(startTime)
{
    if(currentSoundtrack == 1)
    {
        if(speed == 300)
        {
            if ( (startTime % speed <= 50 )
            && clickTick == true )
            {    
                loadbg1fast(); playbg1fast();
                bg1fastplaying = true;
                loadingSound = false;
                clickTick = false;
                setTimeout(() => {clickTick = true; }, 200);
            }
        }

        if(speed == 500)
        {
            if ( (startTime % speed <= 50 )
            && clickTick == true )
            {   
                loadbg1med(); playbg1med();
                bg1medplaying = true;
                loadingSound = false;
                clickTick = false;
                setTimeout(() => {clickTick = true; }, 200);
            }
        }

        if(speed == 750)
        {
            if ( (startTime % speed <= 50 )
            && clickTick == true )
            {    
                loadbg1slow(); playbg1slow();
                bg1slowplaying = true;
                loadingSound = false;
                clickTick = false;
                setTimeout(() => {clickTick = true; }, 200);
            }
        }
    }
    if(currentSoundtrack == 2)
    {
        if(speed == 300)
        {
            if ( (startTime % speed <= 50 )
            && clickTick == true )
            {    
                loadbg2fast(); playbg2fast();
                bg2fastplaying = true;
                loadingSound = false;
                clickTick = false;
                setTimeout(() => {clickTick = true; }, 200);
            }
        }

        if(speed == 500)
        {
            if ( (startTime % speed <= 50 )
            && clickTick == true )
            {   
                loadbg2med(); playbg2med();
                bg2medplaying = true;
                loadingSound = false;
                clickTick = false;
                setTimeout(() => {clickTick = true; }, 200);
            }
        }

        if(speed == 750)
        {
            if ( (startTime % speed <= 50 )
            && clickTick == true )
            {    
                loadbg2slow(); playbg2slow();
                bg2slowplaying = true;
                loadingSound = false;
                clickTick = false;
                setTimeout(() => {clickTick = true; }, 200);
            }
        }
    }
}

function playHandler(startTime)
{
    if ( (startTime % speed <= 50 )
    && clickTick == true )
    {

        if(firstPlay == true)
        {
            firstPlay = false;
            itemMap[0] = 1;
            selectSound(gameMap[0]);
            clickTick = false;
            setTimeout(() => {clickTick = true; }, 200);
        }
        else 
        {
            for(let x = 0; x < itemMap.length; x++)
            {
                if(itemMap[itemMap.length-1] == 1)
                {
                    itemMap[itemMap.length-1] = 0;
                    itemMap[0] = 1;
                    selectSound(gameMap[0]);
                    clickTick = false;
                    setTimeout(() => {clickTick = true; }, 200);
                    break;
                }
                else if(itemMap[x] == 1) 
                {
                    itemMap[x] = 0;
                    itemMap[x+1] = 1;
                    selectSound(gameMap[x+1]);
                    clickTick = false;
                    setTimeout(() => {clickTick = true; }, 200);
                    break;
                }
            }
        }
    }
}


function stopSoundtracks() {

    loadingSound = false;
    if(bg1fastplaying == true) { bg1fast.stop(audioCtx.currentTime); bg1fastplaying = false; }
    if(bg1medplaying == true) { bg1med.stop(audioCtx.currentTime); bg1medplaying = false; }
    if(bg1slowplaying == true) { bg1slow.stop(audioCtx.currentTime); bg1slowplaying = false; }
    if(bg2fastplaying == true) { bg2fast.stop(audioCtx.currentTime); bg2fastplaying = false; }
    if(bg2medplaying == true) { bg2med.stop(audioCtx.currentTime); bg2medplaying = false; }
    if(bg2slowplaying == true) { bg2slow.stop(audioCtx.currentTime); bg2slowplaying = false; }
}