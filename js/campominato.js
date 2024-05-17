const gridSection = document.querySelector('section#grid');
const newLevel = document.querySelector('button#playbtn')

for (let index = 0; index < 100; index++) {
    const squareArticle = document.createElement('article');
    squareArticle.classList.add('square');

    gridSection.appendChild(squareArticle);

    const numberSquare = document.createElement('span');
    numberSquare.classList.add('number');
    numberSquare.append(index + 1);

    squareArticle.appendChild(numberSquare);

    squareArticle.addEventListener('click', function () {
        squareArticle.classList.add('active');
    });

}