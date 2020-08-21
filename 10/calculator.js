function add() {
    let a = document.querySelector(".input1").children[0].value;
    let b = document.querySelector(".input2").children[0].value;
    let c = parseInt(a) + parseInt(b);
    //document.querySelector("#id02").innerHTML = c;
    submit(c);

}
function sub() {
    let a = document.querySelector(".input1").children[0].value;
    let b = document.querySelector(".input2").children[0].value;
    var c = parseInt(a) - parseInt(b);
    //document.querySelector("#id01").innerHTML = c;
    submit(c);

}
function mult() {
    let a = document.querySelector(".input1").children[0].value;
    let b = document.querySelector(".input2").children[0].value;
    var c = parseInt(a) * parseInt(b);
    //document.querySelector("#id7").innerHTML = c;
    submit(c);
}
function div() {
    let a = document.querySelector(".input1").children[0].value;
    let b = document.querySelector(".input2").children[0].value;
    var c = parseInt(a) / parseInt(b);
    // document.querySelector("#id7").innerHTML = c;
    submit(c);
}
function mod() {
    let a = document.querySelector(".input1").children[0].value;
    let b = document.querySelector(".input2").children[0].value;
    var c = parseInt(a) % parseInt(b);
    // document.querySelector("#id7").innerHTML = c;
    submit(c);
}
function submit(c1) {

    document.querySelector("#id02").innerHTML = c1;

}
function num() {
    document.querySelector(".input1").children[0] = document.querySelector("#id6").innerHTML

}
