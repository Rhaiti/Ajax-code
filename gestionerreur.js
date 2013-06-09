$(document).ready(function(e) {


$.ajax({
url:'fichier-404.php' // un fichier introuvable
error: fcterror // la fonction qui sera app lors de l'erreur
})

})

definition de la fonction d'erreur
function fcterror(xhr, status,erreur){
console.log(erreur); // retourne le nom de l'erreur
console.log(status); // retourne le 404 comme status d'erreur
console.log(xhr.status);

}
