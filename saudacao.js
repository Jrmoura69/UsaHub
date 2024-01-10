document.addEventListener('DOMContentLoaded', function () {
      // Função para criar a saudação em voz
      function createWelcomeMessage() {
        // Verificar se o navegador suporta síntese de voz
        if ('speechSynthesis' in window) {
          // Configurar a mensagem de boas-vindas
          var welcomeMessage = new SpeechSynthesisUtterance('Bem-vindo ao nosso site!');
          
          // Configurar a voz (opcional)
          // var voices = window.speechSynthesis.getVoices();
          // welcomeMessage.voice = voices[0]; // Escolha a voz desejada

          // Falar a mensagem de boas-vindas
          window.speechSynthesis.speak(welcomeMessage);
        }
      }

      // Chamar a função de saudação ao carregar a página
      createWelcomeMessage();
    });