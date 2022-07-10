let i = 0;
const videos = ["videos/rocky edit v2.mp4","videos/Lovesick edit.mp4", "videos/billie eyelash edit.mp4"];
function playVideo(direction){
    var videoElement = document.getElementById("video1");
    if(direction === "left"){
        i--;
        if(i < 0){
            i = videos.length-1;
        }
    }else if(direction === "right"){
        i++;
        if(i >= videos.length){
            i = 0;
        }
    }
    videoElement.src = videos[i];
    videoElement.play();
    
}
function mute(state){
    var videoElement = document.getElementById("video1");
    if(state === mute){
        videoElement.muted = false;
        document.getElementById("mute").style.display = "none";
        document.getElementById("unmute").style.display = "block";
    }else{
        videoElement.muted = true;
        document.getElementById("unmute").style.display = "none";
        document.getElementById("mute").style.display = "block";
    }
}

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

$(window).scroll(function () {
    var topDivHeight = $(".header").height();
    var viewPortSize = $(window).height();
    
    var triggerAt = 150;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.to-fade-in').css('visibility', 'visible').hide().fadeIn(1500);
        $(this).off('scroll');
    }
});