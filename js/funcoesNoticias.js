function redirectAmoreTrovao () {
    window.location.href = 'https://www.adorocinema.com/noticias/filmes/noticia-163643/';
}

function redirectStrangerThings () {
    window.location.href = 'https://www.adorocinema.com/noticias/series/noticia-163751/';
}

function redirectAllofUsAreDead () {
    window.location.href = 'https://www.adorocinema.com/noticias/series/noticia-162340/';
}

function redirectJurassicWorld () {
    window.location.href = 'https://www.adorocinema.com/noticias/filmes/noticia-163780/';
}

function redirectOGrandeMilagre () {
    window.location.href = 'https://www.adorocinema.com/noticias/filmes/noticia-163781/';
}

function redirectTheBoys () {
    window.location.href = 'https://www.adorocinema.com/noticias/filmes/noticia-163766/';
}

function redirectMinions2 () {
    window.location.href = 'https://www.adorocinema.com/noticias/filmes/noticia-163778/';
}

function redirectLightyear () {
    window.location.href = 'https://www.adorocinema.com/noticias/filmes/noticia-162816/';
}

function redirectJurassicWorld2 () {
    window.location.href = 'https://www.adorocinema.com/noticias/filmes/noticia-163688/';
}

function redirectJhonnyDeep () {
    window.location.href = 'https://www.adorocinema.com/noticias/filmes/noticia-163796/';
}

function redirectPanteraNegra2 () {
    window.location.href = 'https://www.adorocinema.com/noticias/filmes/noticia-163804/';
}

function redirectJordanPeeles () {
    window.location.href = 'https://www.adorocinema.com/noticias/filmes/noticia-163800/';
}

function redirectGreysAnatomy () {
    window.location.href = 'https://www.adorocinema.com/noticias/series/noticia-163783/';
}

function redirectTurbulenciasDeVerao () {
    window.location.href = 'https://www.adorocinema.com/noticias/series/noticia-163809/';
}

function redirectEmilyemParis () {
    window.location.href = 'https://www.adorocinema.com/noticias/series/noticia-163803/';
}

function redirectResidentEvil () {
    window.location.href = 'https://www.adorocinema.com/slideshows/series/slideshow-163794/';
}

function redirectKamalaKhan () {
    window.location.href = 'https://www.adorocinema.com/noticias/series/noticia-163762/';
}

function redirectMsMarvel () {
    window.location.href = 'https://www.adorocinema.com/noticias/series/noticia-163755/';
}

function redirectCaraECoragem () {
    window.location.href = 'https://www.adorocinema.com/noticias/series/noticia-163791/';
}

function redirectTopGun () {
    window.location.href = 'https://www.adorocinema.com/filmes/filme-186636/';
}

function redirectAMedium () {
    window.location.href = 'https://www.adorocinema.com/filmes/filme-292992/';
}

function redirectMedidaProvisoria () {
    window.location.href = 'https://www.adorocinema.com/filmes/filme-273189/';
}

function redirectJurassicWorldCartaz () {
    window.location.href = 'https://www.adorocinema.com/filmes/filme-242492/trailer-19566470/';
}

function redirectPureza () {
    window.location.href = 'https://www.adorocinema.com/filmes/filme-266248/';
}

function redirectAVenturadeUmaVida () {
    window.location.href = 'https://www.adorocinema.com/filmes/filme-281613/';
}

function redirectOHomemdoNorte () {
    window.location.href = 'https://www.adorocinema.com/filmes/filme-278182/';
}

function redirectDoutorEstranho () {
    window.location.href = 'https://www.adorocinema.com/filmes/filme-251390/';
}

function redirectSonic2 () {
    window.location.href = 'https://www.adorocinema.com/filmes/filme-281203/';
}

function redirectLutaPelaFe () {
    window.location.href = 'https://www.adorocinema.com/filmes/filme-291584/';
}

var action_abaSeries = document.getElementById("action-abaSeries")
var action_abaFilmes = document.getElementById("action-abaFilmes")
var aba_filmes = document.getElementById("aba-filmes")
var aba_series = document.getElementById("aba-series")

action_abaFilmes.classList.add("item");
action_abaSeries.classList.remove("item");
aba_series.classList.add("hide");
aba_filmes.classList.remove("hide");

action_abaSeries.addEventListener("click", function () {
    action_abaSeries.classList.add("item");
    action_abaFilmes.classList.remove("item");
    aba_filmes.classList.add("hide");
    aba_series.classList.remove("hide");
})

action_abaFilmes.addEventListener("click", function () {
    action_abaFilmes.classList.add("item");
    action_abaSeries.classList.remove("item");
    aba_series.classList.add("hide");
    aba_filmes.classList.remove("hide");
})