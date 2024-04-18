var scrollTimeout;

window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    
    // Defina um tempo limite para carregar recursos ou executar scripts após o usuário parar de rolar
    scrollTimeout = setTimeout(function() {
        // Aqui você pode carregar recursos ou executar scripts que precisam ser atrasados
    }, 250); // Ajuste este valor conforme necessário
});
