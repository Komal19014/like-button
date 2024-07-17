let main = document.querySelector(".main");
let icon = document.querySelector("#icon");


main.addEventListener("dblclick", function(){
    icon.style.transform = "translate(-50% , -50%) scale(1)";
    setTimeout(function(){
        icon.style.transform = "translate(-50% , -50%) scale(0)";
    }, 1000)
})