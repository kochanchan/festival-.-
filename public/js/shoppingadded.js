const lastAddedItem = JSON.parse(localStorage.getItem("lastAddedItem"));

const itemImage = document.getElementById("itemImage");
const itemName = document.getElementById("itemName");
const itemCount = document.getElementById("itemCount");
const itemRole = document.getElementById("itemRole");
const itemShop = document.getElementById("itemShop");
const itemMemo = document.getElementById("itemMemo");
const checkListBtn = document.getElementById("checkListBtn");

if (lastAddedItem) {
  itemName.textContent = lastAddedItem.name;
  itemCount.textContent = lastAddedItem.count + lastAddedItem.unit;
  itemRole.textContent = lastAddedItem.role;
  itemShop.textContent = "店舗：" + lastAddedItem.shop;

  if (lastAddedItem.memo) {
    itemMemo.textContent = "メモ：" + lastAddedItem.memo;
  }

  if (lastAddedItem.image) {
    itemImage.innerHTML = `<img src="${lastAddedItem.image}" alt="商品画像">`;
  }
}

checkListBtn.addEventListener("click", () => {
  location.href = "shopping.html";
});