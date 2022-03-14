
// id="app-store-button" class="download-button" src="assets/images/apple-app-store-button.svg">
// <img id="google-play-button"

var popup = document.getElementById("email-modal-container");
var modalContent = document.getElementById("email-modal");
var appStoreButton = document.getElementById("app-store-button");
var googlePlayButton = document.getElementById("google-play-button");
var closeButton = document.querySelector("#email-modal .close-button")
appStoreButton.addEventListener("click", ()=>{showElement(popup)});
googlePlayButton.addEventListener("click", ()=>{showElement(popup)});
closeButton.addEventListener("click", ()=>{hideElement(popup)})


popup.addEventListener("click", (event)=>{
    if (!modalContent.contains(event.target)) {
        hideElement(popup)
    }
})

function showElement(element) {
    alert(element)
    element.classList.remove("hidden");
}

function hideElement(element) {
    element.classList.add("hidden")
}