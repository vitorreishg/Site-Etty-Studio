var cardsHover = window.document.getElementsByClassName("cardsHover");
var imgCards = window.document.getElementsByClassName("imagensBloco02");
var infoCards = window.document.getElementsByClassName("infosBloco02");
var titleCards = window.document.getElementsByClassName("titleCard");


function hoverCards(){
    
    cardsHover.style.transform = "scale(1.02)";
    imgCards.style.border = "solid white 2px";
    imgCards.style.borderRadius = "18px";
    titleCards.style.textDecoration = "underline"

}