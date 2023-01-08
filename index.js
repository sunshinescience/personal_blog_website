
/* Dynamically updates the video-player element based on the user's click and plays the video */
function setVideo(src) {
    document.getElementById('video-player').innerHTML = '<video id="video" controls><source src="'+src+'" type="video/mp4">Your browser does not support the video tag.</video>'; 
    document.getElementById('video').play(); 
}

// Function returns the src list with the videos on the selected page
function getSRC() {
    let vidSrc = document.getElementById('video').getAttribute('src');
    // console.log("SRC attribute: ", vidSrc);
    let srcList = [];
    if (vidSrc == '../images/kaiboom_v1.mp4') {
        let src1 = '../images/kaiboom_v1.mp4';
        let src2 = '../images/kaiboom_v2.mp4';
        let src3 = '../images/kaiboom_v3.mp4';
        srcList.push(src1);
        srcList.push(src2);
        srcList.push(src3);
    }
    if (vidSrc == '../images/Jamming_1_4.m4v') {
        let src1 = '../images/Jamming_1_4.m4v';
        let src2 = '../images/Jamming_2_1.m4v';
        let src3 = '../images/Jamming_3_1.m4v';
        srcList.push(src1);
        srcList.push(src2);
        srcList.push(src3);
    }
    if (vidSrc == '../images/travel_app_v0.mp4') {
        let src1 = '../images/travel_app_v0.mp4';
        let src2 = '../images/travel_app_v1.mp4';
        let src3 = '../images/travel_app_v2.mp4';
        srcList.push(src1);
        srcList.push(src2);
        srcList.push(src3);
        console.log('weathertrip')
    }
    if (vidSrc == '../images/TreasureMap1.mp4') {
        let src1 = '../images/TreasureMap1.mp4';
        let src2 = '../images/TreasureMap2.mp4';
        let src3 = '../images/TreasureMap3.mp4';
        srcList.push(src1);
        srcList.push(src2);
        srcList.push(src3);
    }
   return srcList;
}

srcList = getSRC(); // Getting the SRC's of the current page
let activeIndex = 0;

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
function activeButton(videoIndex) {
    if (videoIndex == 0) {
        document.getElementById('button-1').style.background = "#edf0f1";
        document.getElementById('button-2').style.background = "black";
        document.getElementById('button-3').style.background = "black"; 
        document.getElementById('button-2').classList.add('hoverClass');  
        document.getElementById('button-3').classList.add('hoverClass');  
    }
    else if (videoIndex == 1) {
        document.getElementById('button-1').style.background = "black";
        document.getElementById('button-2').style.background = "#edf0f1";
        document.getElementById('button-3').style.background = "black";
        document.getElementById('button-1').classList.add('hoverClass');  
        document.getElementById('button-3').classList.add('hoverClass');  
    }
    else if (videoIndex == 2) {
        document.getElementById('button-1').style.background = "black";
        document.getElementById('button-2').style.background = "black";
        document.getElementById('button-3').style.background = "#edf0f1";
        document.getElementById('button-1').classList.add('hoverClass');  
        document.getElementById('button-2').classList.add('hoverClass');  
    }
}

