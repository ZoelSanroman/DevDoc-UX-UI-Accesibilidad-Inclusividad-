document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[role="search"]');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const searchText = document.getElementById('buscador').value.toLowerCase();
        const articles = document.querySelectorAll('.lead, .Divergencias h2.fw-normal');
        let found = false;

        articles.forEach(article => {
            if (article.textContent.toLowerCase().includes(searchText)) {
                console.log('Texto encontrado en el artículo:', article.textContent);
                if (article.closest('.Divergencias')) {
                    article.closest('.Divergencias').scrollIntoView({ behavior: 'smooth' });
                    found = true;
                } else {
                    article.scrollIntoView({ behavior: 'smooth' });
                    found = true;
                }
            }
        });

        if (!found) {
            alert('No se encontró el artículo deseado. Puede pedirnoslo como sugerencia, consulte: contacto.');
        }
    });
});

const sonidito = 'sonidito.mp3';
const clickar = new Audio(sonidito);
const playSound = () => clickar.play();
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', playSound);
});