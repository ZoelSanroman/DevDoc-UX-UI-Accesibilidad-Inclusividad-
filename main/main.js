document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[role="search"]');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const searchText = document.getElementById('buscador').value.toLowerCase();
        const articles = document.querySelectorAll('.lead, .Divergencias  h2.fw-normal');
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