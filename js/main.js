let i = 0;
const videos = ["videos/rocky edit v2.mp4","videos/Lovesick edit.mp4", "videos/billie eyelash edit.mp4","videos/chill.mp4"];
function playVideo(direction){
    var videoElement = document.getElementById("video1");
    if(direction === "left"){
        i--;
        i = i < 0 ? 3 : i;
    }else if(direction === "right"){
        i++;
        i = i%4;  
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
        $('.background-fade').css('visibility', 'visible').hide().fadeIn(1500)
        $('.to-fade-in').css('visibility', 'visible').hide().fadeIn(1500);
        $('.to-fade-in').css('transform', 'translate(0,0)');
        $(this).off('scroll');
    }
});

