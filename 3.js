
const form = document.getElementById("travelForm");
const message = document.getElementById("message");

form.addEventListener("reset", function() {
    message.textContent = "";
});