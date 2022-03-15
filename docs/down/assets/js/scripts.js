
// id="app-store-button" class="download-button" src="assets/images/apple-app-store-button.svg">
// <img id="google-play-button"

var popup = document.getElementById("email-modal-container");
var modalContent = document.getElementById("email-modal");
var appStoreButton = document.getElementById("app-store-button");
var googlePlayButton = document.getElementById("google-play-button");
var closeButton = document.querySelector("#email-modal .close-button");

var emailFormContainers = document.querySelectorAll(".email-form-container");
emailFormContainers.forEach((formContainer) => {
    var submitButton = formContainer.querySelector(":scope .primary-button");
    var form = formContainer.querySelector(":scope form");
    
    submitButton.addEventListener("click", ()=>{
        form.submit()
        hideElement(formContainer.querySelector(":scope .email-form"));
        showElement(formContainer.querySelector(":scope .thank-you"));
    })
})


appStoreButton.addEventListener("click", ()=>{showElement(popup)});
googlePlayButton.addEventListener("click", ()=>{showElement(popup)});
closeButton.addEventListener("click", ()=>{hideElement(popup)});

popup.addEventListener("click", (event)=>{
    if (!modalContent.contains(event.target)) {
        hideElement(popup)
    }
})

function showElement(element) {
    element.classList.remove("hidden");
}

function hideElement(element) {
    element.classList.add("hidden")
}