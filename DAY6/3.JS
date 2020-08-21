var likeCounter = 1;
function likeHere() {
    likeCounter++;

    let btnElement = document.querySelector("#btnid");
    btnElement.innerHTML = "Like " + likeCounter;
}

function commentHere() {
    console.log("userComment12");
    let userComment = document.querySelector("#inputId").value
    console.log("userComment");
    //create new element
    let newElement = document.createElement("div");
    newElement.style.display = "flex";
    newElement.style.justifyContent = "space-between"
    newElement.style.marginBottom = "4px";

    let child1 = document.createElement("div");
    child1.textContent = userComment;
    let child2 = document.createElement("button");
    child2.textContent = "delete";

    //relationship among newly  

    newElement.appendChild(child1);
    newElement.appendChild(child2);


    const commentBox = document.querySelector("#commentBox");
    //commentBox.appendChild(newElement)
    commentBox.insertBefore(newElement, commentBox.firstChild);
    //clean the input box
    document.querySelector("#inputId1").value = "";
}

