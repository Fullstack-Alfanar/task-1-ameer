let arr = [];
document.getElementById("btn").addEventListener("click", () => {
  let x1 = document.getElementById("nameproduct");
  let x2 = document.getElementById("price");
  let x3 = document.getElementById("selects");
  let x4 = document.getElementById("img");
  if (x1.value == "" || x1.value == null) {
    alert("please enter a product name");
  } else if (x2.value == "" || x2.value == null) {
    alert("please enter a product price");
  } else if (isNaN(x2.value)) {
    alert("you must enter a number");
  } else if (x3.value == "" || x3.value == null) {
    alert("choose a product from the list");
  } else if (x4.value == "") {
    alert("put a product image");
  } else {
    let y = {
      productname: x1.value,
      productprice: x2.value,
      producttype: x3.value,
      imageurl: x4.value,
    };
    arr.push(y);
    inserttotable(y);
    localStorage.setItem("data", JSON.stringify(arr));

    x1.value = "";
    x2.value = "";
    x3.value = "";
    x4.value = "";
  }
});
function inserttotable(y) {
  let x5 = document.getElementById("table");
  let ele1 = document.createElement("label");
  let ele2 = document.createElement("label");
  let ele3 = document.createElement("label");
  let ele4 = document.createElement("img");
  let removeBtn = document.createElement("input");

  let ele5 = document.createElement("td");
  let ele6 = document.createElement("td");
  let ele7 = document.createElement("td");
  let ele8 = document.createElement("td");
  let removeTd = document.createElement("td");

  let ele9 = document.createElement("tr");
  ele1.textContent = y.productname;
  ele2.textContent = y.productprice;
  ele3.textContent = y.producttype;
  ele4.src = y.imageurl;
  ele4.className = "images";
  ele5.appendChild(ele1);
  ele6.appendChild(ele2);
  ele7.appendChild(ele3);
  ele8.appendChild(ele4);
  removeTd.appendChild(removeBtn);
  ele9.appendChild(ele5);
  ele9.appendChild(ele6);
  ele9.appendChild(ele7);
  ele9.appendChild(ele8);
  ele9.appendChild(removeTd);
  x5.appendChild(ele9);
  removeBtn.type = "button";
  removeBtn.value = "remove";
  removeBtn.addEventListener("click", () => {
    let deleteIndex = arr.findIndex((val, y) => {
      if (
        val.name == y.productname &&
        val.price == y.productprice &&
        val.type == y.producttype &&
        val.imageURL == y.imageurl
      )
        return true;
    });
    arr.splice(deleteIndex, 1);

    localStorage.setItem('data', JSON.stringify(arr));
    ele9.remove();
  });
}
function fetchLocalStorage() {
  if (localStorage.getItem("data")) {
    arr = JSON.parse(localStorage.getItem("data"));
    for (const prod of arr) {
      inserttotable(prod);
    }
  }
}

fetchLocalStorage();
