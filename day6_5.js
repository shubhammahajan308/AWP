var likecounter = 1;
function Like() {
    //  var userlike = document.querySelector("#likeid");
    document.querySelector("#likeid").innerHTML = "like" + likecounter;
    likecounter++;
}

function comment() {
    let userComment = document.querySelector("#inputid1").value;

    const newElement = document.querySelector("#commentId").cloneNode(true);
    newElement.removeAttribute("id");

    newElement.children[0].innerHTML = userComment;
    newElement.style.visibility = "visible";
    const commentBox1 = document.querySelector("#commentBox");
    console.log(commentBox1);
    //  commentBox1.appendChild(newElement);
    commentBox.insertBefore(newElement, commentBox.firstChild);
    document.querySelector("#inputid1").value = "";


}

function deleteComment(btnelement) {
    btnelement.parentElement.remove();
}