 $( document ).ready(function() {
    
let slideAtual=0;
let listaSlides = ["image1", "image2", "image3"]
setInterval(slide, 1500)

function slide () {
    console.log ("slide atual:", slideAtual)

    if (slideAtual > 0) {
        $("#carrossel").removeClass(listaSlides[slideAtual - 1])
    } else if (slideAtual == 0){
        $("#carrossel").removeClass(listaSlides[ (listaSlides.length) -1])
    }

    $("#carrossel").addClass(listaSlides[slideAtual])

    slideAtual++;
    if(slideAtual > 2) {
        slideAtual=0;
    }

}
    
})


function mostrarPopUp() {
    window.alert("Venha para nosso time!!!")
}

function cadastrarEmail() {
    let email = document.getElementById ("campo email").value;
    console.log (email);
}

