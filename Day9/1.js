
function submit() {
    let usercomment = document.querySelector("#inputid").value;
    console.log(usercomment);

    if (usercomment === "") {
        document.querySelector("#comment").innerHTML = "please enter comment"
        document.querySelector("#comment").style.color = "red"
    }
    else {
        document.querySelector("#comment").innerHTML = usercomment;
        document.querySelector("#inputid").innerHTML = "";
        document.querySelector("#comment").style.color = "blue"
    }



}