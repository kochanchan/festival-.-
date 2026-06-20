const backBtn = document.getElementById("backBtn");
const addBtn = document.getElementById("addBtn");
const imageInput = document.getElementById("imageInput");

let selectedImage = "";

backBtn.addEventListener("click", () => {
  location.href = "shopping.html";
});

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    selectedImage = reader.result;
  };

  reader.readAsDataURL(file);
});

addBtn.addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const count = document.getElementById("countInput").value;
  const unit = document.getElementById("unitSelect").value;
  const role = document.getElementById("roleSelect").value;
  const shop = document.getElementById("shopSelect").value;
  const memo = document.getElementById("memoInput").value;

  if (name === "") {
    alert("商品名を入力してね");
    return;
  }

  let items = JSON.parse(localStorage.getItem("shoppingItems")) || [];

  const newItem = {
    name: name,
    count: count,
    unit: unit,
    role: role,
    shop: shop,
    memo: memo,
    image: selectedImage,
    status: "notYet"
  };

  items.push(newItem);

  localStorage.setItem("shoppingItems", JSON.stringify(items));

  localStorage.setItem("lastAddedItem", JSON.stringify(newItem));

  location.href = "shoppingadded.html";
});