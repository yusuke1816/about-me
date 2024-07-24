// script.js

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.close-btn');
    const foodName = document.getElementById('food-name');
    const foodImg = document.getElementById('food-img');
    const foodDescription = document.getElementById('food-description');

    // ポップアップを表示する関数
    function showPopup(food) {
        foodName.textContent = food.querySelector('h3').textContent;
        foodImg.src = food.querySelector('img').src;
        foodDescription.textContent = food.querySelector('p').textContent;
        popup.classList.add('active');
    }

    // ポップアップを閉じる関数
    function closePopup() {
        popup.classList.remove('active');
    }

    // カードをクリックしたときの処理
    cards.forEach(card => {
        card.addEventListener('click', function() {
            showPopup(card);
        });
    });

    // 閉じるボタンをクリックしたときの処理
    closeBtn.addEventListener('click', closePopup);

    // エスケープキーを押したときの処理
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });

    // ポップアップの外側をクリックしたときの処理
    popup.addEventListener('click', function(e) {
        if (e.target === this) {
            closePopup();
        }
    });
});
