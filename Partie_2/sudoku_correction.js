//tableaux des grilles du fichier
let tabSudokus = [
    '4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......',
    '52...6.........7.13...........4..8..6......5...........418.........3..2...87.....',
    '6.....8.3.4.7.................5.4.7.3..2.....1.6.......2.....5.....8.6......1....',
    '48.3............71.2.......7.5....6....2..8.............1.76...3.....4......5....',
    '....14....3....2...7..........9...3.6.1.............8.2.....1.4....5.6.....7.8...',
    '......52..8.4......3...9...5.1...6..2..7........3.....6...1..........7.4.......3.',
    '6.2.5.........3.4..........43...8....1....2........7..5..27...........81...6.....',
    '.524.........7.1..............8.2...3.....6...9.5.....1.6.3...........897........',
    '6.2.5.........4.3..........43...8....1....2........7..5..27...........81...6.....',
    '.923.........8.1...........1.7.4...........658.........6.5.2...4.....7.....9.....',
    '6..3.2....5.....1..........7.26............543.........8.15........4.2........7..',
    '.6.5.1.9.1...9..539....7....4.8...7.......5.8.817.5.3.....5.2............76..8...',
    '..5...987.4..5...1..7......2...48....9.1.....6..2.....3..6..2.......9.7.......5..',
    '3.6.7...........518.........1.4.5...7.....6.....2......2.....4.....8.3.....5.....',
    '1.....3.8.7.4..............2.3.1...........958.........5.6...7.....8.2...4.......',
    '6..3.2....4.....1..........7.26............543.........8.15........4.2........7..',
    '....3..9....2....1.5.9..............1.2.8.4.6.8.5...2..75......4.1..6..3.....4.6.',
    '45.....3....8.1....9...........5..9.2..7.....8.........1..4..........7.2...6..8..',
    '.237....68...6.59.9.....7......4.97.3.7.96..2.........5..47.........2....8.......',
    '..84...3....3.....9....157479...8........7..514.....2...9.6...2.5....4......9..56',
]; 

//choix aleatoire d'une ligne
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//choix et traduction en tableau à 2 dimensions 
function getRandomGrille()
{
    //recupère une grille aléatoire
    let i=getRandomInt(tabSudokus.length);
    document.getElementById("noSudoku").textContent="n°"+(i+1);
    let grille = tabSudokus[i].trim();
    let regex = /[.]/g;
    grille = grille.replace(regex,"0");

    //construit la grille à 2 dimensions  
    let grilleJeu = [];    
    let noLn=0;
    grilleJeu[noLn]=[];
    for(let i=0; i<grille.length; i++)
    {
         //ligne suivante ?
         if((i > 0) && ((i % 9)===0)) 
         {
            noLn++;
            grilleJeu[noLn]=[];
         }
         grilleJeu[noLn][i%9] = parseInt(grille[i]);
    }    
    return grilleJeu;
}


// affiche de la grille de jeu
function afficheGrille(grilleJeu)
{
    let html="";
    for(let i=0;i<grilleJeu.length;i++) //lignes
    {
        html+="<tr>";
        for(let j=0; j<grilleJeu.length; j++) //colonnes
        {
            //bordures de case
            let classe="";
            //td de fin de case à gauche ?
            if((j===3) || (j===6)) classe+="caseleft";
            //td de fin de case en dessous ?
            if((i===2) || (i===5)) classe+=" casebottom";            

            if(classe.length>0) classe=" class='"+classe+"'";
            if(grilleJeu[i][j] >0) html+="<td"+classe+">"+grilleJeu[i][j]+"</td>";
            else                html+="<td"+classe+"></td>";
        }
        html+="</tr>";
    }

    html="<table>"+html+"</table>";
    document.getElementById("divGrille").innerHTML=html;    
}

// lancement du jeu
function initJeu() {
    let grilleJeu = []; 
    grilleJeu = getRandomGrille();    
    afficheGrille(grilleJeu);
}
initJeu();
