function toggleMenu() {
    var menu = document.getElementById("main-menu");
    menu.classList.toggle("active");
    console.log("Menu Toggled");
}

// Check login status
function checkLoginStatus() {
    // Get the value of the "isLogin" key from sessionStorage
    let isLogin = sessionStorage.getItem('isLogin');
  
    // Check if the user is logged in
    if (isLogin === 'true') {
        return true;
    } else {
        return false;
    }
}

function login() {
    // after login
    // set session and redirect to member data page
    sessionStorage.setItem('isLogin', 'true');

    // redirect to meber.html
    var parentRoutes = window.location.pathname.split('/');
    parentRoutes.pop();
    var parentRoute = parentRoutes.join('/');
    window.location.href = parentRoute + "/meber.html";
}

function checkLogin(functionName) {
    var isLogin = checkLoginStatus();
    console.log("isLogin", isLogin);
    console.log("functionName", functionName);

    var parentRoutes = window.location.pathname.split('/');
    parentRoutes.pop();
    var parentRoute = parentRoutes.join('/');
    
    if (functionName == 'member') {
        // 會員專區
        isLogin ? window.location.replace(parentRoute + "/meber.html") : window.location.replace(parentRoute + "/login.html");
    } else {
        // 購物袋
        isLogin ? window.location.replace(parentRoute + "/buybag.html") : window.location.replace(parentRoute + "/login.html");
    }
}

function submitReview() {
    // 獲取評價和評論的值
    var rating = document.getElementById("star-rating").getAttribute("current-rate");
    var comment = document.getElementById("comment").value;

    // 在review-section中顯示已輸入的評價及評論
    var reviewSection = document.getElementById("review-section");
    reviewSection.innerHTML = "<p>評價：" + rating + "星</p><p>評論：" + comment + "</p>";

    // 隱藏輸入板塊
    var reviewInput = document.getElementById("review-input");
    reviewInput.style.display = "none";
}

// 檢查是否已評價及評論，根據情況顯示輸入板塊
function checkReviewStatus() {
    var reviewSection = document.getElementById("review-section");
    var reviewInput = document.getElementById("review-input");

    // 如果評價及評論存在，隱藏輸入板塊
    if (reviewSection != null && reviewInput != null) {
        if (reviewSection.innerHTML.trim() !== "") {
            console.log('none')
            reviewInput.style.display = "none";
        } else {
            // 否則，顯示輸入板塊
            reviewInput.style.display = "block";
            console.log('block')
        }
    }
}

// 在初始化時設定評價星數的顯示 >> 評價星數直接在 html 檔案裡面的 current-rate 的 attribute 設定就好
// updateStarRating();

// 初始化時檢查評價及評論的狀態
checkReviewStatus();

let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;

    // setup current-rate & #rating
    document.getElementById("star-rating").setAttribute("current-rate", rating);
    if (document.getElementById("rating") != null) {
        document.getElementById("rating").innerText = selectedRating;
    }

    // 移除所有星星的 active class
    let stars = document.querySelectorAll('.stars');
    stars.forEach(star => star.classList.remove('active'));

    // 將被選中的星星加上 active class
    for (let i = 1; i <= rating; i++) {
        stars[i - 1].classList.add('active');
    }
}
// 使用 selectedRating 來獲取當前選中的星數


// 頁面滾動時隱藏 head & footer
let header = document.getElementsByTagName('header');
let footer = document.getElementsByTagName('footer');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header[0].style.transform = 'translateY(-100%)'; // 向下滚动时隐藏页头
    footer[0].style.transform = 'translateY(100%)'; // 向下滚动时隐藏页脚
  } else {
    header[0].style.transform = 'translateY(0)'; // 向上滚动时显示页头
    footer[0].style.transform = 'translateY(0)'; // 向上滚动时显示页脚
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 适配移动端
});