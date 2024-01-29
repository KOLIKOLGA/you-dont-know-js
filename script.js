"use strict";

const aside = document.getElementsByTagName("aside")[0];
const book = document.querySelectorAll("div");
const adv = document.querySelectorAll("div.adv")[0];

adv.remove();

console.log(aside);

console.log(adv);
console.log(book);
aside.append(book[2]);
aside.prepend(book[1]);
book[3].before(book[4]);
