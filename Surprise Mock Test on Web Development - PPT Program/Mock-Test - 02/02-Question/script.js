const inputBox = document.getElementById("inputBox");
const submitButtom = document.getElementById("submitButtom");
const itemsList = document.getElementById("listItems");

submitButtom.addEventListener("click", (s) => {
    const newItem = document.createElement("li");
    newItem.textContent = inputBox.value;
    itemsList.appendChild(newItem);
    inputBox.value = "";

});