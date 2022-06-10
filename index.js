
/* Dynamically updates the video-player element based on the user's click and plays the video */
function setVideo(src) {
    document.getElementById('video-player').innerHTML = '<video id="video" controls><source src="'+src+'" type="video/mp4">Your browser does not support the video tag.</video>'; 
    document.getElementById('video').play(); 
}

let src1 = '../images/Jamming_1_4.m4v';
let src2 = '../images/Jamming_2_1.m4v';
let src3 = '../images/Jamming_3_1.m4v';

srcList = [src1, src2, src3];
let activeIndex = 0;

// We use only one event listener, and listen for any click in the area of the video player container
// This function sets the active index of the video source list (srcList) and then it calls the setVideo function above with the active video source to play
function getVideo(event) { 
    if (event.target.id == 'arrow-right') {
        activeIndex += 1;
        if (activeIndex == srcList.length) {
            activeIndex = 0;
        }
    }

    else if (event.target.id == 'arrow-left') {
        activeIndex -= 1;
        if (activeIndex < 0 ) {
           activeIndex = srcList.length - 1;
        }
    } 
    
    else if (event.target.id == 'button-1') {
        activeIndex = 0;
    }

    else if (event.target.id == 'button-2') {
        activeIndex = 1;
    }

    else if (event.target.id == 'button-3') {
        activeIndex = 2;
    }
  
    setVideo(srcList[activeIndex]); // calling a function with the active video source in order to play the video
    activeButton(activeIndex);
}

// This function highlights what active video you're on based on the three circle buttons below the video
// Find a way to remove elements if button is non active - this will fix the problem of hovering when another button is clicked
function activeButton(videoIndex) {
    if (videoIndex == 0) {
        document.getElementById('button-1').style.background = "#edf0f1";
        document.getElementById('button-2').style.background = "black";
        document.getElementById('button-3').style.background = "black"; 
        document.getElementById('button-2').classList.add('hoverClass'); /* Adding in a hover to the button */
        document.getElementById('button-3').classList.add('hoverClass'); /* Adding in a hover to the button */
    }
    else if (videoIndex == 1) {
        document.getElementById('button-1').style.background = "black";
        document.getElementById('button-2').style.background = "#edf0f1";
        document.getElementById('button-3').style.background = "black";
        document.getElementById('button-1').classList.add('hoverClass'); /* Adding in a hover to the button */
        document.getElementById('button-3').classList.add('hoverClass'); /* Adding in a hover to the button */
    }
    else if (videoIndex == 2) {
        document.getElementById('button-1').style.background = "black";
        document.getElementById('button-2').style.background = "black";
        document.getElementById('button-3').style.background = "#edf0f1";
        document.getElementById('button-1').classList.add('hoverClass'); /* Adding in a hover to the button */
        document.getElementById('button-2').classList.add('hoverClass'); /* Adding in a hover to the button */
    }
}

