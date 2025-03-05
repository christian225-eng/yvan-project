let prixArticle = prompt("quel est le prix de votre article");
let reduction = prompt("quelle pourcentage de reduction voulez-vous appliquer sur cet article");

if (prixArticle < 0 || reduction < 0) {
    alert("Met des valeurs positives");
} else {
    prixFinal = prixArticle - (prixArticle * (reduction / 100));
}
alert("Apres une réduction de" + reduction + ", le prix final en euros est : " + prixFinal);
