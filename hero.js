// initialisation du pv et du nombre d'entrainement//
let pvHero = 70;
alert("votre hero à " + pvHero + " pv" + " et 5 entrainement a faire");
//on affiche le nombre d'entrainement 1 à 1
for (let entrainement = 1; entrainement <= 5; entrainement++) {
    alert("Entrainement numero " + entrainement);
}
alert("vous avez passez tout les entrainements , place au combat");
// on donne le nombre d'ennemie 
let ennemie = 3;
// tant que tout les ennemie ne sont pas vaincus , le hero continue d'attaquer
while (ennemie > 0) {
    alert("le heros attaque un ennemie");
    alert("il reste " + ennemie + " ennemi");
    ennemie--;
}
//tout les ennemis sont vaincus , on affiche le message 
alert("tout les ennemis sont vaincus , fin du combat");
// on met tout les objets du coffres dans un tablei
alert("le heros ouvres les coffres aux tresors ");
let coffres = ["épée légendaire", "potion magique", "Bouclier en or"];
//on parcour ce tableau et on les affiches 1 à 1,
coffres.forEach(function (objet) {
    alert("le hero à trouvé " + objet);
});
//fin du programme
alert("L'aventure du heros est terminé");