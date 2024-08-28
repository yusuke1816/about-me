document.addEventListener('DOMContentLoaded', function() {
    // タイトルの情報を動的に生成する
    const titles = [
        { title: 'プレミアリーグ', count: 6 },
        { title: 'FAカップ', count: 8 },
        { title: 'UEFAチャンピオンズリーグ', count: 2 }
    ];

    const titlesList = document.getElementById('titles-list');
    titles.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = `${item.title}: ${item.count}回`;
        titlesList.appendChild(li);
    });

    // 最新ニュースを動的に生成する（ダミーデータを使用）
    const newsContainer = document.getElementById('news-container');
    const newsData = [
        { title: 'チェルシー、新監督にトーマス・トゥヘル氏を任命', content: 'チェルシーFCは新しい監督にトーマス・トゥヘル氏を任命しました。トゥヘル氏はチャンピオンズリーグ制覇経験を持つ実力派です。', link: '#', special: true },
        { title: 'カンテ、契約延長に合意', content: 'ナゴロ・カンテ選手がチェルシーとの契約延長に合意しました。カンテ選手はチームの中心選手の一人です。', link: '#', special: true },
        { title: 'チェルシー、新スポンサー契約を締結', content: 'チェルシーFCは新たに長期スポンサー契約を締結しました。新たなパートナーシップに期待が高まります。', link: '#', special: true }
    ];

    newsData.forEach(function(item) {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        let titleClass = item.special ? 'special-title' : '';
        newsItem.innerHTML = `
            <h3 class="${titleClass}">${item.title}</h3>
            <p>${item.content}</p>
            <a href="${item.link}" class="read-more">続きを読む</a>
        `;
        newsContainer.appendChild(newsItem);
    });
});
