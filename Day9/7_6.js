function readValue() {
    let a = document.querySelector("#id1").value;
    console.log(a);

    let b = document.querySelector("#id2").value;
    console.log(b);

    // let c = documment.querySelector("#id3");
    //c.innerHTML = a + "" + b;
    document.querySelector("#id3").innerHTML = a + b;
    //let d = documment.querySelector("#id3");
    //d.innerHTML= b;

    document.querySelector("#id1") = "";
    document.querySelector("#id2") = "";


}