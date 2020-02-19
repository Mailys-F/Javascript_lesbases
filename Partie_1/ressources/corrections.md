# Javascript - les bases - Exercices

## 4. VARIABLES ET VALEURS

### Exercice : Tentez de prévoir les valeurs

    Réponses : 2 10 102 30 40 10 10

### Exercice : Permutation de variable

    let nombre1 = 5;
    let nombre2 = 3;

    // Solution classique utilisant une variable temporaire
    const temp = nombre1;
    nombre1 = nombre2;
    nombre2 = temp;

    console.log("nombre1 = " + nombre1); // nombre1 = 3
    console.log("nombre2 = " + nombre2); // nombre2 = 5

### Exercice : Interaction avec l'utilisateur

Récupérez le prénom de l'utilisateur et son année de naissance.

    const prenom = prompt("Entrez votre prénom :");
    const annee = prompt("Entrez votre année de naissance :");

Calculez son âge et affichez son prénom et son âge sur la page.

    const age = 2020 - Number(saisie);
    document.write("Age de "+prenom+" : "+age+" ans");

<hr/>

## 5. LES TESTS : IF et SWITCH

### Exercice : Créez votre propre chabot



### Exercice : Jour suivant

    const jourActuel = "lundi";
    let jourSuivant = "";

    // Solution avec un if
    if (jourActuel === "lundi") {
      jourSuivant = "mardi";
    } else if (jourActuel === "mardi") {
      jourSuivant = "mercredi";
    } else if (jourActuel === "mercredi") {
      jourSuivant = "jeudi";
    } else if (jourActuel === "jeudi") {
      jourSuivant = "vendredi";
    } else if (jourActuel === "vendredi") {
      jourSuivant = "samedi";
    } else if (jourActuel === "samedi") {
      jourSuivant = "dimanche";
    } else if (jourActuel === "dimanche") {
      jourSuivant = "lundi";
    } else {
      console.log("Erreur : jour non reconnu !");
    }

    console.log(`Demain, nous serons ${jourSuivant}`);

### Exercice : Calculatrice

    let nbGauche=12;
    let nbDroite=6;
    let operation="-";
    let resultat;
    // Effectue les 4 opérations arithmétiques de base
    switch (operation) {
        case "+":
          resultat = nbGauche + nbDroite;
          break;
        case "-":
          resultat = nbGauche - nbDroite;
          break;
        case "*":
          resultat = nbGauche * nbDroite;
          break;
        case "/":
          resultat = nbGauche / nbDroite;
          break;
    }
    console.log(resultat);

<hr/>

## 8. LES BOUCLES : FOR ET WHILE

### Exercice : La table de multiplication

    const nombre = 7; // Faites varier cette variable entre 1 et 10
    console.log(`Table de multiplication de ${nombre}`);

    // Solution avec un for
    for (let i = 1; i <= 10; i++) {
      console.log(`${nombre} x ${i} = ${nombre * i}`);
    }

    // Solution alternative avec un while
    let i = 1;
    while (i <= 10) {
      console.log(`${nombre} x ${i} = ${nombre * i}`);
      i++;
    }

### Exercice : Le nombre Mystère

    let nb=Math.floor(Math.random()*99+1);
    let trouve=false;
    while(!trouve)
    {
        let reponse = Number(prompt("Votre nombre :"));
        if(!isNaN(reponse))
        {
            if(reponse<nb)
            {
                console.log(reponse + " est trop petit !")
            }
            else if(reponse>nb)
            {
                console.log(reponse + " est trop grand !")
            }
            else{
                console.log("Bravo !")
                trouve=true;
            }
        }
    }

### Exercice : FizzBuzz

    for (let nombre = 1; nombre <= 100; nombre++) {
        if (nombre % 3 === 0 && nombre % 5 === 0) console.log("FizzBuzz");
        else if (nombre % 3 === 0) console.log("Fizz");
        else if (nombre % 5 === 0) console.log("Buzz");
        else console.log(nombre);
    }

## 9. LES TABLEAUX

### Exercice : Somme du tableau

Complétez le programme pour calculer puis afficher la somme des valeurs du tableau :

    const nombres = [11, 3, 7, 2, 9, 10];
    let somme = 0;

    for (let i = 0; i < nombres.length; i++) {
        somme += nombres[i];
    }

    console.log(somme);

### Exercice : Valeur maximale du tableau

    const valeurs = [3, 11, 7, 2, 9, 10];
    let max;

    max = 0;
    for (let i = 0; i < nombres.length; i++) {
        if(max < nombres[i]) {
          max = nombres[i];
        }
    }

    console.log(max);
