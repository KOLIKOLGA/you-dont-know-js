"use strict";

const aside = document.getElementsByTagName("aside")[0];
const book = document.querySelectorAll("div");
const adv = document.querySelectorAll("div.adv")[0];
const book2 = book[0].getElementsByTagName("li");
const book4 = book[5].getElementsByTagName("li");
const book6 = book[2].getElementsByTagName("li");

const body = document.getElementsByTagName("body")[0];
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

adv.remove();
aside.append(book[2]);
aside.prepend(book[1]);
book[3].before(book[4]);

book2[3].after(book2[6]);
book2[4].after(book2[8]);
book2[9].after(book2[2]);

book4[2].before(book4[9]);
book4[3].before(book4[4]);
book4[4].before(book4[5]);
book4[9].before(book4[6]);
book[4].children[0].children[0].textContent =
  "Книга 3. this и Прототипы Объектов";

book6[8].innerHTML = "<li>Глава 8: За пределами ES6</li>";
