const colors = ["AntiqueWhite", "Beige", "Chartreuse", "#f15025", 'blue', 'yellow', 'DarkMagenta'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumer = getRandomNumer();
    document.body.style.backgroundColor = colors[randomNumer];
    color.textContent = colors[randomNumer];
});

function getRandomNumer() {
    return Math.floor(Math.random()*colors.length);
}