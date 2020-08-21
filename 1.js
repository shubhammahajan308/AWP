function submit() {
    let a = document.querySelector("div").children[0].value;
    let b = document.querySelector("div").children[1].value;
    let c = parseInt(a) + parseInt(b);
    document.querySelector("#id2").innerHTML = c;

}