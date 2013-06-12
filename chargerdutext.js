$(document).ready(function(e) {

$.ajax({
url :'page.php',// fichier contient un echo texte
success : fctSuccess,
cache : false,// eviter le cache forecer le timestamp
type : 'Get'
})
})

function fctSuccess(){
console.log(typeof(arg)) // retourne le type de contenue ici c'est string
}
fucntion fctError(xhr,status;erreur){
console.log(erreur)
}
