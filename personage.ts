// Classe principale de l'application Dragon Ball
class DragonBallApp {
  private characters: any[] = []; // Liste des personnages
  private container: HTMLElement; // Conteneur des cartes
  private searchInput: HTMLInputElement; // Champ de recherche

  constructor() {
    this.container = document.getElementById('cards-container')!;
    this.searchInput = document.getElementById('search') as HTMLInputElement;
    this.init(); // Initialisation de l'application
  }

  // Méthode principale d'initialisation
  async init() {
    await this.fetchCharacters(); // Récupère les personnages depuis l'API
    this.displayCharacters(this.characters); // Affiche les personnages
    this.setupSearch(); // Active la recherche
    this.setupUniverseButtons(); // Active les filtres par univers
    this.setupScrollButtons(); // Active les boutons de scroll
  }

  // Récupération des personnages depuis l'API Dragon Ball
  async fetchCharacters() {
    try {
      const response = await fetch('https://dragonball-api.com/api/characters');
      const data = await response.json();
      this.characters = data.items || [];
    } catch (error) {
      console.error("Erreur lors du chargement des personnages :", error);
    }
  }

  // Affichage des personnages dans des petites cartes
  displayCharacters(characters: any[]) {
    this.container.innerHTML = '';

    // Filtrer les doublons par nom
    const uniqueCharacters = characters.filter(
      (char, index, self) =>
        index === self.findIndex((c) => c.name === char.name)
    );

    // Image par défaut si non fournie
    const defaultImage = 'https://example.com/dragonball-placeholder.jpg';

    uniqueCharacters.forEach((char) => {
      const race = char.race || 'Inconnue';
      const universe = char.universe || 'Univers inconnu';

      const card = document.createElement('div');
      card.className = `cursor-pointer`;

      // Contenu HTML de la carte (petit format)
      card.innerHTML = `
        <div class="bg-gray-800 rounded-xl shadow-md overflow-hidden w-38 hover:scale-105 transition-transform duration-300">
          <img 
            class="w-50 h-32  object-cover"
            src="${char.image || defaultImage}" 
            alt="${char.name}" 
          />
          <div class="p-2">
            <h2 class="text-lg font-bold text-white truncate">${char.name}</h2>
            <p class="text-xs text-white bg-yellow-600 px-2 py-0.5 rounded-full inline-block mt-1">${race}</p>
            <p class="text-xs text-white bg-blue-600 px-2 py-0.5 rounded-full inline-block mt-1">${universe}</p>
          </div>
        </div>
      `;

      // Lien vers la page de détails
      card.addEventListener('click', () => {
        window.location.href = `/details.html?id=${encodeURIComponent(char.id)}`;
      });

      this.container.appendChild(card);
    });
  }

  // Recherche de personnages par nom
  private setupSearch() {
    this.searchInput.addEventListener('input', () => {
      const query = this.searchInput.value.toLowerCase();
      const filtered = this.characters.filter((char) =>
        char.name.toLowerCase().includes(query)
      );
      this.displayCharacters(filtered);
    });
  }

  // Filtres par univers avec boutons
  private setupUniverseButtons() {
    const buttons = document.querySelectorAll<HTMLButtonElement>('#universe-buttons button');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedUniverse = button.dataset.universe;

        if (selectedUniverse === "tout") {
          this.displayCharacters(this.characters);
        } else {
          const filtered = this.characters.filter((char) => char.universe === selectedUniverse);
          this.displayCharacters(filtered);
        }
      });
    });
  }

  // Boutons de scroll (haut, milieu, bas)
  private setupScrollButtons() {
    const btnTop = document.getElementById('scroll-top')!;
    const btnMiddle = document.getElementById('scroll-middle')!;
    const btnBottom = document.getElementById('scroll-bottom')!;

    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    btnMiddle.addEventListener('click', () => {
      const middle = document.body.scrollHeight / 2;
      window.scrollTo({ top: middle, behavior: 'smooth' });
    });

    btnBottom.addEventListener('click', () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }
}

// Lancement de l'application
new DragonBallApp();
