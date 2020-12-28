const modalOverlay = document.querySelector('.modal-overlay') //document.querySelector siguinifica que ta pegando o .modal-Overlay do CSS
const cards = document.querySelectorAll('.card') //document.querySelectorAll aqui ele vai selecionar todos os 6 card

for (let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}
                        //close-modal é o botão
document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe"). src = ""
})


