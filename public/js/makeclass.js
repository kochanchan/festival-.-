// 戻るボタン
const backBtn = document.getElementById("backBtn");

// クラス名入力欄
const classNameInput = document.getElementById("classNameInput");

// 出し物名入力欄
const eventNameInput = document.getElementById("eventNameInput");

// リーダー名入力欄
const leaderNameInput = document.getElementById("leaderNameInput");

// 写真選択ボタン
const imageBtn = document.getElementById("imageBtn");

// 写真選択用input
const imageInput = document.getElementById("imageInput");

// 選んだ写真の表示
const previewImage = document.getElementById("previewImage");

// アイコン候補
const iconChoices = document.querySelectorAll(".iconChoice");

// クラスコード入力欄
const classCodeInput = document.getElementById("classCodeInput");

// コード作り直しボタン
const codeBtn = document.getElementById("codeBtn");

// 作成ボタン
const makeBtn = document.getElementById("makeBtn");

// 選んだアイコンを保存する箱
let selectedIcon = "";


// 戻るボタンを押した時
backBtn.addEventListener("click", () => {
  location.href = "chooseclass.html";
});


// アイコンを選んだ時
iconChoices.forEach((icon) => {

  icon.addEventListener("click", () => {

    iconChoices.forEach((item) => {
      item.classList.remove("selected");
    });

    icon.classList.add("selected");

    selectedIcon = icon.dataset.icon || "";

    // 写真プレビューを消す
    previewImage.style.display = "none";

  });

});


// 写真選択ボタンを押した時
imageBtn.addEventListener("click", () => {
  imageInput.click();
});


// 選んだ写真を押した時
previewImage.addEventListener("click", () => {
  imageInput.click();
});


// 写真が選ばれた時
imageInput.addEventListener("change", () => {

  const file = imageInput.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    selectedIcon = reader.result;

    previewImage.src = selectedIcon;
    previewImage.style.display = "block";

    iconChoices.forEach((item) => {
      item.classList.remove("selected");
    });

    imageBtn.classList.add("selected");
  };

  reader.readAsDataURL(file);

});


// クラスコードを作る関数
function makeCode() {
  const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";

  for (let i = 0; i < 6; i++) {
    code += text[Math.floor(Math.random() * text.length)];
  }

  classCodeInput.value = code;
}


// コード作り直しボタンを押した時
codeBtn.addEventListener("click", () => {
  makeCode();
});


// 作成ボタンを押した時
makeBtn.addEventListener("click", () => {

  const className = classNameInput.value;
  const eventName = eventNameInput.value;
  const leaderName = leaderNameInput.value;
  const classCode = classCodeInput.value;

  if (className === "" || eventName === "" || leaderName === "") {
    alert("入力してください");
    return;
  }

  const classData = {
    className: className,
    eventName: eventName,
    leaderName: leaderName,
    classCode: classCode,
    icon: selectedIcon,
    role: "leader"
  };

  localStorage.setItem("classData", JSON.stringify(classData));
  localStorage.setItem("joinedClass", "true");

  alert("クラスを作成しました");

  location.href = "home.html";
});


// ページを開いた時にコードを作る
makeCode();