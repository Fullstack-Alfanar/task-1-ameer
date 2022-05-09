if(localStorage.getItem('data')!=""){
    arr=JSON.parse(localStorage.getItem('data'));
}
else{
    arr=[];
}
var arr = [];
document.getElementById("btn").addEventListener('click', func);
function func() {
  let x1 =document.getElementById("nameproduct");
  let x2 =document.getElementById("price");
  let x3 =document.getElementById("selects");
  let x4 =document.getElementById("img");
  let x5 =document.getElementById("table");
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
    let ele1 = document.createElement("label");
    let ele2 = document.createElement("label");
    let ele3 = document.createElement("label");
    let ele4 = document.createElement("img");
    let ele5 = document.createElement("td");
    let ele6 = document.createElement("td");
    let ele7 = document.createElement("td");
    let ele8 = document.createElement("td");
    let ele9 = document.createElement("tr");
    ele1.textContent = x1.value;
    ele2.textContent = x2.value;
    ele3.textContent = x3.value;
    ele4.src = x4.value;
    ele4.className = "images";
    ele5.appendChild(ele1);
    ele6.appendChild(ele2);
    ele7.appendChild(ele3);
    ele8.appendChild(ele4);
    ele9.appendChild(ele5);
    ele9.appendChild(ele6);
    ele9.appendChild(ele7);
    ele9.appendChild(ele8);
    x5.appendChild(ele9);
    let y = {
      productname: x1.value,
      productprice: x2.value,
      producttype: x3.value,
    };
    arr.push(y);
    x1.value="";
    x2.value="";
    x3.value="";
    x4.value="";

    localStorage.setItem("data", JSON.stringify(arr));
  }
}


