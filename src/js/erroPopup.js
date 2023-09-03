document.addEventListener("DOMContentLoaded", async function  () {
    popupContainer.addEventListener("click", function (event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    });

    document.querySelector("#close").addEventListener("click", function(){
        document.querySelector(".popup-container").style.display = "none";
    });
});