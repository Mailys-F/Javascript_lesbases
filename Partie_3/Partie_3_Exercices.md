# Javascript - les bases - Exercices

## Manipulation du DOM avec innerHTML et textContent

### Exercice : Mon rêve familier

Créez un fichier html contenant le body suivant :

    <h1>Mon rêve familier</h1>
    <p>Je fais souvent ce rêve <span id="adjectif1">étrange</span> et <span id="adjectif2">pénétrant</span></p>
    <p>D'une <span>femme <span id="adjectif3">inconnue</span></span>, et que j'aime, et qui m'aime</p>
    <p>Et qui n'est, chaque fois, ni tout à fait la même</p>
    <p>Ni tout à fait une autre, et m'aime et me comprend.</p>
    <div class="auteur">Paul Verlaine</div>

Créez ensuite le script JS conforme aux instructions suivantes :

- Récupérer tous les paragraphes et afficher leur contenu textuel uniquement dans la console
- Inverser les adjectifs 1 et 2

## Manipulation du DOM avec les querySelectors

### Exercice : Compter les éléments

Créez un fichier html contenant le body suivant :

    <h1>Mon rêve familier (Paul Verlaine)</h1>
    <p>Je fais souvent ce rêve <span class="adjectif">étrange</span> et <span class="adjectif">pénétrant</span></p>
    <p>D'une <span>femme <span class="adjectif">inconnue</span></span>, et que j'aime, et qui m'aime</p>
    <p>Et qui n'est, chaque fois, ni tout à fait la même</p>
    <p>Ni tout à fait une autre, et m'aime et me comprend.</p>

Ajoutez-y le script suivant :

    // TODO : écrire la fonction compterElements

    console.log(compterElements("p")); // Doit afficher 4
    console.log(compterElements(".adjectif")); // Doit afficher 3
    console.log(compterElements("p .adjectif")); // Doit afficher 3
    console.log(compterElements("p > .adjectif")); // Doit afficher 2

Ecrivez la fonction compterElements afin que le reste du programme fonctionne.

<hr/>

## Manipulation du DOM avec les propriétés d'attributs et de classe

### Exercice : instruments de musique #1

Créez un fichier html contenant le body suivant :

    <h1>Quelques instruments de musique</h1>
    <ul>
        <li id="clarinette" class="vent bois">
            La <a href="https://fr.wikipedia.org/wiki/Clarinette">clarinette</a>
        </li>
        <li id="saxophone" class="vent bois">
            Le <a href="https://fr.wikipedia.org/wiki/Saxophone">saxophone</a>
        </li>
        <li id="trompette" class="vent cuivre">
            La <a href="https://fr.wikipedia.org/wiki/Trompette">trompette</a>
        </li>
        <li id="violon" class="cordes frottees">
            Le <a href="https://fr.wikipedia.org/wiki/Violon">violon</a>
        </li>
    </ul>

Créez ensuite le script JS et écrivez la fonction **infosLien** qui doit afficher :

- le nombre total de liens dans la page web
- la cible du premier et du dernier lien.

Attention : cette fonction doit afficher un résultat correct quel que soit le nombre de liens présents dans la page.

### Exercice : instruments de musique #2

Ajoutez à votre script le code suivant :

    possede("saxophone", "bois"); // Doit afficher true
    possede("saxophone", "cuivre"); // Doit afficher false
    possede("trompette", "cuivre"); // Doit afficher true
    possede("contrebasse", "cordes"); // Doit afficher une erreur

Puis écrivez la fonction **possede** qui vérifie qu'un élément possède une classe.

<hr/>
