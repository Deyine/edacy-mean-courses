var module2 = require('./module2');

function add(a, b, JaiBesoinDeTonResultat) {
    var addition = a+b;
    JaiBesoinDeTonResultat(addition);
}

add(8,7, function(resultat){
    module2.resultatAuCarre(resultat, function(carre){
        console.log('Voici le carré de ' + resultat, carre)
    })
})