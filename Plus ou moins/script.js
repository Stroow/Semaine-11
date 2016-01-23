$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Allez, plus !";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "T'es un tueur, Bravo !";
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "Eh non, bien tenté c'est moins !";
    }
}

$bouton.onclick = verifier;