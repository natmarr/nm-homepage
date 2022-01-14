console.log("Hello word!");

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--grey");

    if (body.classList.contains("body--grey")) {
        themeName.innerText = "białe";
    } else {
        themeName.innerText = "szare";
    }
});
