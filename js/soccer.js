document.addEventListener('DOMContentLoaded', function() {
    // 映画のデータを定義する配列
    const movies = [
        { title: "ライオン・キング", image: "images/lion-king.jpg", link: "https://example.com/lion-king" },
        { title: "アラジン", image: "images/aladdin.jpg", link: "https://example.com/aladdin" },
        { title: "トイ・ストーリー", image: "images/toy-story.jpg", link: "https://example.com/toy-story" },
        { title: "フォーゼン", image: "images/frozen.jpg", link: "https://example.com/frozen" },
        { title: "ムーラン", image: "images/mulan.jpg", link: "https://example.com/mulan" }
    ];

    // Swiperを初期化する関数
    function initSwiper() {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // 映画スライドを生成する関数
        function generateMovieSlides() {
            const movieSlider = document.getElementById('movie-slider');
            movies.forEach(movie => {
                // 映画スライドの要素を作成
                const movieSlide = document.createElement('div');
                movieSlide.classList.add('swiper-slide');

                // 映画の画像を作成
                const movieImage = document.createElement('img');
                movieImage.src = movie.image;
                movieImage.alt = movie.title;
                movieSlide.appendChild(movieImage);

                // 映画のタイトルを作成
                const movieTitle = document.createElement('h3');
                movieTitle.textContent = movie.title;
                movieSlide.appendChild(movieTitle);

                // 映画のリンクを作成
                const movieLink = document.createElement('a');
                movieLink.href = movie.link;
                movieLink.textContent = "詳細を見る";
                movieSlide.appendChild(movieLink);

                // 映画スライダーに要素を追加
                movieSlider.appendChild(movieSlide);
            });
        }

        // 初期化時に映画スライドを生成
        generateMovieSlides();
    }

    // ページ読み込み後にSwiperを初期化
    initSwiper();
});
