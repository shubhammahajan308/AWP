let callAjax = () => {
    console.log("calling Ajax Here!!!");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        console.log(xhr.responseText);

        const refJson = JSON.parse(xhr.responseText);

        handleDOMOperationUsingJSON(refJson);


    };
    xhr.send();
};


let handleDOMOperationUsingJSON = (refJson) => {
    for (let i = 0; i < refJson.length; i++) {
        let item = refJson[i];
        console.log(item);

        const parent = document.querySelector("#parent");
        const newElement = parent.children[0].cloneNode(true);



    }
}