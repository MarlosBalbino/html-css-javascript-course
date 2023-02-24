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
