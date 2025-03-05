let pointHero = prompt("Combien de point de vie as-tu pour te lancer ?");
let monster = 100;
if (pointHero >= 50) {
    alert("tu attaques avec toute ta puissance");
    monster -= 35;
} else if (pointHero >= 20 && pointHero < 50) {
    alert("il est affaibli attaque moins fort");
    monster -= 15;
} else {
    alert("il est trop faible pour attaquer");
}
alert("il reste " + monster + " point de vie au monstre");