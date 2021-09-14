var titulo = document.getElementById('titulo_principal');
var altura = titulo.offsetTop;

window.addEventListener('scroll'),
    function() {
        if (window.pageYOffset > altura) {
            titulo.classList.add('achicar')

        } else { titulo.classList.remove('achicar') }

    }