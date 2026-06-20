// フッターを表示する場所
const footerArea = document.getElementById("footerArea");


// フッターを作る
footerArea.innerHTML = `
<div class="footer">

  <button class="footerBtn" id="footerHome">
    <span>⌂</span>
    <p>ホーム</p>
  </button>

  <button class="footerBtn" id="footerShopping">
    <span>🛒</span>
    <p>買い出し</p>
  </button>

  <button class="footerBtn" id="footerProgress">
    <span>📋</span>
    <p>進捗</p>
  </button>

  <button class="footerBtn" id="footerNotice">
    <span>🔔</span>
    <p>お知らせ</p>
  </button>

</div>
`;


// ホーム
document.getElementById("footerHome").addEventListener("click", () => {

  if (!location.href.includes("home.html")) {
    location.href = "home.html";
  }

});


// 買い出し
document.getElementById("footerShopping").addEventListener("click", () => {

  if (!location.href.includes("shopping.html")) {
    location.href = "shopping.html";
  }

});


// 進捗
document.getElementById("footerProgress").addEventListener("click", () => {

  if (!location.href.includes("progress.html")) {
    location.href = "progress.html";
  }

});


// お知らせ
document.getElementById("footerNotice").addEventListener("click", () => {

  if (!location.href.includes("notice.html")) {
    location.href = "notice.html";
  }

});