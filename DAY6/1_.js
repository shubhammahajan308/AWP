var likeCounter = 1;

function CommentHere() {
    let userComment = document.querySelector("#inputId1").value;


    //create new element
    const newElement = document.createElement("div");
    newElement.textContent = userComment;

    //add styling to new element
    newElement.style.background = "royalblue";
    newElement.style.color = "white";
    newElement.style.margin = "4px";

    //comment box element
    const commentBox = document.querySelector("#CommentBox");

    commentBox.insertBefore(newElement, commentBox.firstChild);

    document.querySelector("#inputId1").value = "";

}

function likehere() {
    likeCounter++;

    let btnElement = document.querySelector("#btnid");
    btnElement.innerHTML = "Like" + likeCounter;
}