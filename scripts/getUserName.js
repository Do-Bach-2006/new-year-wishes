
function openLink() {
    // Replace 'your-link.html' with the actual URL you want to open
    window.location.href = './test.html';
    const userName = document.getElementById('user_input').value;

    sessionStorage.setItem('userName' , userName);
}

let button = document.getElementById("input_button"); // Get the button element by its id
button.addEventListener("click", openLink); 

function playMusic()
{
    const music = document.getElementById("music");
    music.play();
}


playMusic();
