function comment() {
    let usercomment = document.querySelector("#inputid").value;
    console.log(usercomment);

    if (usercomment === "") {
        document.querySelector("#commentid").innerHTML = "please enter comment"
        document.querySelector("#comment").style.color = "red"
    }
    else {
        document.querySelector("#commentid").innerHTML = usercomment;
        document.querySelector("#inputid").value = "";
        document.querySelector("#commentid").style.color = "blue"
    }
}
