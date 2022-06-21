let menu = document.querySelector("#menu");
menu.addEventListener("click", () =>

    {
        let navRight = document.querySelector("#navRight");
        navRight.classList.toggle("showMenu");
        navRight.classList.toggle("hidden");
        console.log("here");
    })

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navRight.classList.remove("showMenu");
        navRight.classList.add("hidden");
    }
})