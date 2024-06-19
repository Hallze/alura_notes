function alterarStatus(n) {

    let game = document.getElementById(`game-${n}`);
    let a = game.querySelector("a")
    let img = game.querySelector(".dashboard__item__img")

    if (a.classList.contains("dashboard__item__button--return")) {
        a.innerHTML = `Alugar`;
        a.classList.remove("dashboard__item__button--return");
    } else {
        a.innerHTML = `Devolver`;
        a.classList.add("dashboard__item__button--return");
    }

    if (img.classList.contains("dashboard__item__img--rented")) {
        img.classList.remove("dashboard__item__img--rented");
    } else {
        img.classList.add("dashboard__item__img--rented");
    }
}