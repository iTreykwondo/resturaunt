import navbar from "./navbar";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

const renderWebpage = () => {
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.appendChild(navbar());
  content.append(home());

  return content;
};

document.body.appendChild(renderWebpage());

const menupage = document.querySelector(".menu");
menupage.addEventListener("click", () => {
  let content = document.querySelector("#content");

  if (content.hasChildNodes()) {
    content.removeChild(content.children[1]);
  }
  content.append(menu());
});

const homePage = document.querySelector(".home");
homePage.addEventListener("click", () => {
  let content = document.querySelector("#content");

  if (content.hasChildNodes()) {
    content.removeChild(content.children[1]);
  }
  content.append(home());
});

const contactPage = document.querySelector(".contact");
contactPage.addEventListener("click", () => {
  let content = document.querySelector("#content");

  if (content.hasChildNodes()) {
    content.removeChild(content.children[1]);
  }
  content.append(contact());
});
