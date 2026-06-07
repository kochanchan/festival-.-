// Firebaseのログイン機能を読み込む
import { auth } from "./firebase.js";

// ログインに使う機能
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// HTMLとJavaScriptをつなぐ
const emailPage = document.getElementById("emailPage");
const passwordPage = document.getElementById("passwordPage");

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const nextBtn = document.getElementById("nextBtn");
const okBtn = document.getElementById("okBtn");
const eyeBtn = document.getElementById("eyeBtn");
const backBtn = document.getElementById("backBtn");
const createAccount = document.getElementById("createAccount");

// 次へボタン
nextBtn.addEventListener("click", () => {

  // メール未入力チェック
  if (emailInput.value === "") {
    alert("メールアドレスを入力してね");
    return;
  }

  // パスワード画面へ切り替え
  emailPage.classList.add("hidden");
  passwordPage.classList.remove("hidden");

});

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

// OKボタン
okBtn.addEventListener("click", async () => {

  // パスワード未入力チェック
  if (passwordInput.value === "") {
    alert("パスワードを入力してね");
    return;
  }

  try {
    // Firebaseでログイン
    await signInWithEmailAndPassword(
      auth,
      emailInput.value,
      passwordInput.value
    );

    // ログイン成功後にクラス選択画面へ移動
    location.href = "chooseclass.html";

  } catch (error) {
    alert("メールアドレスかパスワードが違うよ");
    console.log(error);
  }

});

// ×ボタン
backBtn.addEventListener("click", () => {

  // パスワード画面ならメール画面へ戻る
  if (!passwordPage.classList.contains("hidden")) {
    passwordPage.classList.add("hidden");
    emailPage.classList.remove("hidden");
  } else {
    alert("前の画面に戻る予定");
  }

});

// アカウント作成
createAccount.addEventListener("click", () => {
  location.href = "signup.html";
});