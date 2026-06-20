// 保存したクラス情報
const savedClassData = localStorage.getItem("classData");

// 表示する場所
const className = document.getElementById("className");
const userRole = document.getElementById("userRole");
const eventName = document.getElementById("eventName");
const classCode = document.getElementById("classCode");
const classIcon = document.getElementById("classIcon");

// 画像選択用input
const iconInput = document.getElementById("iconInput");

// 管理ボタン
const classCodeBtn = document.getElementById("classCodeBtn");
const memberBtn = document.getElementById("memberBtn");
const roleBtn = document.getElementById("roleBtn");
const noticeBtn = document.getElementById("noticeBtn");


// クラス情報を表示
if (savedClassData) {

  const classData = JSON.parse(savedClassData);

  className.textContent = classData.className;
  eventName.textContent = "出し物：" + classData.eventName;
  classCode.textContent = "クラスコード：" + classData.classCode;

  if (classData.roleName) {
    userRole.textContent = classData.roleName;
  } else if (classData.role === "leader") {
    userRole.textContent = "リーダー";
  } else {
    userRole.textContent = "生徒";
  }

  if (classData.icon && classData.icon.startsWith("data:image")) {
    classIcon.innerHTML = `<img src="${classData.icon}" alt="アイコン">`;
  } else if (classData.icon) {
    classIcon.textContent = classData.icon;
  }

}


// アイコンを押した時
classIcon.addEventListener("click", () => {
  iconInput.click();
});


// 画像を選んだ時
iconInput.addEventListener("change", () => {

  const file = iconInput.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    const newIcon = reader.result;

    classIcon.innerHTML = `<img src="${newIcon}" alt="アイコン">`;

    const classData = JSON.parse(localStorage.getItem("classData"));
    classData.icon = newIcon;

    localStorage.setItem("classData", JSON.stringify(classData));
  };

  reader.readAsDataURL(file);

});


// ページ移動
classCodeBtn.addEventListener("click", () => {
  location.href = "classcode.html";
});

memberBtn.addEventListener("click", () => {
  location.href = "member.html";
});

roleBtn.addEventListener("click", () => {
  location.href = "role.html";
});

noticeBtn.addEventListener("click", () => {
  location.href = "noticecreate.html";
});