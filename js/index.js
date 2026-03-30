// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.right = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.right = "-100%";
};

function displayChef(selectedElement, chefName) {
  // 1. إزالة كلاس الاختيار من جميع الكروت
  const allCards = document.querySelectorAll(".chef-card");
  allCards.forEach((card) => card.classList.remove("selected"));

  // 2. إضافة كلاس الاختيار للعنصر الذي تم الضغط عليه
  selectedElement.classList.add("selected");

  // 3. التحكم في ظهور الاسم
  const nameDisplay = document.getElementById("chef-name-output");

  // إخفاء الاسم الحالي أولاً لعمل تأثير ناعم
  nameDisplay.classList.remove("active");

  setTimeout(() => {
    // تغيير النص
    nameDisplay.innerText = chefName;
    // إظهاره مجدداً
    nameDisplay.classList.add("active");
  }, 200);
}
function addToCart(itemName) {
  // جلب الزر الذي تم الضغط عليه
  const btn = event.target;
  const originalText = btn.innerText;

  // تغيير شكل الزر مؤقتاً
  btn.innerText = "تمت الإضافة! 🛒";
  btn.style.backgroundColor = "#27ae60";

  console.log("تم إضافة " + itemName + " إلى السلة.");

  setTimeout(() => {
    btn.innerText = originalText;
    btn.style.backgroundColor = ""; // يعود للون الأصلي في CSS
  }, 1500);
}

document
  .getElementById("cateringForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = this.querySelector(".mobile-submit-btn");

    // تغيير الحالة للشكل المنتظر
    btn.innerHTML = "جاري الحفظ... ⏳";
    btn.style.opacity = "0.8";

    // محاكاة الإرسال
    setTimeout(() => {
      btn.innerHTML = "تم حجز عزومتك! ✅";
      btn.style.background = "#27ae60";

      // اهتزاز خفيف للموبايلات التي تدعم ذلك
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(100);
      }

      setTimeout(() => {
        this.reset();
        btn.innerHTML = "تأكيد الحجز الآن ➜";
        btn.style.background = "#e67e22";
        btn.style.opacity = "1";
      }, 3000);
    }, 1500);
  });
function bookNow() {
  alert("تم توجيهك لحجز وجبتك مع الشيف مباشرة عبر واتساب 👩‍🍳");
}

setTimeout(() => {
  const stockCount = document.getElementById("stock-count");
  const progressFill = document.querySelector(".progress-fill");

  stockCount.innerText = "2";
  progressFill.style.width = "95%";

  // فلاش بسيط للفت الانتباه
  stockCount.style.color = "gold";
  setTimeout(() => (stockCount.style.color = "#e74c3c"), 500);
}, 10000);
// وظيفة نسيت كلمة المرور
function forgotPass() {
  const email = prompt("برجاء إدخال بريدك الإلكتروني لاستعادة كلمة المرور:");
  if (email) {
    alert("تم إرسال رابط إعادة التعيين إلى: " + email);
  }
}
document.getElementById("registerForm").onsubmit = function (e) {
  e.preventDefault();

  const pass = document.getElementById("pass").value;
  const confirm = document.getElementById("confirm").value;

  if (pass !== confirm) {
    alert("كلمات المرور غير متطابقة!");
    return;
  }

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    role: document.getElementById("role").value,
  };

  console.log("Success:", data);
  alert(`تم تسجيل ${data.name} بنجاح كـ ${data.role}`);
  this.reset();
};
// معالجة إنشاء الحساب
document.getElementById("registerForm").onsubmit = function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  // محاكاة نجاح العملية
  alert(`عاش يا ${name}! تم إنشاء حسابك كـ (${role}) بنجاح.`);

  // إعادة تعيين الفورم
  this.reset();
};
// وظائف السوشيال ميديا
function loginGoogle() {
  alert("جاري الاتصال بـ Google...");
}
function loginFB() {
  alert("جاري الاتصال بـ Facebook...");
}

// نسيت كلمة المرور
function handleForgot() {
  const email = prompt("أدخل بريدك الإلكتروني لإرسال كود استعادة كلمة المرور:");
  if (email) alert("تم إرسال الكود لبريدك: " + email);
}

// تسجيل الدخول الرئيسي
document.getElementById("loginForm").onsubmit = function (e) {
  e.preventDefault();
  const role = document.getElementById("loginRole").value;
  const user = document.getElementById("loginUser").value;

  if (role === "chef") {
    alert(`أهلاً بك يا شيف ${user}! مطبخك جاهز للعمل.`);
  } else if (role === "admin") {
    alert(`مرحباً سيادة المدير. جاري فتح لوحة التحكم.`);
  } else {
    alert(`أهلاً بك يا ${user}. نتمنى لك وجبة شهية!`);
  }

  // التوجيه بناءً على الرتبة
  // window.location.href = role + "-dashboard.html";
};
function toggleChef(element) {
  // لو الشيف ده مش متفعل، فعله واقفلي الباقي
  if (!element.classList.contains("active")) {
    document.querySelectorAll(".chef-item").forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  }
}
