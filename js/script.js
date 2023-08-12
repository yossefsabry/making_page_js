// start header
let header = document.createElement("header");
// make logo name
let header_h2 = document.createElement("h2");
let text_h2 = document.createTextNode("hello");
header_h2.appendChild(text_h2);
header.appendChild(header_h2);
// make ul and li
let header_ul = document.createElement("ul");
let header_li_1 = document.createElement("li");
let header_li_2 = document.createElement("li");
let header_li_3 = document.createElement("li");
let header_li_4 = document.createElement("li");
let il_content_1 = document.createTextNode("Home");
let il_content_2 = document.createTextNode("About");
let il_content_4 = document.createTextNode("Service");
let il_content_3 = document.createTextNode("Contact");

header_li_1.appendChild(il_content_1);
header_li_2.appendChild(il_content_2);
header_li_3.appendChild(il_content_3);
header_li_4.appendChild(il_content_4);

header_ul.appendChild(header_li_1);
header_ul.appendChild(header_li_2);
header_ul.appendChild(header_li_3);
header_ul.appendChild(header_li_4);

header.appendChild(header_ul);

// start css header
header.style.cssText =
  "width:100%; display:flex; justify-content:space-between; align-items:center; padding:20px 10px ";
header_h2.style.cssText =
  "font-size:30px; margin:0; padding:0px 5px; color:#00bcd4cf;";
header_ul.style.cssText =
  "display:flex; justify-content:space-between; align-items:center; list-style:none; margin:0; padding:0 20px; gap:20px; opacity:0.7;";
header_ul.children[0].style.cssText = "cursor:pointer;";
header_ul.children[1].style.cssText = "cursor:pointer;";
header_ul.children[2].style.cssText = "cursor:pointer;";
header_ul.children[3].style.cssText = "cursor:pointer;";

// end header
// start hero
let hero = document.createElement("div");
hero.className = "hero";

// make a loop for make 15 card
for (let i = 0; i < 15; i++) {
  let card = document.createElement("div");
  let card_span = document.createElement("span");
  let card_p = document.createElement("p");
  let span_content = document.createTextNode("Product");
  let p_content = document.createTextNode(i + 1);
  card_span.appendChild(span_content);
  card_p.appendChild(p_content);
  card.appendChild(card_p);
  card.appendChild(card_span);
  hero.appendChild(card);
  card.style.cssText =
    "background-color:#fff; padding:21px; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:5px; cursor:pointer;";
  card_p.style.cssText = "font-weight:bold";
}

hero.style.cssText =
  "display:grid; grid-template-columns: repeat(auto-fill, minmax(420px,1fr)); margin: auto; background-color:#3333; width:100%; padding:12px; gap:12px; width:100%;";
// end hero
// start footer
let footer = document.createElement("footer");
let footer_p = document.createElement("p");
let footer_content = document.createTextNode("All right reserved || yossef");
footer_p.appendChild(footer_content);
footer.appendChild(footer_p);
// css footer
footer.style.cssText =
  "width:100%; background-color:#00bcd4cf; padding:8px; text-align:center; color:#fff; font-size:18px;";

// end footer

document.body.appendChild(header);
document.body.appendChild(hero);
document.body.appendChild(footer);
// css body
document.body.style.cssText =
  "margin:0; padding:0;font-family:Arial, Helvetica, sans-serif; overflow-x:hidden;width:100%; height:100vh;";
