function handleMouseOver() {
    console.log("I have successfully called");

    var id2Element = document.querySelector("#id2");
    id2Element.style.background = "pink";
    id2Element.style.color = "royalblue";
    id2Element.innerHTML = "Hello Id Selectors!!";
}
function handleMouseOut() {
    let id2Element = document.querySelector("#id2");
    id2Element.style.background = "yellow";
    id2Element.style.color = "black";

    id2Element.innerHTML = "Hello world";
}