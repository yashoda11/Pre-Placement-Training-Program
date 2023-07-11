const loader = document.getElementById("loader");
const dataList = document.getElementById("dataList");

loader.style.display = "block";

// Fetch data from the API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    loader.style.display = "none";

    data.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item.title;
      dataList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.log("An error occurred while fetching the data:", error);
  });