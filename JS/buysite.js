// 公共函數，用於重定向頁面
function redirectToPage(pageName) {
    var parentRoutes = window.location.pathname.split('/');
    parentRoutes.pop();
    var parentRoute = parentRoutes.join('/');
    window.location.replace(parentRoute + "/" + pageName + ".html");
}

//頁首&頁尾&選單
function toggleMenu() {// 切換選單可見性
    var menu = document.getElementById("main-menu");
    menu.classList.toggle("active");
    console.log("Menu Toggled");
}

// 頁面滾動時隱藏 header 和 footer
let header = document.getElementsByTagName('header');
let footer = document.getElementsByTagName('footer');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        header[0].style.transform = 'translateY(-100%)';
        footer[0].style.transform = 'translateY(100%)';
    } else {
        header[0].style.transform = 'translateY(0)';
        footer[0].style.transform = 'translateY(0)';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

//buysite首頁

// 圖片輪播
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
}

function prevSlide() {
    slideIndex -= 2;
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slides img').length - 1;
    }
    showSlides();
    }

function nextSlide() {
    showSlides();
}

setInterval(showSlides, 3000); // 自動切換圖片，每 3 秒切換一次

//訪客計數器
// 檢查是否存在訪客計數，如果不存在，則初始化為 0
window.onload = function () {
    if (!localStorage.getItem('visitorCount')) {
        localStorage.setItem('visitorCount', '0');
    }
    updateVisitorCount(); // 檢查是否存在訪客計數，如果不存在，則初始化為 0
}  ;

// 更新訪客計數
function updateVisitorCount() {
    var countElement = document.getElementById('count');
    var visitorCount = localStorage.getItem('visitorCount');
    countElement.innerText = visitorCount;// 將訪客計數顯示在頁面上
    }

// 增加訪客計數
function incrementVisitorCount() {
    var visitorCount = parseInt(localStorage.getItem('visitorCount')) + 1;
    localStorage.setItem('visitorCount', visitorCount.toString());
    updateVisitorCount();// 更新訪客計數並顯示
}

// 在頁面載入時自動執行增加訪客計數的函數
incrementVisitorCount();

//Login登入
// 登入邏輯處理
function login() {
    event.preventDefault();// 阻止表單默認提交
}

// 檢查登入狀態
function checkLoginStatus() {
    return sessionStorage.getItem('isLogin') === 'true';
}

// 登入函數
function login() {
    sessionStorage.setItem('isLogin', 'true');
    redirectToPage("meber");
}

// 檢查登入狀態並執行相應功能
function checkLogin(functionName) {
    var isLogin = checkLoginStatus();
    console.log("isLogin", isLogin);
    console.log("functionName", functionName);

    if (functionName === 'member' || functionName === 'buybag') {
        isLogin ? redirectToPage(functionName) : redirectToPage("login");
    }
}

//Signin註冊
// 表單驗證邏輯處理
function validateForm() {
    event.preventDefault();// 阻止表單默認提交
}

//密碼和確認密碼
function validateForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;// 修改表達式
    if (!passwordRegex.test(password)) {
        alert('密碼必須包含大、小寫英文字母與數字，且至少 8 個字符');
        return false;
    }
    // 檢查確認密碼是否相符
    if (password !== confirmPassword) {
        alert('密碼及確認密碼不符');
        return false;
    }
    alert('註冊成功！');
    window.location.href = 'meber.html';
    return false;
    }

//meber會員資料
//表單處理邏輯處理    
function submitForm() {
    event.preventDefault();// 阻止表單默認提交
}

//purchase_history_review歷史購物清單
// 提交評論函數
function submitReview() {
    var rating = document.getElementById("star-rating").getAttribute("current-rate");
    var comment = document.getElementById("comment").value;

    var reviewSection = document.getElementById("review-section");
    reviewSection.innerHTML = "<p>評價：" + rating + "星</p><p>評論：" + comment + "</p>";

    var reviewInput = document.getElementById("review-input");
    reviewInput.style.display = "none";
}

