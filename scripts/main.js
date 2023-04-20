const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/ant-man-3.jpeg") {
        myImage.setAttribute("src", "images/ant-man-3-2.jpg");
    }
    else {
        myImage.setAttribute("src", "images/ant-man-3.jpeg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
};

myButton.onclick = () => {
    setUserName();
};
