
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
    var closeButton = document.querySelector(":scope .close-button");

    closeButton.addEventListener("click", ()=>{closeModal(popup)});
})

function submitClicked(element) {
    var form = element.parentElement
    form.submit();
    // Get email from current form
    var email = form.querySelector(":scope .text-box").value
    // Prefill questionnaire with email
    document.querySelectorAll(".thank-you a").forEach((a) => {a.href = "https://docs.google.com/forms/d/e/1FAIpQLSf_CSGif3vEyN7YZrHCj6nCHdGNc9G_fJWHhSwt8e7DMX9GTQ/viewform?usp=pp_url&entry.533643041=" + email;})
    // Clear email values from all forms and swap forms for thank-you message
    document.querySelectorAll("form .text-box").forEach((textBox) => {textBox.value = ""});
    document.querySelectorAll(".email-form").forEach((emailForm) => {hideElement(emailForm)});
    document.querySelectorAll(".thank-you").forEach((thankYou) => {showElement(thankYou)});
}

function handleTextBoxKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitClicked(event.target);
    }
}

function showModal(modal) {
    showElement(modal);
    document.body.classList.add("no-scroll");
}

function closeModal(modal) {
    hideElement(modal);
    document.body.classList.remove("no-scroll");
}

appStoreButton.addEventListener("click", ()=>{showModal(popup)});
googlePlayButton.addEventListener("click", ()=>{showModal(popup)});


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