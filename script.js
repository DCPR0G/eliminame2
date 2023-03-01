const textHI = document.querySelector(".welcome-hi-container");
const textHIanimation = document.querySelector(".welcome-hi-animation")
const textHIanimationStick = document.querySelector(".welcome-hi-animation-stick")

setTimeout(() => {
    textHI.style.left = `20%`
    setTimeout(() => {
        textHI.style.opacity = 1
        setTimeout(() => {
            textHIanimation.style.transform = `translate(150px, -25px)`
        }, 200);
    }, 350);
}, 1500);

