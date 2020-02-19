# Javascript - les bases - Exercices

## FONCTIONS

    // Renvoie le carré de x
    function carre(x) {
      return x * x;
    }
    // Renvoie le minimum entre a et b
    function minimum(a, b) {
      if (a < b) {
        return a;
      }
      return b;
    }

    console.log(carre(0)); // 0
    console.log(carre(5)); // 25
    console.log(minimum(4.5, 5)); // 4.5
    console.log(minimum(19, 9)); // 9
    console.log(minimum(1, 1)); // 1

<hr/>

## LES TABLEAUX

### Exercice : Mousquetaires

    const mousquetaires = ["Athos", "Porthos", "Aramis"];

    console.log("Voici les Trois Mousquetaires:");
    for (let i = 0; i < mousquetaires.length; i++) {
      console.log(mousquetaires[i]);
    }

    mousquetaires.push("D'Artagnan");
    console.log("Ils sont quatre à présent:");
    mousquetaires.forEach(function(mousquetaire) {
      console.log(mousquetaire);
    });

    mousquetaires.splice(2, 1);
    console.log("Le pauvre Aramis est mort...");
    for (const mousquetaire of mousquetaires) {
      console.log(mousquetaire);
    }

### Exercice : Somme du tableau

Complétez le programme pour calculer puis afficher la somme des valeurs du tableau :

    const nombres = [11, 3, 7, 2, 9, 10];
    let somme = 0;

    nombres.forEach(function(nombre) {
        somme += nombre;
    });

    console.log(somme);

### Exercice : Valeur maximale du tableau

Complétez le programme pour afficher la valeur la plus grande du tableau :

    const valeurs = [3, 11, 7, 2, 9, 10];
    let max;

    // On initialise la maximum avec le 1er élément du tableau
    max = valeurs[0];

    // On commence la recherche au second élément (indice 1)
    for (let i = 1; i < valeurs.length; i++) {
      // Si la valeur courante est supérieure au maximum actuel...
      if (valeurs[i] > max) {
        // ... Elle devient le nouveau maximum
        max = valeurs[i];
      }
    }

    console.log(max);

### Exercice : Test de tri d'un tableau

    function testTri(tablo) {
        for(let i=1; i<tablo.length-1; i++) {
            if( tablo[i] < tablo[i-1] ) return false;
        }
        return true;
    }

    console.log( testTri([1,2,3,4,5,6,7]) );
    console.log( testTri([3,9,8,2,6,7,5]) );

### Exercice : Tri du tableau

    function tri(tablo) {
        //on a besoin de 2 boucles for pour tester chaque valeur avec toutes les valeurs du tableau !
        for(let i=0; i<tablo.length; i++) {
            for(let j=0; j<tablo.length-1; j++) {
                //test si ordonné
                if(tablo[j] > tablo[j+1]) {
                    //echange des 2 valeurs 
                    let temp = tablo[j];
                    tablo[j] = tablo[j+1];
                    tablo[j+1] = temp;
                }
            } 
        }
        return tablo;
    }

    let tablo = tri([3,9,8,2,6,7,5]);
    console.log( tablo );

<hr/>

## MANIPULATIONS DE CHAINES

### Exercice : Compteur de voyelles

    function compterVoyelles(mot) {
      let nbVoyelles = 0;
      for (const lettre of mot) {
        const lettreMin = lettre.toLowerCase();
        if (
          lettreMin === "a" ||
          lettreMin === "e" ||
          lettreMin === "i" ||
          lettreMin === "o" ||
          lettreMin === "u" ||
          lettreMin === "y"
        ) {
          nbVoyelles++;
        }
      }
      return nbVoyelles;
    }

    console.log(compterVoyelles("RadAr")); // 2
    console.log(compterVoyelles("Tic et Tac")); // 3
    console.log(compterVoyelles("Oasis Oasis Oh")); // 7

### Exercice : Palindrome

    // Renvoie l'inverse du mot passé en paramètre
    const inverser = mot => {
      let motInverse = "";

      // Solution 1 : ajouter chaque lettre au début du mot inversé
      for (const lettre of mot) {
        motInverse = lettre + motInverse;
      }

      // Solution 2 : parcourir le mot de la fin vers le début
      /* for (let i = mot.length - 1; i >= 0; i--) {
        motInverse = motInverse + mot[i].toLowerCase();
      } */
      return motInverse;
    };

    // Renvoie vrai si le mot est un palindrome, faux sinon
    const estPalindrome = mot => {
      // On compare les chaînes en minuscules
      return inverser(mot).toLowerCase() === mot.toLowerCase();
    };

    console.log(estPalindrome("RadAr")); // true
    console.log(estPalindrome("KAYAk")); // true
    console.log(estPalindrome("Bora-Bora")); // false

