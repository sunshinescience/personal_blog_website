
/* Sets the video based on the click of a button from the user. The initial video is set, but it gets replaced based on a click of a button. */

/* 
See if I can use anything found in here:
https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics

https://blog.shahednasser.com/how-to-style-a-video-player-and-create-a-custom-player/
*/

/* The function below dynamically updates the video based on the user's click */
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
       alert(activeIndex);
      }  
      setVideo(srcList[activeIndex]);
  }


