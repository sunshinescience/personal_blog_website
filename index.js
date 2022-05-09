
/* Sets the video based on the click of a button from the user. The initial video is set, but it gets replaced based on a click of a button. */
function setvideo(src) {
    document.getElementById('video-left').innerHTML = '<video id="video" controls><source src="'+src+'" type="video/mp4">Your browser does not support the video tag.</video>'; 
    document.getElementById('video').play();
}

/* TODO: set an event listener to determine when the video is done playing, and reset it.  */




