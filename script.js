document.addEventListener("DOMContentLoaded", function() {
    // Simula um atraso de 2 segundos (2000 milissegundos) para a splash screen
    setTimeout(function() {
        // Oculta a splash screen
        document.getElementById("splashScreen").style.display = "none";

        // Exibe o conteúdo do site
        document.getElementById("content").style.display = "block";
    }, 2000);
});
