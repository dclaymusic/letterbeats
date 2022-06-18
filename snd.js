function selectSound(x)
{
	if(x == 1) { load01(); play01(); }
	if(x == 2) { load02(); play02(); }
	if(x == 3) { load03(); play03(); }
	if(x == 4) { load04(); play04(); }
	if(x == 5) { load05(); play05(); }
	if(x == 6) { load06(); play06(); }
	if(x == 7) { load07(); play07(); }
	if(x == 8) { load08(); play08(); }
	if(x == 9) { load09(); play09(); }
	if(x == 10) { load10(); play10(); }
	if(x == 11) { load11(); play11(); }
	if(x == 12) { load12(); play12(); }
	if(x == 13) { load13(); play13(); }
	if(x == 14) { load14(); play14(); }
	if(x == 15) { load15(); play15(); }
	if(x == 16) { load16(); play16(); }
	if(x == 17) { load17(); play17(); }
	if(x == 18) { load18(); play18(); }
	if(x == 19) { load19(); play19(); }
	if(x == 20) { load20(); play20(); }
	if(x == 21) { load21(); play21(); }
	if(x == 22) { load22(); play22(); }
	if(x == 23) { load23(); play23(); }
	if(x == 24) { load24(); play24(); }
}

//check buffers before start allowed
function checkBuffers()
{
    let buffCount = 0;
    if( sndbuff01 != null) { buffCount++; }
    if( sndbuff02 != null) { buffCount++; }
    if( sndbuff03 != null) { buffCount++; }
    if( sndbuff04 != null) { buffCount++; }
    if( sndbuff05 != null) { buffCount++; }
    if( sndbuff06 != null) { buffCount++; }
    if( sndbuff07 != null) { buffCount++; }
    if( sndbuff08 != null) { buffCount++; }
    if( sndbuff09 != null) { buffCount++; }
    if( sndbuff10 != null) { buffCount++; }
    if( sndbuff11 != null) { buffCount++; }
    if( sndbuff12 != null) { buffCount++; }
    if( sndbuff13 != null) { buffCount++; }
    if( sndbuff14 != null) { buffCount++; }
    if( sndbuff15 != null) { buffCount++; }
    if( sndbuff16 != null) { buffCount++; }
    if( sndbuff17 != null) { buffCount++; }
    if( sndbuff18 != null) { buffCount++; }
    if( sndbuff19 != null) { buffCount++; }
    if( sndbuff20 != null) { buffCount++; }
    if( sndbuff21 != null) { buffCount++; }
    if( sndbuff22 != null) { buffCount++; }
    if( sndbuff23 != null) { buffCount++; }
    if( sndbuff24 != null) { buffCount++; }
    if( bg1slowbuff != null) { buffCount++; }
    if( bg1medbuff != null) { buffCount++; }
    if( bg1fastbuff != null) { buffCount++; }
    if( bg2slowbuff != null) { buffCount++; }
    if( bg2medbuff != null) { buffCount++; }
    if( bg2fastbuff != null) { buffCount++; }
    if( sndbuffclear != null) { buffCount++; }
    if( sndbuffclick != null) { buffCount++; }
    if( sndbuffshuffle != null) { buffCount++; }

    return buffCount;
}

let sndbuff01 = null;
let sndbuff02 = null;
let sndbuff03 = null;
let sndbuff04 = null;
let sndbuff05 = null;
let sndbuff06 = null;
let sndbuff07 = null;
let sndbuff08 = null;
let sndbuff09 = null;
let sndbuff10 = null;
let sndbuff11 = null;
let sndbuff12 = null;
let sndbuff13 = null;
let sndbuff14 = null;
let sndbuff15 = null;
let sndbuff16 = null;
let sndbuff17 = null;
let sndbuff18 = null;
let sndbuff19 = null;
let sndbuff20 = null;
let sndbuff21 = null;
let sndbuff22 = null;
let sndbuff23 = null;
let sndbuff24 = null;
let bg1slowbuff = null;
let bg1medbuff = null;
let bg1fastbuff = null;
let bg2slowbuff = null;
let bg2medbuff = null;
let bg2fastbuff = null;
let sndbuffclear = null;
let sndbuffclick = null;
let sndbuffshuffle = null;



const loadbg1slow = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/bg1slow.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bg1slowbuff = data);
	};
	request.send();
};

const playbg1slow = () => {
	bg1slow = audioCtx.createBufferSource();
	bg1slowplaying = true;
	bg1slow.buffer = bg1slowbuff;
	bg1slow.loop=true;
	bg1slow.connect(audioCtx.destination);
	bg1slow.start(audioCtx.currentTime);
};

