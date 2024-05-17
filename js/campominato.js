const gridSection = document.querySelector('section#grid');
const newLevel = document.querySelector('button#playbtn')

for (let index = 0; index < 100; index++) {
    const squareArticle = document.createElement('article');
    squareArticle.classList.add('square');

    gridSection.appendChild(squareArticle);

}