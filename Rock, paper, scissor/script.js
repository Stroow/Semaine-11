var rand;
var choice;
var $victoire = document.querySelector('#victoire p');

function $rand() {
    rand = Math.floor((Math.random() * 3) + 1);
}


function rps(choice, rand) {
    if (choice === rand) {
        $choice = "Egalité! ";
    } 
	else if (choice == 1 && rand == 2) {
        alert("J'ai fait feuille, vous avez : Perdu !");
    } 
	else if (choice == 1 && rand == 3) {
        alert("J'ai fait ciseaux, vous avez : Gagné !");
    } 
	else if (choice == 1 && rand == 1) {
        alert("J'ai fait pierre, nous sommes Ex : aequo !");   
    } 
	else if (choice == 2 && rand == 3) {
        alert("J'ai fait ciseaux, vous avez : Perdu !");
    } 
	else if (choice == 2 && rand == 1) {
        alert("J'ai fait pierre, vous avez : Gagné !");
    } 
	else if (choice == 2 && rand == 2) {
        alert("J'ai fait feuille, nous sommes : Ex aequo !");     
    } 
	else if (choice == 3 && rand == 1) {
        alert("J'ai fait pierre, vous avez : Perdu !");
    } 
	else if (choice == 3 && rand == 2) {
        alert("J'ai fait feuille, vous avez : Gagné !");
    } 
	else if (choice == 3 && rand == 3) {
        alert("J'ai fait ciseaux, nous sommes : Ex aequo !");
    }
        
    
    $victoire.innerHTML = $choice;
};

function playerschoice() {
    choice = document.getElementById('jeux').value;
};
button.onclick = activate;

function activate() {
    $rand();
    playerschoice();
    rps(choice, rand)
};