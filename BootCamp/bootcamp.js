let actualBox = [];

let items;
fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data.products);
    if (data.products) {
      actualBox = data.products;
      items = [...actualBox];
      console.log(actualBox);
    }
    displayData(data.products);
  });

const container = document.getElementById("container");
function displayData(data) {
  container.innerHTML = "";
  data.forEach((el) => {
    const div = document.createElement("div");

    div.style.border = "1px solid black";
    div.innerHTML = `
  
  <img src="${el.thumbnail}"/>
  <h2>${el.title}</h2>
  <p>Price:${el.price}</p>
  
  `;

    container.append(div);
  });
}

const sort = document.getElementById("sort");
const filterCategory = document.getElementById("filter");

function applyFilters() {


  if (filterCategory.value) {
    items = items.filter((el) => el.category == filterCategory.value);
  }
  
 else if (sort.value == "low") {
    items = items.sort((a, b) => a.price - b.price);

    console.log(items);
  } else if (sort.value == "high") {
    items = items.sort((a, b) => b.price - a.price);

    console.log(items);
  }

  else{
    displayData(actualBox);
    return
  }

  displayData(items);
}

sort.addEventListener("change", () => {
  applyFilters();
});

filterCategory.addEventListener("change", () => {
  applyFilters();
});
