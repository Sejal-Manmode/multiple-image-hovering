const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");

main.addEventListener(
    "mousemove", function(info){
        cursor.style.left = info.x + "px";
        cursor.style.top = info.y + "px";
    }
)