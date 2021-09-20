var likes = 0;
function clickButton() {
    likes += 1;
    document.querySelector("#add").innerHTML = likes;
}