!function(e){var a={};function n(i){if(a[i])return a[i].exports;var t=a[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=a,n.d=function(e,a,i){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)n.d(i,t,function(a){return e[a]}.bind(null,t));return i},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="",n(n.s=0)}([function(e,a,n){"use strict";n.r(a);var i=()=>{const e=document.createElement("div"),a=document.createElement("div"),n=document.createElement("a"),i=document.createElement("a");return e.id="landingPage",a.id="viewInfoContainer",n.id="viewInfo",i.id="scrollDown",i.href="#",n.href="#",n.textContent="INFORMACIJE",e.appendChild(a),a.appendChild(n),e.appendChild(i),e};var t=()=>{const e=document.createElement("div");return e.innerHTML="Restoran Arabika Kruševac je mesto puno iznenađenja. Njihova ponuda hrane i pića ostaviće vas bez daha, a ono što je posebno važno je da u bogatom izboru specijaliteta kako domaće tako i interacionalne kuhinje, poslastica koje su popularne širom sveta, osvežavajućim voćnim napicima i ukusu domaće kafe možete uživati i u svom domu. Naručite online, Arabika dostava vama je na raspolaganju svakog dana.<br><br>Doručak u Arabici je idealan za početak dana, a kajgana, kačamak, sendviči i ovsena kaša su samo neki od ukusnih predloga. Raznovrsne pice, paste i rižoto zadovoljiće ljubitelje italijanske hrane. Kineska kuhinja je takođe deo punde restorana Arabika, a tu su i burgeri, tortilje i druga internacionalna jela.<br><br>Dostava hrane Arabika Kruševac u svom bogatom jelovniku ima i tradicionalna srpska jela koja se pripremaju na moderan način, pa tako možete poručiti jagnjetinu ispod sača, Sarmice carice Milice ili Čarapanski san i uz to obagatiti svoj obrok velikim izborom salate, supe ili čorbe. Specifičan je i Sportski meni u Arabici u kome su kombinacije mesa i priloga prilagođeni zdravoj sportskoj ishrani.<br><br>Kao šlag na tortu, dostava Arabika Kruševac na svom meniju ima torte i kolače, frape, smuti, ceđene sokove, kafe i mnoge druge poslastice i napitke kojima nećete odoleti. Ukuse celog sveta na vaš prag dostavlja Arabika Kruševac. Dostava pice, dostava salate, dostava torte i restoran Arabika olakšaće vaš život. Naručite online, dostava Arabika u vašem domu za tili čas.",e};const o="./styles/images/food/";var r={pizzas:{capriciossa:{name:"Capriciossa",price:"400din.",description:"pica sos, kačkavalj, šunka, pečurke",image:`${o}capriciossa.jpg`},vegetarijana:{name:"Vegetarijana",price:"300din.",description:"pica sos, biljni sir, šampinjoni, sezonsko povrće, masline",image:`${o}vegetarijana.jpg`},san_giovani:{name:"San Giovani",price:"515din.",description:"pica sos, kačkavalj, suvo meso, pečurke",image:`${o}san_giovani.jpg`},serbiana_arabica:{name:"Serbiana Arabica",price:"650din.",description:"pica sos, kačkavalj, kulen, suvo meso, ljuta paprika, kajmak",image:`${o}serbiana_arabica.jpg`},quattro_stagione:{name:"Quattro Stagione",price:"470din.",description:"pica sos, kačkavalj, šunka, pečurke, suvo meso, jaje, pavlaka, masline",image:`${o}quattro_stagione.jpg`},napolitana:{name:"Napolitana",price:"680din.",description:"mocarela, pršuta, kačkavalj, čeri paradajz, parmezan, rukola",image:`${o}napolitana.jpg`}},breakfasts:{srpski_dorucak:{name:"Srpski Doručak",price:"310din.",description:"kajgana sa lukom, pečena slaninica, mladi sir, paradajz, kiselo mleko",image:`${o}srpski_dorucak.jpg`},budjenje_u_arabici:{name:"Buđenje u Arabici",price:"340din.",description:"kroasan, kulen, slanina, paradajz, tost sir, kajgana",image:`${o}budjenje_u_arabici.jpg`},dorucak_u_arabici:{name:"Doručak u Arabici",price:"360din.",description:"prženice, krem sir, svinjski pršut, paradajz",image:`${o}dorucak_u_arabici.jpg`}}};var d=()=>{const e=document.createElement("div");return Object.keys(r).forEach(a=>{const n=document.createElement("div");n.classList.add("foodTypeContainer"),Object.keys(r[a]).forEach(e=>{const i=r[a][e].name,t=r[a][e].price,o=r[a][e].description,d=r[a][e].image,s=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),m=document.createElement("img");s.classList.add("foodContainer"),c.classList.add("foodNameContainer"),l.classList.add("foodPriceContainer"),u.classList.add("foodDescriptionContainer"),p.classList.add("foodImageContainer"),m.classList.add("foodImage"),c.textContent=i,l.textContent=t,u.textContent=o,m.src=d,m.alt=i,p.appendChild(m),s.appendChild(c),s.appendChild(p),s.appendChild(u),s.appendChild(l),n.appendChild(s),console.log(r[a][e].name)});const i=document.createElement("div");i.classList.add("lineSeperator"),e.appendChild(n),e.appendChild(i)}),e};var s=()=>{const e=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div");e.id="information",a.id="informationTabs",n.id="informationContent";const i=document.createElement("button"),t=document.createElement("button"),o=document.createElement("button");return i.id="aboutTab",t.id="menuTab",o.id="contactTab",i.className="tab",t.className="tab selectedTab",o.className="tab",i.textContent="ABOUT",t.textContent="MENU",o.textContent="CONTACT",a.appendChild(i),a.appendChild(t),a.appendChild(o),n.appendChild(d()),e.appendChild(a),e.appendChild(n),e};var c=()=>{const e=document.createElement("div");return e.innerHTML="",e};const l=document.getElementById("content");l.appendChild(i()),l.appendChild(s());const u=document.getElementById("aboutTab"),p=document.getElementById("menuTab"),m=document.getElementById("contactTab"),k=document.getElementById("informationContent"),v=document.getElementsByClassName("tab"),b=()=>{k.innerHTML="";for(let e of v)e.classList.remove("selectedTab")};u.addEventListener("click",()=>{b(),u.classList.add("selectedTab"),k.appendChild(t())}),p.addEventListener("click",()=>{b(),p.classList.add("selectedTab"),k.appendChild(d())}),m.addEventListener("click",()=>{b(),m.classList.add("selectedTab"),k.appendChild(c())})}]);