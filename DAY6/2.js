var likecounter = 1;
function LikeHere() {
    likecounter++;

    let btnElement = document.querySelector("#btnid");
    btnElement.innerHTML = "Like " + likecounter;
}
function CommentHere() {
    let userComment = document.querySelector("#inputid1").value;

    const newElement = document.createElement("div")
    newElement.style.display = "flex"
    newElement.style.justifyContent = "space-between"
    newElement.style.margin = "8px";

    const child1 = document.createElement("div");
    child1.textContent = userComment;

    const child2 = document.createElement("button");
    child2.textContent = "Delete";

    newElement.appendChild(child1);
    newElement.appendChild(child2);

    const commentBox = document.querySelector("#commentBox");

    commentBox.insertBefore(newElement, commentBox.firstChild);
    //clean the input Box
    Document.querySelector("#inputid1").Value = "";


};