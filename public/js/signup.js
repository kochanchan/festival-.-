// Firebaseのログイン機能を読み込む
import { auth } from "./firebase.js";

// 新規登録に使う機能
import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// 入力欄とボタン
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const okBtn = document.getElementById("okBtn");
const backBtn = document.getElementById("backBtn");

// OKボタン
okBtn.addEventListener("click", async () => {

  // 未入力チェック
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("全部入力してね");
    return;
  }

  try {
    // Firebaseにアカウントを作成
    await createUserWithEmailAndPassword(
      auth,
      emailInput.value,
      passwordInput.value
    );

    alert("新規登録できたよ");

    // 登録後にログイン画面へ移動
    location.href = "login.html";

  } catch (error) {
    alert("新規登録できなかったよ");
    console.log(error);
  }

});

// ×ボタン
backBtn.addEventListener("click", () => {
  location.href = "login.html";
});

// 🐵ボタン
// 🐵ボタン
const eyeBtn = document.getElementById("eyeBtn");


// パスワード表示切り替え
eyeBtn.addEventListener("click", () => {

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeBtn.textContent = "🐵";
  } else {
    passwordInput.type = "password";
    eyeBtn.textContent = "🙈";
  }

});