### Exercice : Leet speak

    // Renvoie l'équivalent "leet speak" d'une lettre
    function convertirLettreLeet(lettre) {
      // Par défaut, la lettre ne change pas
      let lettreLeet = lettre;
      switch (lettre.toLowerCase()) {
        case "a":
          lettreLeet = "4";
          break;
        case "b":
          lettreLeet = "8";
          break;
        case "e":
          lettreLeet = "3";
          break;
        case "l":
          lettreLeet = "1";
          break;
        case "o":
          lettreLeet = "0";
          break;
        case "s":
          lettreLeet = "5";
          break;
        case "t":
          lettreLeet = "7";
          break;
      }
      return lettreLeet;
    }

    // Renvoie un mot converti en "leet speak"
    function convertirMotLeet(mot) {
      let motLeet = "";
      for (const lettre of mot) {
        motLeet += convertirLettreLeet(lettre);
      }
      return motLeet;
    }

    console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
    console.log(convertirMotLeet("Noob")); // "N008"
    console.log(convertirMotLeet("Hacker")); // "H4ck3r"

<hr/>

## Bonus : Convertir un nombre en toutes lettres

    function Convertir(nombre) //254
    {
        let mot="";

        let unites = nombre%10; //4
        
        nombre-=unites; //250
        let dizaines = (nombre%100) /10; //5

        let centaines = (nombre-dizaines*10)/100; //2

        console.log("centaines : "+centaines);
        console.log("dizaines : "+dizaines);
        console.log("unites : "+unites);

        let tabcentaines = ["","","deux","trois","quatre","cinq","six", "sept", "huit", "neuf"];
        switch(centaines)
        {
            case 0 : break;
            case 1 : mot="cent "; break;
            default : mot = tabcentaines[centaines] +" cents ";
        }

        let tabdizaines = ["","","vingt","trente","quarante","cinquante",
                          "soixante","soixante","quatre-vingts","quatre-vingts"];
        mot += tabdizaines[dizaines];

        switch(unites)
        {
            case 0:
                if(dizaines==0 && centaines==0) mot="zero";
                else if(dizaines==1 || dizaines==7 ||dizaines==9) { mot+="dix ";}
                break;
            case 1:
                let tabUns=["un","onze","et-un","et-un","et-un","et-un","et-un","et-onze","-un","-onze"];
                mot+=tabUns[dizaines];
                break;
            case 2:
            let tabDeux=["deux","douze","-deux","-deux","-deux","-deux","-deux","-douze","-deux","-douze"];
                mot+=tabDeux[dizaines];
                break;
            case 3:
            let tab3=["trois","treize","-trois","-trois","-trois", "-trois","-trois","-treize","-trois","-treize"];
                mot+=tab3[dizaines];
                break;
            case 4:
                let tab4=["quatre","quatorze","-quatre","-quatre","-quatre","-quatre","-quatre","-quatorze","-quatre","-quatorze"];
                mot+=tab4[dizaines];
                break;
            case 5:
            let tab5=["cinq","quinze","-cinq","-cinq","-cinq", "-cinq","-cinq","-quinze","-cinq","-quinze"];
                mot+=tab5[dizaines];
                break;      
            case 6:
            let tab6=["six","seize","-six","-six","-six", "-six","-six","-seize","-six","-seize"];
                mot+=tab6[dizaines];
                break;
            case 7:
            let tab7=["sept","dix-sept","-sept","-sept","-sept", "-sept","-dix-sept","-sept","-dix-sept"];
                mot+=tab7[dizaines];
                break;
            case 8:
            let tab8=["huit","dix-huit","-huit","-huit","-huit", "-huit","-huit","-dix-huit","-huit","-dix-huit"];
                mot+=tab8[dizaines];
                break;
            case 9:
            let tab9=["neuf","dix-neuf","-neuf","-neuf","-neuf", "-neuf","-neuf","-dix-neuf","-neuf","-dix-neuf"];
                mot+=tab9[dizaines];
                break;
        }
        return mot;
    }

    let nombre = Number(prompt("Un nombre entre 0 et 999 :"));
    console.log(Convertir(nombre));