// 檢查評論狀態
function checkReviewStatus() {
    var reviewSection = document.getElementById("review-section");
    var reviewInput = document.getElementById("review-input");

    if (reviewSection != null && reviewInput != null) {
        if (reviewSection.innerHTML.trim() !== "") {
            reviewInput.style.display = "none";
        } else {
            reviewInput.style.display = "block";
        }
    }
}

// 設置評分
function setRating(rating) {// 這裡的邏輯保持不變
}

// 初始化時檢查評論狀態
checkReviewStatus();


//product-card商品
document.addEventListener('click', function (event) {
    if (event.target && event.target.matches('.review-count')) {
        // 获取商品对应的 ID 或其他标识，然后根据需要跳转到评论预览页面
        // 例如：redirectToReviewPreview(productId);
        console.log("Redirect to review preview for product");
    }
});

// 模拟商品数据，包括评分和评论数量
const productData = [
    { id: 1, rating: 4.5, reviews: 20 },
    { id: 2, rating: 3.8, reviews: 15 },
    { id: 3, rating: 5.0, reviews: 30 },
    // 在这里继续添加其他商品的数据
];

// 获取所有商品卡片
document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');
    // 遍历每个商品卡片
    productCards.forEach(function (card, index) {
        const productInfo = productData[index];// 获取对应商品的数据
        
        const ratingElement = document.createElement('p');// 在商品卡片中添加平均评分和评论数量的元素
        ratingElement.classList.add('product-rating');
        ratingElement.textContent = `平均評分: ${productInfo.rating}星`;

        const reviewsElement = document.createElement('p');
        reviewsElement.classList.add('product-reviews');
        reviewsElement.textContent = `評論數: ${productInfo.reviews}`;

        // 将评分和评论数量的元素添加到商品卡片中
        card.querySelector('.product-details').appendChild(ratingElement);
        card.querySelector('.product-details').appendChild(reviewsElement);

        // 添加点击事件监听器，点击进入评价预览（这里假设有一个名为 showReviews 的函数用于显示评价预览）
        card.addEventListener('click', function () {
            showReviews(productInfo.id); // 传递商品ID至 showReviews 函数
        });
    });
});

// 示例函数，用于显示评价预览，你需要根据实际情况实现
function showReviews(productId) {
    console.log(`显示商品ID为 ${productId} 的评价预览`);
    // 在这里添加显示评价预览的逻辑
}


//buybag購物袋
function submitOrder() {
    alert('訂單已提交！');
    return false;
}

//checkout結帳
//數量對應總金額
document.querySelectorAll('.quantity-input').forEach(function (input) {// 在每個商品的數量變化時更新總金額
    input.addEventListener('input', updateTotalAmount);
});

// 獲得所有商品的數量和價格
function updateTotalAmount() {
    var quantities = document.querySelectorAll('.quantity-input');
    var prices = document.querySelectorAll('.product-details p');
    var totalAmount = 0;
    for (var i = 0; i < quantities.length; i++) {// 計算總金額
        var quantity = parseInt(quantities[i].value);
        var price = parseInt(prices[i].textContent.replace(/\D/g, '')); // 移除價格中的非數字字符
        totalAmount += quantity * price;
    }
    
    document.getElementById('totalAmount').textContent = '$' + totalAmount;// 更新顯示總金額
}

updateTotalAmount();// 初始化時更新總金額

//付款方式
function showPaymentFields() {
    var paymentMethod = document.getElementById("paymentMethod").value;
    
    // 隐藏所有的输入字段
    document.getElementById("creditCardFields").style.display = "none";
    document.getElementById("cashOnDeliveryFields").style.display = "none";

    // 根据选择的付款方式显示相应的输入字段
    if (paymentMethod === "creditCard") {
        document.getElementById("creditCardFields").style.display = "block";
    } else if (paymentMethod === "cashOnDelivery") {
        document.getElementById("cashOnDeliveryFields").style.display = "block";
    }
}
