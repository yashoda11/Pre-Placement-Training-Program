var squareBox = document.getElementById("box");

squareBox.addEventListener("click" , (c) => {

    squareBox.style.backgroundColor = "yellow";
    squareBox.style.width = "600px";    // upon clicking the size (width) be doubled
    squareBox.style.height = "600px";  // upon clicking the size (width) be doubled

});