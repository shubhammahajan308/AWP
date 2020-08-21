function handleMouseOver() {
    var id2Element = document.querySelector(".beautify");
    id2Element.style.background = "royalblue";
    id2Element.style.color = "pink";
    id2Element.innerHTML = "Hello class selector!!";
}
function handleMouseOut() {
    var id2Element = document.querySelector(".beautify");
    id2Element.style.background = "red";
    id2Element.style.color = "blue";
    id2Element.innerHTML = "Hello World";
}
