
  document.addEventListener('DOMContentLoaded', function() {
    // Texte à afficher dans l'écran de bienvenue     
    const welcomeMessage = "Bienvenue";  
    const welcomeTextElement = document.getElementById('welcomeText');
    const welcomeScreen = document.getElementById('welcomeScreen');
    
    // Créer des spans pour chaque lettre
    welcomeMessage.split('').forEach(letter => {
      const span = document.createElement('span');
      span.textContent = letter;
      welcomeTextElement.appendChild(span);
    });
    
    // Afficher le contenu du site après 2 secondes
    setTimeout(function() {
      welcomeScreen.style.opacity = '0';
      
      // Rendre visible le reste du contenu
      document.querySelectorAll('body > *:not(.welcome-screen)').forEach(element => {
        element.style.opacity = '1';
      });
      
      // Supprimer complètement l'écran de bienvenue après la transition
      setTimeout(function() {
        welcomeScreen.style.display = 'none';
      }, 500);
    }, 2000);
  });

  /*dark mode */
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Vérifier les préférences stockées
    const darkMode = localStorage.getItem('darkMode') === 'enabled';
    
    // Appliquer le mode initial
    if (darkMode) {
      body.classList.add('dark-mode');
      themeToggle.textContent = '🌙';
    }
    
    // Gestionnaire d'événement pour le basculement
    themeToggle.addEventListener('click', function() {
      themeToggle.classList.add('animate-toggle');
      
      // Basculer le mode sombre
      body.classList.toggle('dark-mode');
      
      // Mettre à jour l'emoji
      if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'enabled');
      } else {
        themeToggle.textContent = '☀️';
        localStorage.setItem('darkMode', 'disabled');
      }
      
      // Supprimer la classe d'animation après la fin
      setTimeout(() => {
        themeToggle.classList.remove('animate-toggle');
      }, 500);
    });
  });
