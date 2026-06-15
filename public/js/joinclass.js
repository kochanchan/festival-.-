// 戻るボタン
const backBtn = document.getElementById("backBtn");

// クラスコード入力欄
const classCodeInput = document.getElementById("classCodeInput");

// ニックネーム入力欄
const nicknameInput = document.getElementById("nicknameInput");

// 参加ボタン
const joinBtn = document.getElementById("joinBtn");


// 戻るボタンを押した時
backBtn.addEventListener("click", () => {

  location.href = "chooseclass.html";

});


// 参加ボタンを押した時
joinBtn.addEventListener("click", () => {

  // 入力内容
  const classCode = classCodeInput.value;
  const nickname = nicknameInput.value;

  // 未入力チェック
  if (classCode === "" || nickname === "") {

    alert("入力してください");

    return;
  }

  // 名前を保存
  localStorage.setItem("nickname", nickname);

  // クラスコードを保存
  localStorage.setItem("classCode", classCode);

  // 完了メッセージ
  alert("クラスに参加しました");

  // 次の画面へ
  location.href = "classhome.html";

});