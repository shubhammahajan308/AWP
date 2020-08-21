function handleMouseOver() {
    var id2Element = document.querySelector("div").children[0];
    id2Element.style.background = "gold";
    id2Element.style.color = "black";

    id2Element.innerHTML = "Hello Element Selector!!";
}

function handleMouseOut() {
    let id2Element = document.querySelector("div").children[0];
    id2Element.style.background = "red";
    id2Element.style.color = "blue";

    id2Element.innerHTML = "HELLO WORLD";

}