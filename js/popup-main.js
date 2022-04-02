// const linkButtons = document.querySelector('.nav__category-item-account');
// const linkButtonKey = document.querySelector('.nav__category-item-key');
// const linkButtonKeyRandom = document.querySelector('.nav__category-item-key-random');
// const itemsAccount = document.querySelectorAll('.popular__items-account');
// const itemsKey = document.querySelectorAll('.popular__items');
// const itemsKeyRandom = document.querySelectorAll('.popular__items-random');
// const itemsPumping = document.querySelectorAll('.pumping__items');
// const popular = document.querySelector('.popular');
// const watchButton = document.querySelector('.watch--btn');
// const product = document.querySelector('.product');
// linkButtons.onclick = function (evt) {
//     evt.preventDefault();
//     for (let i = 0; i < itemsKey.length; i++) {
//         itemsKey[i].classList.add('popular__items-no-show')
//         linkButtons.classList.add('nav__category-item-active')
//         linkButtonKey.classList.remove('nav__category-item-active')
//         linkButtonKeyRandom.classList.remove('nav__category-item-active')
//         watchButton.classList.add('watch--no-show')
//         popular.classList.remove('popular__items-no-show')
//         product.classList.remove('popular__items-no-show')
//     }
//     for (let i = 0; i < itemsAccount.length; i++) {
//         itemsAccount[i].classList.add('popular__items-show')
//     }
//     for (let i = 0; i < itemsKeyRandom.length; i++) {
//         itemsKeyRandom[i].classList.remove('popular__items-show')
//     }
//     for (let i = 0; i < itemsPumping.length; i++) {
//         itemsPumping[i].classList.remove('pumping__items-show')
//     }
// }
// linkButtonKey.onclick = function (evt) {
//     evt.preventDefault();
//     for (let i = 0; i < itemsKey.length; i++) {
//         itemsKey[i].classList.remove('popular__items-no-show')
//         linkButtons.classList.remove('nav__category-item-active')
//         linkButtonKey.classList.add('nav__category-item-active')
//         linkButtonKeyRandom.classList.remove('nav__category-item-active')
//         watchButton.classList.remove('watch--no-show')
//         popular.classList.remove('popular__items-no-show')
//         product.classList.remove('popular__items-no-show')
//     }
//     for (let i = 0; i < itemsAccount.length; i++) {
//         itemsAccount[i].classList.remove('popular__items-show')
//     }
//     for (let i = 0; i < itemsKeyRandom.length; i++) {
//         itemsKeyRandom[i].classList.remove('popular__items-show')
//     }
//     for (let i = 0; i < itemsPumping.length; i++) {
//         itemsPumping[i].classList.remove('pumping__items-show')
//     }
// }
// linkButtonKeyRandom.onclick = function (evt) {
//     evt.preventDefault();
//     for (let i = 0; i < itemsKey.length; i++){
//         itemsKey[i].classList.add('popular__items-no-show')
//         popular.classList.add('popular__items-no-show')
//         linkButtons.classList.remove('nav__category-item-active')
//         linkButtonKey.classList.remove('nav__category-item-active')
//         linkButtonKeyRandom.classList.remove('nav__category-item-active')
//         product.classList.add('popular__items-no-show')
//     }
//     for (let i = 0; i < itemsKey.length; i++){
//         itemsKey[i].classList.remove('pumping__items-show')
//         linkButtonKeyRandom.classList.add('nav__category-item-active')
//     }
//     for (let i = 0; i < itemsKeyRandom.length; i++){
//         itemsKeyRandom[i].classList.add('popular__items-show')
//         itemsKey[i].classList.add('popular__items-no-show')
//         itemsAccount[i].classList.add('popular__items-no-show')
//     }
//     for (let i = 0; i < itemsAccount.length; i++) {
//         itemsAccount[i].classList.remove('popular__items-show')
//         linkButtons.classList.remove('nav__category-item-active')
//         linkButtonKey.classList.remove('nav__category-item-active')
//     }
//     for (let i = 0; i < itemsPumping.length; i++) {
//         itemsPumping[i].classList.add('pumping__items-show')
//     }
// }
// // for (let i = 0; i > linkButtons.length; i++) {
// //     linkButtons[i].onclick = function (evt) {
// //         evt.preventDefault();
// //         items.classList.add('modal--show')
// //     }
// // }

// const buttonWatch = document.querySelector('.watch--btn');
// const productWatch = document.querySelector('.product__items-watch');

// buttonWatch.onclick = function () {
//     productWatch.classList.add('watch--show')
//     buttonWatch.classList.add('watch--no-show')
// }