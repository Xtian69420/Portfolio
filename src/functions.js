function copyToClipboard(element) {
    const text = element.innerText;
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".li").forEach(item => {
        item.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});


function fb(){
    window.open("https://www.facebook.com/chrstnsgn24/", "_blank")
}

function lin(){
    window.open("https://www.linkedin.com/in/christian-signo-070733323/", "_blank")
}

function ig(){
    window.open("https://www.instagram.com/chrstnsgn_", "_blank")
}

function gh(){
    window.open("https://github.com/Xtian69420", "_blank")
}

function betcha(){
    window.open("https://betcha-booking.netlify.app/", "_blank")
}

function imG(){
    window.open("https://xtian69420.github.io/Image-generator/", "_blank")
}

function hapag(){
    window.open("https://github.com/Xtian69420/HAPAG-FOOD-ENTHUSIAST-COMMUNITY", "_blank")
}

function malaya(){
    window.open("https://github.com/Xtian69420/MALAYA-GAME-BASED-LEARNING", "_blank")
}

function resume(){
    window.open("resume.html");
}