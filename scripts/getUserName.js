
function openLink() {
    // Replace 'your-link.html' with the actual URL you want to open
    window.location.href = './test.html';
    const userName = document.getElementById('user_input').value;

    sessionStorage.setItem('userName' , userName);

    // if( userName == special_troll_code)
    // {
    //     window.location.href = './troll.html';   

    //     const troll_video = document.getElementById('troll_video');
    //     troll_video.addEventListener('canplay', function() {
    //         troll_video.play();
    //     });
    // }
    // else 
    // {
    //     window.location.href = './test.html';
    // }
    
    // sessionStorage.setItem('userName' , userName);

    
}

let button = document.getElementById("input_button"); // Get the button element by its id
button.addEventListener("click", openLink); 

function playMusic()
{
    const music = document.getElementById("music");
    music.play();
}


playMusic();