const loadbg1med = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/bg1med.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bg1medbuff = data);
	};
	request.send();
};

const playbg1med = () => {
	bg1med = audioCtx.createBufferSource();
	bg1medplaying = true;
	bg1med.buffer = bg1medbuff;
	bg1med.loop=true;
	bg1med.connect(audioCtx.destination);
	bg1med.start(audioCtx.currentTime);
};

const loadbg1fast = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/bg1fast.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bg1fastbuff = data);
	};
	request.send();
};

const playbg1fast = () => {
	bg1fast = audioCtx.createBufferSource();
	bg1fastplaying = true;
	bg1fast.buffer = bg1fastbuff;
	bg1fast.loop=true;
	bg1fast.connect(audioCtx.destination);
	bg1fast.start(audioCtx.currentTime);
};



const loadbg2slow = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/bg2slow.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bg2slowbuff = data);
	};
	request.send();
};

const playbg2slow = () => {
	bg2slow = audioCtx.createBufferSource();
	bg2slowplaying = true;
	bg2slow.buffer = bg2slowbuff;
	bg2slow.loop=true;
	bg2slow.connect(audioCtx.destination);
	bg2slow.start(audioCtx.currentTime);
};

const loadbg2med = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/bg2med.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bg2medbuff = data);
	};
	request.send();
};

const playbg2med = () => {
	bg2med = audioCtx.createBufferSource();
	bg2medplaying = true;
	bg2med.buffer = bg2medbuff;
	bg2med.loop=true;
	bg2med.connect(audioCtx.destination);
	bg2med.start(audioCtx.currentTime);
};

const loadbg2fast = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/bg2fast.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bg2fastbuff = data);
	};
	request.send();
};

const playbg2fast = () => {
	bg2fast = audioCtx.createBufferSource();
	bg2fastplaying = true;
	bg2fast.buffer = bg2fastbuff;
	bg2fast.loop=true;
	bg2fast.connect(audioCtx.destination);
	bg2fast.start(audioCtx.currentTime);
};

//letter sounds

const load01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/01.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff01 = data);
	};
	request.send();
};

const play01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff01;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const load02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/02.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff02 = data);
	};
	request.send();
};

const play02 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff02;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/03.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff03 = data);
	};
	request.send();
};

const play03 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff03;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/04.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff04 = data);
	};
	request.send();
};

const play04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff04;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/05.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff05 = data);
	};
	request.send();
};

const play05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff05;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/06.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff06 = data);
	};
	request.send();
};

const play06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff06;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/07.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff07 = data);
	};
	request.send();
};

const play07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff07;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/08.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff08 = data);
	};
	request.send();
};

const play08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff08;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/09.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff09 = data);
	};
	request.send();
};

const play09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff09;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/10.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff10 = data);
	};
	request.send();
};

const play10 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff10;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/11.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff11 = data);
	};
	request.send();
};

const play11 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff11;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/12.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff12 = data);
	};
	request.send();
};

const play12 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff12;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load13 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/13.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff13 = data);
	};
	request.send();
};

const play13 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff13;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load14 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/14.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff14 = data);
	};
	request.send();
};

const play14 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff14;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load15 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/15.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff15 = data);
	};
	request.send();
};

const play15 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff15;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load16 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/16.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff16 = data);
	};
	request.send();
};

const play16 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff16;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load17 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/17.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff17 = data);
	};
	request.send();
};

const play17 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff17;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load18 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/18.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff18 = data);
	};
	request.send();
};

const play18 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff18;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load19 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/19.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff19 = data);
	};
	request.send();
};

const play19 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff19;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load20 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/20.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff20 = data);
	};
	request.send();
};

const play20 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff20;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load21 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/21.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff21 = data);
	};
	request.send();
};

const play21 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff21;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load22 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/22.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff22 = data);
	};
	request.send();
};

const play22 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff22;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load23 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/23.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff23 = data);
	};
	request.send();
};

const play23 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff23;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const load24 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/24.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuff24 = data);
	};
	request.send();
};

const play24 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuff24;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadclear = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/clear.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuffclear = data);
	};
	request.send();
};

const playclear = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuffclear;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/click.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuffclick = data);
	};
	request.send();
};

const playclick = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuffclick;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadshuffle = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/shuffle.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sndbuffshuffle = data);
	};
	request.send();
};

const playshuffle = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sndbuffshuffle;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};