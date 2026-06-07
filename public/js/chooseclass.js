// クラス作成ボタン
const createClassBtn = document.getElementById("createClassBtn");

// クラス参加ボタン
const joinClassBtn = document.getElementById("joinClassBtn");


// クラス作成ページへ移動
createClassBtn.addEventListener("click", () => {
  location.href = "createclass.html";
});


// クラス参加ページへ移動
joinClassBtn.addEventListener("click", () => {
  location.href = "joinclass.html";
});