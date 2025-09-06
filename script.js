const API_KEY = '1f0ef25771d74023a3118716b153dfc3';
let currentPage = 1;
const news_container = document.getElementById('news-container');
const keyword = document.getElementById('search-input').value.trim();
const search_div = document.getElementById('search-div');

function algo() {
    search_div.style.display = 'none';
    news_container.innerHTML = `
        <div class="article">
        <img src="https://avatars.mds.yandex.net/get-ydo/5575550/2a0000018c630b72eeb4956cc65f75e6c1c1/diploma" alt="алгоритмика лого">
        <div class="article-content">
            <h2>Разбор личностей алги 1</h2>
            <p class="source"><a href="https://learn.algoritmika.org/student-profile?profileId=4538037">Кустов Иван</a></p>
            <p class="desc">Разбор Даведенко Ксении - <a href="https://docs.google.com/document/d/1Mx3jHXuz2PlkEJeS360BwYVMzjro3wHX-3bRy5qB8JE/edit?tab=t.0">тут</a></p>
        </div>
        </div>
        <div class="article">
        <img src="https://avatars.mds.yandex.net/get-ydo/5575550/2a0000018c630b72eeb4956cc65f75e6c1c1/diploma" alt="алгоритмика лого">
        <div class="article-content">
            <h2>Разбор личностей алги 2</h2>
            <p class="source"><a href="https://learn.algoritmika.org/student-profile?profileId=4538037">Кустов Иван</a></p>
            <p class="desc">Разбор Шестаков, где алгояйца ? - <a href="https://docs.google.com/document/d/1_qJag8HznEailOUt2GrRjDYpowM4H4-lzV8NsmgmgQA/edit?tab=t.0">тут</a></p>
        </div>
        </div>
        <div class="article">
        <img src="https://avatars.mds.yandex.net/get-ydo/5575550/2a0000018c630b72eeb4956cc65f75e6c1c1/diploma" alt="алгоритмика лого">
        <div class="article-content">
            <h2>Разбор личностей алги 3</h2>
            <p class="source"><a href="https://learn.algoritmika.org/student-profile?profileId=4538037">Кустов Иван</a></p>
            <p class="desc">Разбор Ивана Грего - <a href="https://docs.google.com/document/d/1cPOBDTfBc07LoWZg2JPR52_UOSJhBhtT1NrVdPaB18Y/edit?tab=t.0">тут</a></p>
        </div>
        </div>
    `;
}

function fetchNews() {
    const keyword = document.getElementById('search-input').value.trim();

    if (!keyword) return;

    const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}&page=${currentPage}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles || [];

            if (articles.length > 0) {
                const news_container = document.getElementById('news-container');
                news_container.innerHTML = '';

                articles.forEach((article) => {
                    if (article.urlToImage && article.title && article.source && article.description) {
                        const newsItem = `
                            <div class="article">
                                <img src="${article.urlToImage}" alt="${article.title}">
                                <div class="article-content">
                                    <h2>${article.title}</h2>
                                    <p class="source"><a href="${article.url}">${article.source.name}</a></p>
                                    <p class="desc">${article.description}</p>
                                </div>
                            </div>
                        `;
                        news_container.insertAdjacentHTML('beforeend', newsItem);
                    }
                });

                currentPage++;
            } else {
                alert('Новостей не найдено.');
                news_container.innerHTML = `<p style="text-align: center;">Новостей не найдено.</p>`;
            }
        })
        .catch(error => {
            console.error("Ошибка при получении данных:", error);
            alert('Возникла ошибка при выполнении запроса.');
            news_container.innerHTML = `<p style="text-align: center;">Возникла ошибка при выполнении запроса.</p>`;
        });
}


document.addEventListener('DOMContentLoaded', () => {});
