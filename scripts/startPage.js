
function randomInRange(max , min)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function cloneStar() {
    // Get the star div element
    let star = document.getElementsByClassName("star");
    // Clone the star div element
    let clone = star[0].cloneNode(true);


    // Append the clone to the background element
    let background = document.getElementById("background");
    background.appendChild(clone);

    // Return the clone
    return clone;
}

function randomPosition(div) {
    // Get the window width and height
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    // Generate a random position within the window boundaries
    let randomLeft = randomInRange(0, windowWidth - div.offsetWidth);
    let randomTop = randomInRange(0, windowHeight - div.offsetHeight);
    // Set the position of the div element
    div.style.left = randomLeft + "px";
    div.style.top = randomTop + "px";
}

function generateStars()
{
    for(let i = 0 ; i < 1000 ; i ++)
    {
        // clone a star
        let newStar = cloneStar();
        // then set the new star at random position
        randomPosition(newStar);
    }

}

generateStars()

function applyGlowingEffect(star) {
    // Apply the glowing effect (only changing height, width, and background-color)
    star.style.height = "15px";
    star.style.width = "15px";
    star.style.backgroundColor = "white";
        
    star.style.clipPath = "polygon(0% 50%,40% 60% , 50% 100% , 60% 60% , 100% 50% , 60% 40% , 50% 0% , 40% 40%)";
    star.style.transition = "0.5s";
}
    
function removeGlowingEffect(star) {
    // Restore the original height, width, and background-color values
    star.style.height = "3px";
    star.style.width =  "3px";
    star.style.backgroundColor = "white";

    star.style.transition = "0.5s";
}
    
    
    
function randomShiningStar()
{
    let stars = document.getElementsByClassName("star");
        
        
    // shinning 6 random stars
    for(let i = 0 ; i < 20 ; i ++)
    {
        let randomIndex = randomInRange(stars.length  , 0) ;
        console.log(randomIndex);
            
        // Use an IIFE to capture the correct randomIndex for each iteration
        (function (index) {
            applyGlowingEffect(stars[index]);
            setTimeout(function () {
            removeGlowingEffect(stars[index]);
        }, 500); // Increasing delay for each star
        })(randomIndex);
    }
        
}
    
    

function startRandomShiningInterval() {
    // Call randomShiningStar() initially
    randomShiningStar();
    console.log("shining??")
    // Set up interval to call randomShiningStar() every 10 seconds
    setInterval(randomShiningStar, 3000); // 10000 milliseconds = 10 seconds
}

// Call the function to start the interval
startRandomShiningInterval();

