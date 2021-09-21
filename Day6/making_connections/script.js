function changeName() {
    document.querySelector("#janem").innerText = "Maria J";
}

var num2 = 2;

function removeLine1() {
    var takeAway1 = document.querySelector(".todd");
    takeAway1.remove();

    num2 -=1;
    var changeNum1 = document.querySelector("#num2").innerText = num2;
}

function removeLine2() {
    var takeAway2 = document.querySelector(".phil");
    takeAway2.remove();

    num2 -=1;
    var changeNum1 = document.querySelector("#num2").innerText = num2;
}

