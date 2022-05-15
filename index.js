
/* Sets the video based on the click of a button from the user. The initial video is set, but it gets replaced based on a click of a button. */


function setvideo(src) {
    document.getElementById('video-left').innerHTML = '<video id="video" controls><source src="'+src+'" type="video/mp4">Your browser does not support the video tag.</video>'; 
    document.getElementById('video').play(); 
}


/*
document.getElementById('button-1').addEventListener('click', function() {
    document.getElementById('source_video').src = '../images/Jamming_1_4.m4v'; 
    document.getElementById('video-left').innerHTML = '<video id="video" controls><source src="'+src+'" type="video/mp4">Your browser does not support the video tag.</video>'; 
    document.getElementById('video').play();
});
*/

function getSrc() {
    let currentSrc = document.getElementById('source_video').src;
    alert(currentSrc);
}
// getSrc();


document.getElementById('button-1').addEventListener('click', 
    function() {
   /* alert('button 1 was clicked, so if they click right arrow play next video to right'); */
   let currentSrc = document.getElementById('source_video').src;
   
});



/* TODO: set an event listener to determine when the video is done playing, and reset it.  */
/* Or, make videos so they end in a nice way */


/* TODO: */
/* Set an event listener for which video was played and which arrow is clicked in order to scroll through the videos. */
function showVideoRight() {
    
    // alert("right was clicked"); 
    /* Get which video is currently showing */

    /* Display the video to the right when clicked */
    let currentSrc = document.getElementById('source_video').src;
    alert(currentSrc);
    // http://127.0.0.1:5502/images/Jamming_1_4.m4v
} 

function showVideoLeft() {
    alert("Left was clicked."); 
     /* Get which video is currently showing */

     /* Display the video to the left when clicked */
} 
