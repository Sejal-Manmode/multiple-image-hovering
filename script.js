const elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1;
    })

    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0;
    })

    val.addEventListener("mousemove",function(info){
        val.childNodes[3].style.left = info.x + "px";
        // val.childNodes[3].style.top = info.y + "px";
    })
})






// var elemImg = document.querySelector("#elem1 img");

// elem1.addEventListener(
//     "mousemove", function(info){
//         elemImg.style.left = info.x + "px";
//         elemImg.style.top = info.y + "px";
//     }
// )

// elem1.addEventListener(
//     "mouseenter",
//     function(){
//         elemImg.style.opacity = 1;
//     }
// )

// elem1.addEventListener(
//     "mouseleave",
//     function(){
//         elemImg.style.opacity = 0;
//     }
// )