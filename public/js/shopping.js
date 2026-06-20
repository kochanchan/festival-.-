// タブ
const tabs = document.querySelectorAll(".tab");

// リスト表示場所
const shoppingList = document.getElementById("shoppingList");

// 追加ボタン
const addItemBtn = document.getElementById("addItemBtn");

// メンバー情報ボタン
const memberInfoBtn = document.getElementById("memberInfoBtn");

// 進捗表示
const progressPercent = document.getElementById("progressPercent");
const progressInner = document.getElementById("progressInner");
const progressCount = document.getElementById("progressCount");


// 初期データ
const defaultItems = [
  {
    name: "紙コップ",
    count: "1",
    unit: "袋",
    role: "備品①",
    shop: "DAISO",
    status: "done"
  },
  {
    name: "しょう油",
    count: "1",
    unit: "本",
    role: "飲食②",
    shop: "スーパー",
    status: "notYet"
  }
];


// 保存されたリスト
let savedItems = JSON.parse(localStorage.getItem("shoppingItems"));

// リストがなければ初期データ
let items = savedItems || defaultItems;


// 今選んでいるタブ
let currentFilter = "all";


// リスト表示
function showList() {
  shoppingList.innerHTML = "";

  let filteredItems = items;

  if (currentFilter !== "all") {
    filteredItems = items.filter((item) => item.status === currentFilter);
  }

  filteredItems.forEach((item) => {

    const div = document.createElement("div");
    div.className = "shoppingItem";

   div.innerHTML = `
  <div>
    <div class="itemName">
      ${item.name}
    </div>

    <div class="itemCount">
      ${item.count || ""}${item.unit || ""}
    </div>
  </div>

  <div class="itemMiddle">
    ${
      item.image
        ? `<img class="itemImage" src="${item.image}">`
        : ``
    }

    <span>${item.role}</span>
  </div>

  <div class="itemShop">
    ${item.shop}
  </div>
`;

    shoppingList.appendChild(div);

  });

  updateProgress();
}


// 進捗更新
function updateProgress() {
  const total = items.length;
  const done = items.filter((item) => item.status === "done").length;

  let percent = 0;

  if (total > 0) {
    percent = Math.round((done / total) * 100);
  }

  progressPercent.textContent = percent + "%";
  progressInner.style.width = percent + "%";
  progressCount.textContent = done + "/" + total + "品目";
}


// タブ切り替え
tabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    tabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    currentFilter = tab.dataset.filter;

    showList();

  });

});


// 追加画面へ
addItemBtn.addEventListener("click", () => {
  location.href = "addshopping.html";
});


// メンバー情報へ
memberInfoBtn.addEventListener("click", () => {
  location.href = "member.html";
});


// 最初に表示
showList();