# Javascript - les bases - Exercices

## FONCTIONS

Ecrivez trois fonctions :

- Qui renvoie le carré d’un nombre
- Qui retourne le plus petit de deux nombres
- Qui retourne le PGCD de deux nombres (bonus)

<hr/>

## LES TABLEAUX

### Exercice : Mousquetaires

Ecrivez un programme qui :

- Crée un tableau nommé mousquetaires contenant les noms des trois mousquetaires, Athos, Porthos et Aramis ;
- Affiche le nom de chaque mousquetaire à l'aide d'une boucle for ;
- Ajoute au tableau le mousquetaire d'Artagnan ;
- Affiche de nouveau le nom de chaque mousquetaire, cette fois à l'aide de la méthode forEach().
- Supprime Aramis du tableau ;
- Affiche le nom de chaque mousquetaire avec une boucle for-of.


### Exercice : Somme du tableau

Complétez le programme pour calculer puis afficher la somme des valeurs du tableau :

    const nombres = [11, 3, 7, 2, 9, 10];
    let somme = 0;

    // Ajoutez votre code ici

    console.log(somme);

### Exercice : Valeur maximale du tableau

Complétez le programme pour afficher la valeur la plus grande du tableau :

    const valeurs = [3, 11, 7, 2, 9, 10];
    let max;

    // Ajoutez votre code ici

    console.log(max);

### Exercice : Test de tri d'un tableau

Ecrire la fonction **testTri** qui informe si un un tableau envoyé en argument est formé ou non d'éléments tous rangés en ordre croissant.

    console.log( testTri([1,2,3,4,5,6,7]) ); //true
    console.log( testTri([3,9,8,2,6,7,5]) ); //false

### Exercice : Tri du tableau

Ecrire la fonction **tri** qui effectue le tri d'un tableau envoyé en argument.

    let tablo = tri([3,9,8,2,6,7,5]);
    console.log( tablo );

<hr/>

## MANIPULATIONS DE CHAINES

### Exercice : Compteur de voyelles

Complétez le programme en y ajoutant une fonction compterVoyelles() qui prend un mot en paramètre et renvoie son nombre de voyelles. Attention aux majuscules. Ne tenez pas compte des accents.

    console.log(compterVoyelles("RadAr")); // 2
    console.log(compterVoyelles("Tic et Tac")); // 3
    console.log(compterVoyelles("Oasis Oasis Oh")); // 7

### Exercice : Palindrome

Complétez le programme pour définir la fonction estPalindrome() qui renvoie vrai ou faux selon que le mot est un palindrome ou non.

    console.log(estPalindrome("RadAr")); // true
    console.log(estPalindrome("KAYAk")); // true
    console.log(estPalindrome("Bora-Bora")); // false

### Exercice : Leet speak

Le Leet speak est un système d'écriture où certains caractères sont remplacés par d'autres afin de produire un  résultat différent mais visuellement proche. Il est souvent utilisé dans certaines communautés hackers et gamers. <br/>
Utilisez l’alphabet Leet minimum le suivant et complétez le programme.

    console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
    console.log(convertirMotLeet("Noob")); // "N008"
    console.log(convertirMotLeet("Hacker")); // "H4ck3r"

<hr/>

## Bonus avancé : Convertir un nombre en toutes lettres

POur mener à bien votre exercice, voici quelles sont les étapes que votre script devra suivre (vous n'êtes pas obligé, mais c'est conseillé) :

- L'utilisateur est invité à entre un nombre entre 0 et 999.

- Ce nombre doit être envoyé à une fonction qui se charge de le convertir en toutes lettres.

- Cette même fonction doit contenir un système permettant de séparer les centaines, les dizaines et les unités. Ainsi, la fonction doit être capable de voir que dans le nombre 365, il y a 3 centaines, 6 dizaines et 5 unités. Pour obtenir ce résultat, pensez à utiliser le module **%** : 365 % 10 = 5

- Une fois le nombre découpé en trois chiffres, il ne reste plus qu'à convertir ces derniers en toutes lettres.

- Lorsque la fonction a fini de s'exécuter, elle renvoie le nombre en toutes lettres.

- Une fois le résultat de la fonction obtenu, il est affiché à l'utilisateur.

- Lorsque l'affichage du nombre en toutes lettres est terminé, on redemande un nouveau nombre à l'utilisateur.

<br/>
<hr/>

> Corrections [Partie_2_Exercices_corrections.md](Partie_2_Exercices_corrections.md)
