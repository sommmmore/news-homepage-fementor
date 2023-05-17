document.querySelector("button").addEventListener("click", showCrossSign);

function showCrossSign(){
    if(document.querySelector("button").getAttribute("aria-expanded") == 'true') {
        document.querySelector("button img").setAttribute('src', "./assets/images/icon-menu-close.svg");
    } else if(document.querySelector("button").getAttribute("aria-expanded") == 'false'){
        document.querySelector("button img").setAttribute('src', "./assets/images/icon-menu.svg");
    }
}
