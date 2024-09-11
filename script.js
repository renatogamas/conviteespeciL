document.addEventListener("DOMContentLoaded", function() {
    const simButton = document.getElementById("simButton");

    simButton.addEventListener("click", function() {
        // Redireciona para a página de confirmação
        window.location.href = "convite.html";
    });
 });
    // Função para mover o botão "Não"
    const naoButton = document.getElementById("naoButton");
  
    naoButton.addEventListener("mouseover", function() {
      // Define o container onde o botão pode se mover (a div 'convite')
      const convite = document.querySelector(".convite");
      
      // Calcula os limites máximos para o botão se mover
      const maxX = convite.clientWidth - naoButton.offsetWidth;
      const maxY = convite.clientHeight - naoButton.offsetHeight;
      
      // Gera valores aleatórios para as novas posições
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
  
      // Move o botão "Não" para uma nova posição
      naoButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
