const labyrinthe = [

    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 3, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 2, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],

];

// Les 0 représentent un espace vide
// Les 1 représentent des murs et donc non franchissable
// Le 2 réprésente un joueur
// La sortie est représenté par un 3
// Tu dois définir une classe Game qui contiendra le labyrinthe
// Tu dois définir dans cette meme classe un player qui contiendra sa position en X et Y
// Tu dois définir dans la classe Game une méthode move qui devra être appelé tant que le joueur n'a pas atteint la sortie
// Cette meme méthode devra log les différentes position a chaque mouvement.
// Cette méthode doit retourner true si le joueur est sur la sortie sinon false
// Le joueur ne peut se déplacer que de haut en bas et de gauche à droite
// Le joueur ne peut pas se déplacer en diagonal

// CONSIGNES EN PLUS : 

// pas de param dans la méthode move()
// on veut que le joueur passe par le chemin le plus court à chaque fois : fais une méthode, voir si ça sert à qq chose de faire des déductions avec les chemins passés, les chemins qui restent etc. et si ça marche surtout lolz
// on veut log le tablo maj avec les positions du 2 à chaque tour


class Game {
    private labyrinthe: number[][];
    private player: { x: number; y: number };

    constructor(labyrinthe: number[][]) {
        this.labyrinthe = labyrinthe;
        this.player = this.positionDeMonJoueur();
    }

    public positionDeMonJoueur(): { x: number; y: number } {
        for (let i = 0; i < this.labyrinthe.length; i++) {
            for (let j = 0; j < this.labyrinthe[i].length; j++) {
                if (this.labyrinthe[i][j] === 2) {
                    return { x: j, y: i };
                }
            }
        }
        return { x: 0, y: 0 };

    }

    public getPositionDeLaSortie(): boolean {
        return this.labyrinthe[this.player.y][this.player.x] === 3;
    }



    public direction(x: number, y: number): { x: number; y: number }[] {

        let nouvellePosition: { x: number; y: number }[] = [];

        if (y - 1 >= 0 && this.labyrinthe[y - 1][x] !== 1) {
            nouvellePosition.push({ x, y: y - 1 }); // bas
        }
        if (y + 1 < this.labyrinthe.length && this.labyrinthe[y + 1][x] !== 1) {
            nouvellePosition.push({ x, y: y + 1 }); // haut
        }
        if (x - 1 >= 0 && this.labyrinthe[y][x - 1] !== 1) {
            nouvellePosition.push({ x: x - 1, y }); // gauche
        }
        if (x + 1 < this.labyrinthe[y].length && this.labyrinthe[y][x + 1] !== 1) {
            nouvellePosition.push({ x: x + 1, y }); // droite
        }
        return nouvellePosition
    }
    public move(): boolean {

        while (!this.getPositionDeLaSortie()) { // tant que player n'est pas sur la sortie


            let variableDeMonCheminLePlusCourt = this.cheminLePlusCourt(); // on met chemin le plus court dans une variable
            let nouvellePosition = variableDeMonCheminLePlusCourt[0]; // la nouvelle position DONC index à 0

            this.player.y = nouvellePosition.y; // update des positions
            this.player.x = nouvellePosition.x;
            let newLab = this.deuxNotAllowed();

            if (newLab[nouvellePosition.y][nouvellePosition.x] == 0) {
                newLab[nouvellePosition.y][nouvellePosition.x] = 2
                let tabloFormat = this.arrayToString()
                console.log(tabloFormat)
            }

        }

        return true; // et quand il arrive à sa sortie on met true 
    }
    public arrayToString() : string {
        let result = '--------------' + '\n';
        for (const lab of this.labyrinthe) {
          result += lab.join(' ') + '\n';
        }
        return result;
    }
    
    public cheminLePlusCourt(): { x: number; y: number }[] { 
       
        let cheminsQuiRestent: { x: number; y: number; chemingue: { x: number; y: number }[] }[] = []; // chemin qui reste est une variable qui contient un objet qui contien un objet (chemingue), tout le monde a des nombres en valeur
        let cheminsFaits: boolean[][] = []; // tableau de tableau de boolean 

        for (let y = 0; y < this.labyrinthe.length; y++) { // ça met en place les indices y du tablo
            cheminsFaits[y] = [];
            for (let x = 0; x < this.labyrinthe[y].length; x++) { // indices x du tablo laby avec l'index y donc chemins faits à false
                cheminsFaits[y][x] = false;
            }
        }

        cheminsQuiRestent.push({ x: this.player.x, y: this.player.y, chemingue: [] }); // chemingue c'est un tablo vide, dedans on va stocker le chemin que le joueur aura emprunté
        cheminsFaits[this.player.y][this.player.x] = true; // true pcq l'indice x et y correspondent

        while (cheminsQuiRestent.length > 0) { // tant qu'il y'a des chemins restants
            let current = cheminsQuiRestent.shift()!; // le premier element est viré à chaque tour et on le met dans current => j'ai regardé sur internet pour le ! car je l'avais vu une fois je ne sais où et je l'avais pas compris => le ! sert à dire que mon cheminsQuiRestent.shift() ne sera pas null ou undefined

            if (this.labyrinthe[current.y][current.x] === 3) { // si la position actuelle de y et de x dans le labyrinthe sont égales à 3
                return current.chemingue; // si y et x atteignent 3, alors on renvoit le tableau current, et ça met fin à while => peut être ajouter un break nan pour pas que ça fasse un infini ?? => voir
            }

            let voisinsDeMonPlayer = this.direction(current.x, current.y); // on met les voisins de la current position dans un tableau

            for (let neighbor of voisinsDeMonPlayer) { // on itère sur les voisins 
                if (!cheminsFaits[neighbor.y][neighbor.x]) { // si les chemins faits ne correspondent pas aux voisins de x et aux voisins de y
                    let newPath = current.chemingue.slice(); // si les chemins faits sont 'false' , on en crée un nouveau et on met ce qu'il y'a dans current chemingue dans un nouveau chemin avec slice. 
                    newPath.push(neighbor); // Le voisin est donc ensuite ajouté à nouveau chemin. // j'ai trouvé ca cool pour pouvoir checker si le joueur est déjà passé par là ou pas

                    cheminsQuiRestent.push({ x: neighbor.x, y: neighbor.y, chemingue: newPath }); //on ajoute le newPath au chemin qui reste
                    cheminsFaits[neighbor.y][neighbor.x] = true; // les chemins qui sont faits passent à true
                }
            }
        }

        return []; // là on retourne un tableau vide
    }

    public deuxNotAllowed(): number[][] { // sert à virer le 2 et le remplacer par un 0 quand il bouge
        for (let i = 0; i < this.labyrinthe.length; i++) {
            for (let y = 0; y < this.labyrinthe[i].length; y++) {
                if (this.labyrinthe[i][y] == 2) {
                    this.labyrinthe[i][y] = 0

                }
            }

        }
        return this.labyrinthe
    }
}

let myClassInstance = new Game(labyrinthe);
console.log('move : ', myClassInstance.move())
