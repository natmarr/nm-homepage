{
    const welcome = () => {
        console.log("Hello word!");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--grey");

        if (body.classList.contains("body--grey")) {
            themeName.innerText = "białe";
        } else {
            themeName.innerText = "szare";
        }
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");

        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

}


