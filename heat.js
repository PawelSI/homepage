let changeBackgroundColor = document.querySelector(".changeBackgroundColor");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

changeBackgroundColor.addEventListener("click", () => {
    body.classList.toggle("AnotherBackground");

    themeName.innerText = body.classList.contains("AnotherBackground") ? "jasny" : "ciemny";
});