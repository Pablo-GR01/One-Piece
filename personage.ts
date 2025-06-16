class dragonBall{
    private characters:any[] = []
    private container: HTMLElement;
    private searchInput:HTMLInputElement;

    constructor(){
        this.container = document.getElementById('card')!;
        this.searchInput = document.getElementById('search') as HTMLInputElement;
        this.init();
    }

    async init() {
        await this.fetchCharacters();
        this.displayCharacters(this.characters);
        this.setupSearch();
        this.setupHouseButtons();
        this.setupScrollButtons();
    }

    async fetchCharacters() {
    try {
      const response = await fetch('https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z fighter');
      this.characters = await response.json();
    } catch (error) {
      console.error("Erreur lors du chargement des personnages :", error);
    }
  }
}

