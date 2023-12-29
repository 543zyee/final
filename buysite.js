function toggleMenu() {
    var menu = document.getElementById("main-menu");
    menu.classList.toggle("active");
    console.log("Menu Toggled");
}

// 儲存用戶登入狀態的變數
var isUserLoggedIn = false;

// 獲取會員專區按鈕和購物車按鈕的元素
var memberAreaBtn = document.getElementById('user-buttons');
var cartBtn = document.getElementById('buybag-buttons');

// 添加點擊事件監聽器
memberAreaBtn.addEventListener('click', function() {
    // 檢查用戶是否已登入
    if (isUserLoggedIn) {
        // 如果已登入，連結到會員專區
        window.location.href = 'member.html';
    } else {
        // 如果未登入，連結到會員登入畫面
        window.location.href = 'login.html';
    }
});

cartBtn.addEventListener('click', function() {
    // 檢查用戶是否已登入
    if (isUserLoggedIn) {
        // 如果已登入，連結到購物車
        window.location.href = 'buybag.html';
    } else {
        // 如果未登入，連結到會員登入畫面
        window.location.href = 'login.html';
    }
});

function submitReview() {
    // 獲取評價和評論的值
    var rating = document.getElementById("rating").value;
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
    if (reviewSection.innerHTML.trim() !== "") {
        reviewInput.style.display = "none";
    } else {
        // 否則，顯示輸入板塊
        reviewInput.style.display = "block";
    }
}

// 更新評價星數的顯示
function updateStarRating() {
    var starRating = document.getElementById("star-rating");
    var ratingDisplay = document.getElementById("rating");
    ratingDisplay.innerText = starRating.value;
}

// 在初始化時設定評價星數的顯示
updateStarRating();

// 初始化時檢查評價及評論的狀態
checkReviewStatus();

let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;

    // 移除所有星星的 active class
    let stars = document.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('active'));

    // 將被選中的星星加上 active class
    for (let i = 1; i <= rating; i++) {
        stars[i - 1].classList.add('active');
    }
}

// 這樣你就可以使用 selectedRating 來獲取當前選中的星數