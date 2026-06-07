// Firebaseを使うための準備
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// ログイン機能を使うための準備
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyAgqntTkXYbpQDzhjPOp0EPVbCaIGHwF0U",
  authDomain: "test-5d1f7.firebaseapp.com",
  projectId: "test-5d1f7",
  storageBucket: "test-5d1f7.firebasestorage.app",
  messagingSenderId: "214644337954",
  appId: "1:214644337954:web:3bdb1ff787a7cc60e2c97b",
  measurementId: "G-EE8HRQBBY4"
};

// Firebaseを開始
const app = initializeApp(firebaseConfig);

// ログイン機能を使えるようにする
const auth = getAuth(app);

// 他のJSファイルでもauthを使えるようにする
export { auth };