// Alastyr Bill
// ITMD 441-01 Undergraduate Student

// 1. 
(function(){
   document.querySelector("#hero h1").textContent = "Uplift Your Brand with Stellar Marketing"
})();

// 2.
(function() {
    document.querySelector("#hero p").innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</b></i> and <b><i>excel</b></i>."
})();

// 3.
(function() {
    const heroBackground = document.querySelector("#hero");
    if (heroBackground) {
        heroBackground.style.backgroundImage = "url('https://fastly.picsum.photos/id/683/1280/720.jpg?hmac=MorP0xeZ8ldA3Xsf3cmIbrsN-jz3Omu7piIVSyv3jMk')";
    }
})();

// 4.
(function() {
    const headerBackground = document.querySelector("header");
    if (headerBackground){
        headerBackground.style.background = "#1F2937";
    }
})();

// 5.
(function() {
    const buttonCTA = document.querySelector("#hero > a")
    buttonCTA.remove();
})();

// 6.
(function() {
    document.querySelectorAll("h2").forEach(function(heading) {
        heading.style.textAlign = "center"
    })
})();

// 7.
(function() {
    const iconsColor = document.querySelectorAll(".material-symbols-outlined");
    iconsColor.forEach(function(iconColor) {
        iconColor.style.color = "#47C714";
    });
})();

// 8.
(function() {
    document.querySelector("#services > div > div > div:nth-child(1) > span").textContent = "ads_click";
})();

// 9.
(function() {
    const grid = document.querySelector("#solutions > div > div");
    if (grid) {
        function updateLayout() {
            if (window.innerWidth >= 1024) {
                grid.style.gridTemplateColumns = "repeat(4, 1fr)";
            } else {
                grid.style.gridTemplateColumns = "repeat(2, 1fr)";
            }
        }
    updateLayout();
    window.addEventListener("resize", updateLayout);
    }
})();

// 10.
(function() {
    const image = document.querySelector("#solutions > div > div > div:nth-child(4) > img");
    if (image) {
        image.src = "https://picsum.photos/id/453/400/300";
    }
})();