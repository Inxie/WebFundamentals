function burbankAlert() {
    alert("You've clicked on Burbank! Loading weather report...");
}

function chicagoAlert() {
    alert("You've clicked on Chicago! Loading weather report...");
}

function dallasAlert() {
    alert("You've clicked on Dallas! Loading weather report...");
}

function cToF() {
    document.querySelector("#hotTemp1").innerText = "75°";
    document.querySelector("#coldTemp1").innerText = "65°";
    document.querySelector("#hotTemp2").innerText = "80°";
    document.querySelector("#coldTemp2").innerText = "66°";
    document.querySelector("#hotTemp3").innerText = "69°";
    document.querySelector("#coldTemp3").innerText = "61°";
    document.querySelector("#hotTemp4").innerText = "78°";
    document.querySelector("#coldTemp4").innerText = "70°";
}

function removeCookies() {
    document.querySelector(".cookieBanner").remove();
}