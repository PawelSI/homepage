{
    const welcome = () => {
        console.log("Witam serdecznie wszystkich developerów, którzy tutaj zaglądają!")
    }

    const onChangeNackgroundClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("AnotherBackground");

        themeName.innerText = body.classList.contains("AnotherBackground") ? "jasny" : "ciemny";
    };

    const init = () => {
        const changeBackgroundColor = document.querySelector(".changeBackgroundColor");

        changeBackgroundColor.addEventListener("click", onChangeNackgroundClick);

        welcome()

    };

    init();

}