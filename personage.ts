// Classe principale de l'application Dragon Ball
class DragonBallApp {
  private characters: any[] = []; // Liste des personnages
  private container: HTMLElement; // Conteneur des cartes
  private searchInput: HTMLInputElement; // Champ de recherche

  constructor() {
    this.container = document.getElementById('cards-container')!; // On récupère le conteneur HTML
    this.searchInput = document.getElementById('search') as HTMLInputElement; // On récupère l'input de recherche
    this.init(); // On lance l'initialisation de l'app
  }

  // Méthode principale d'initialisation
  async init() {
    await this.fetchCharacters(); // On récupère les personnages de l'API
    this.displayCharacters(this.characters); // On les affiche
    this.setupSearch(); // On active la recherche
    this.setupUniverseButtons(); // On active les filtres par univers
    this.setupScrollButtons(); // On active les boutons pour scroller
  }

  // Récupération des personnages depuis l'API Dragon Ball
  async fetchCharacters() {
    try {
      const response = await fetch('https://dragonball-api.com/api/characters'); // Appel de l'API
      const data = await response.json();
      this.characters = data.items || []; // On stocke les personnages
    } catch (error) {
      console.error("Erreur lors du chargement des personnages :", error); // Erreur si ça ne marche pas
    }
  }

  // Affichage des personnages dans des cartes
  displayCharacters(characters: any[]) {
    this.container.innerHTML = ''; // On vide le conteneur

    // On garde les personnages uniques (par nom)
    const uniqueCharacters = characters.filter((char, index, self) =>
      index === self.findIndex((c) => c.name === char.name)
    );

    // Pour chaque personnage, on crée une carte
    uniqueCharacters.forEach((char) => {
      const race = char.race || 'Inconnue'; // Si la race est vide, on met "Inconnue"
      const universe = char.universe || 'Univers inconnu'; // Pareil pour l'univers

      // Création de la carte HTML
      const card = document.createElement('div');
      card.className = `
        bg-purple-900 hover:bg-purple-700 p-6 rounded-2xl shadow-lg transition duration-300
        overflow-hidden border border-gray-300 cursor-pointer
      `;

      // Image par défaut si pas d'image trouvée
      const defaultImage = 'https://example.com/dragonball-placeholder.jpg';

      // Contenu HTML de la carte
      card.innerHTML = `
        <img class="rounded w-full h-64 object-cover"
             src="${char.image || defaultImage}"
             alt="${char.name}" />
        <div class="p-4 text-center">
          <h2 class="text-xl font-bold text-white mb-1">${char.name}</h2>
          <p class="text-sm text-white bg-yellow-600 inline-block px-2 py-1 rounded-full">${race}</p>
          <p class="text-sm mt-2 text-white bg-blue-600 inline-block px-3 py-1 rounded-full">${universe}</p>
        </div>
      `;

      // Quand on clique sur une carte, on va vers la page de détails
      card.addEventListener('click', () => {
        window.location.href = `/details.html?id=${encodeURIComponent(char.id)}`;
      });

      // On ajoute la carte au conteneur
      this.container.appendChild(card);
    });
  }

  // Activation de la recherche par nom
  setupSearch() {
    this.searchInput.addEventListener('input', () => {
      const query = this.searchInput.value.toLowerCase(); // Texte tapé par l'utilisateur
      const filtered = this.characters.filter((char) =>
        char.name.toLowerCase().includes(query) // On garde les noms qui contiennent le texte
      );
      this.displayCharacters(filtered); // On affiche les résultats
    });
  }

  // Activation des boutons pour filtrer par univers
  private setupUniverseButtons() {
    const buttons = document.querySelectorAll<HTMLButtonElement>('#universe-buttons button');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedUniverse = button.dataset.universe;

        if (selectedUniverse === "tout") {
          this.displayCharacters(this.characters); // Afficher tous les persos
        } else {
          const filtered = this.characters.filter((char) => char.universe === selectedUniverse);
          this.displayCharacters(filtered); // Afficher seulement ceux de l’univers choisi
        }
      });
    });
  }

  // Activation des boutons de scroll (haut / milieu / bas)
  private setupScrollButtons() {
    const btnTop = document.getElementById('scroll-top')!;
    const btnMiddle = document.getElementById('scroll-middle')!;
    const btnBottom = document.getElementById('scroll-bottom')!;

    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Va en haut de la page
    });

    btnMiddle.addEventListener('click', () => {
      const middle = document.body.scrollHeight / 2;
      window.scrollTo({ top: middle, behavior: 'smooth' }); // Va au milieu de la page
    });

    btnBottom.addEventListener('click', () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Va en bas de la page
    });
  }
}

// Lancement de l'application
new DragonBallApp();
