function callAjaxJson() {
    let xhr = new XMLHttpRequest();


    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        const refJson = JSON.parse(xhr.responseText);

        jsonDemoOperation(refJson);
    };
    xhr.send();
};

let jsonDemoOperation = function (refJson) {
    console.log(refJson);
    let parent = document.querySelector("#parent");

    for (let i = 0; i < refJson.length; i++) {
        let item = refJson[i];

        let newElement = parent.children[0].cloneNode(true);
        newElement.innerHTML = item.FirstName + " " + item.LastName;

        parent.insertBefore(newElement, parent.firstChild);

    }
};
let callAjaxXML = function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () => {
        let xmldoc = xhr.responseXML;

        xmlDomHandler(xmldoc);
    };

    xhr.send();
};

let xmlDomHandler = (xmldoc) => {
    const authorList = xmldoc.querySelectorAll("Author");

    for (let i = 0; i < authorList.length; i++) {
        const author = authorList[i];
        console.log(author);
        const firstName = author.children[0].innerHTML;

        const parent = document.querySelector("#parent");

        const newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = firstName;

        parent.insertBefore(newElement, parent.firstChild);
    }
};