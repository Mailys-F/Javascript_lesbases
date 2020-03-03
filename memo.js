
let reponse = prompt("Entrez votre réponse :");
console.log(reponse); //trace dans la console

alert("Votre réponse est : " + reponse); //boite de dialogue

//ecrit dans la page html, à la fin du flux html
document.write("Votre réponse est : " + reponse); 

let nombre = Number(reponse);
if( isNaN(nombre)) {
    alert("Votre réponse n'est pas un nombre.");
}

for(let i=0; i<10; i++) { //pour faire 10 tours de boucle
    console.log(i);
}

while( isNaN(nombre) ) {
    reponse = prompt("Entrez un nombre :");
    // break; pour casser la boucle
}

//3 instructions équivallentes
nombre = nombre +1;
nombre += 1;
nombre++;


// tableaux -> []

const tabloVide = []; 
const tablo = [5,8,true,9,45,"texte",36];

//pour avoir le 5ème élement :
tablo[4] //45 car le 1er indice est 0
tablo[tablo.length] //undefined car tablo[7] n'existe pas !

for(let i=0; i < tablo.length; i++) {
    console.log(tablo[i]); //chaque élément du tablo séparément, l'un après l'autre
}

tablo[4] = 100; //remplace 45 par 100
console.log(tablo); //trace le tablo :)

//une chaine est un tableau de caractères 
let texte = "un joli mot"; // [u,n, ,j,o,l,i ...]
let car = texte[4]; //5ème caractère = 'o'

for(let i=0; i < texte.length; i++) {
    console.log(texte[i]); //chaque caractère du texte
}

// je veux remplacer m par p -> un joli pot
texte[8] = "p"; // MARCHE PAS parce que les chaines sont immuables !!

//solution : convetir la chaine en tableau, faire le remplacement, reconvertir le tableau en chaine
const tab = texte.split(""); //on fractionne sur un caracète vide pour obtenir un tableau de car
tab[8] = "p";
texte = tab.joint(""); //idem en sens inverse

//cas des tests de chaines : pb de sensibilté à la casse
let chaine = "Chaine Test";
if( chaine === "chaine test" ) { //faux à cause des majuscules

}

if( chaine.toLowerCase() === "chaine test" ) { //vrais

}

let reponse = prompt("un mot");
reponse = reponse.toLowerCase(); //passe tout en minuscule avant de faire les tests etc.
