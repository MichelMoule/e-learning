// Fonction pour ajouter l'écouteur d'événements lorsque la page est chargée
function onPageLoad() {
    // Récupération des éléments DOM
    const moduleBox = document.querySelector('.module-box-contenu');
    const video = document.querySelector('video');
    const continuerBtn = document.getElementById('continuer-btn');
  
    // Fonction pour afficher le quiz
    function afficherQuiz() {
      // Création des éléments du quiz
      const quiz = document.createElement('div');
      quiz.classList.add('quiz-container'); // ajout de la classe CSS
      quiz.innerHTML = `
        
        <form>
          <div class="question-container">
          <p>Qu'est-ce que l'IA ?</p>
          <input type="radio" name="q1" value="a"><label>Un domaine de la recherche qui vise à créer des systèmes informatiques capables de réaliser des tâches qui nécessitent une intelligence humaine</label><br>
          <input type="radio" name="q1" value="b"><label>Un domaine de la recherche qui vise à créer des systèmes informatiques capables de réaliser des calculs mathématiques</label><br>
          <input type="radio" name="q1" value="c"><label> Un domaine de la recherche qui vise à créer des systèmes informatiques capables de réaliser des tâches qui nécessitent une intelligence animale</label><br>
          <input type="radio" name="q1" value="d"><label> Aucune de ces réponses n'est correcte</label><br>
          </div>
          <div class="question-container">
          <p>Qu'est-ce que la compréhension automatique du langage naturel (NLP) ?</p>
          <input type="radio" name="q2" value="a"><label>Un sous-domaine de l'IA qui se concentre sur la création de systèmes informatiques capables de traduire la langue humaine</label><br>
          <input type="radio" name="q2" value="b"><label>Un sous-domaine de l'IA qui se concentre sur la création de systèmes informatiques capables de comprendre et de traiter la langue humaine</label><br>
          <input type="radio" name="q2" value="c"><label>Un sous-domaine de l'IA qui se concentre sur la création de systèmes informatiques capables de générer de la langue humaine</label><br>
          <input type="radio" name="q2" value="d"><label>Aucune de ces réponses n'est correcte</label><br>
          </div>
          <div class="question-container">
          <p>Quelles sont les tâches courantes de la NLP ?</p>
          <input type="radio" name="q3" value="a"><label>Tokenization, POS tagging et analyse syntaxique</label><br>
          <input type="radio" name="q3" value="b"><label>Traduction automatique, reconnaissance de la parole et reconnaissance d'image</label><br>
          <input type="radio" name="q3" value="c"><label>Analyse des sentiments, reconnaissance des objets et reconnaissance des personnes</label><br>
          <input type="radio" name="q3" value="d"><label>Aucune de ces réponses n'est correcte</label><br>
          </div>
          <button type="submit">Valider</button>
        </form>
      `;
      // Ajout du quiz à la box
      moduleBox.appendChild(quiz);
      
      // Suppression de la vidéo
      video.remove();
      continuerBtn.remove()
        // Ajout de l'écouteur d'événements sur le formulaire
  const formulaire = document.querySelector('form');
  formulaire.addEventListener('submit', afficherReponses
  );
      
    }
  
    // Écouteur d'événement sur le bouton "Continuer"
    continuerBtn.addEventListener('click', afficherQuiz);
  }
  
  // Ajout de l'écouteur d'événements pour la charge de la page

  

  // Fonction pour afficher les réponses du quiz
// Fonction pour afficher les réponses du quiz
function afficherReponses(event) {
    event.preventDefault(); // empêche le formulaire de se soumettre
    
    // Récupération des éléments DOM
    const questions = document.querySelectorAll('.question-container');
    
    // Tableau des réponses correctes
    const reponses = ['a', 'b', 'a'];
    
    // Parcourir toutes les questions
    questions.forEach((question, index) => {
      // Récupération de la réponse choisie par l'utilisateur
      const choix = question.querySelector('input[type=radio]:checked');
      
      // Vérification si une réponse a été sélectionnée pour chaque question
      if (!choix) {
        alert(`Vous n'avez pas répondu à la question ${index + 1}`);
        return; // sortir de la fonction s'il manque des réponses
      }
      
      // Création d'un élément pour afficher la réponse
      const reponseContainer = document.createElement('div');
      const reponse = document.createElement('p');
      reponse.style.fontWeight = 'bold';
      
      // Vérification de la réponse
      if (choix.value === reponses[index]) {
        reponse.style.color = 'green';
        reponse.textContent = 'Bonne réponse !';
      } else {
        reponse.style.color = 'red';
        reponse.textContent = `Mauvaise réponse. La réponse correcte était ${reponses[index]}.`;
      }
      
      // Ajout de l'élément à la fin de la question
      reponseContainer.appendChild(reponse);
      question.appendChild(reponseContainer);
      
      // Désactivation des choix de la question
      const choixListe = question.querySelectorAll('input[type=radio]');
      choixListe.forEach(choix => {
        choix.disabled = true;
      });
    });
    
    // Désactivation du bouton de validation
    const boutonValider = document.querySelector('button[type=submit]');
    boutonValider.textContent = 'Module 2';
    boutonValider.addEventListener('click', () => {
        window.location.href = 'modu2.html';
    });
}

  window.addEventListener('load', onPageLoad);

  