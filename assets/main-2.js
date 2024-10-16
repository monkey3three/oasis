/* 
if you are gonna skid this please credit me! - frogiee1
*/

let titleText = "monkey3three";
let opacity = 0;
let fadeIn = true;
let delay = 0.007;

function updateTitle() {
    let displayText = titleText.charAt(0) + titleText.slice(1, Math.floor(opacity * (titleText.length - 1)) + 1);
    document.title = displayText;

    if (fadeIn) {
        opacity += delay;
        if (opacity >= 1) {
            fadeIn = false;
        }
    } else {
        opacity -= delay;
        if (opacity <= 0) {
            fadeIn = true;
        }
    }

    requestAnimationFrame(updateTitle);
}

document.getElementById('enter-popup').addEventListener('click', function() {
    let enterPopup = document.getElementById('enter-popup');
    let enterSound = document.getElementById('enter-sound');

    enterSound.play();
    enterPopup.style.transition = 'all 0.3s ease';
    enterPopup.style.opacity = '0';
    setTimeout(() => {
        enterPopup.style.display = 'none';
    }, 500); 

    requestAnimationFrame(updateTitle);
});






























/* 
if you are gonna skid this please credit me! - frogiee1
*/