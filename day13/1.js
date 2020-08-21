let getWeather = () => {
    let cityName = document.querySelector("#textid").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=7de08cee454953a626c0cdd27b4d93fb&units=metric&q=" +
        cityName
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {

        const refJson = JSON.parse(xhr.responseText);

        console.log(refJson);
        domOperation(refJson);
    };
    xhr.send();
}

let domOperation = (refJson) => {
    console.log(refJson.main);
    const name = refJson.name;

    const maxTemp = refJson.main.temp_max;
    const parent = document.querySelector("#parent");

    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";
    newElement.innerHTML = name + " " + maxTemp;

    parent.insertBefore(newElement, parent.firstChild);
    document.querySelector("#textid").value = "";

};