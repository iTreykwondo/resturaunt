import navbar from "./navbar";
import home from "./home";
import about from "./about";
import contact from "./contact";

const renderWebpage = () => {
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.appendChild(navbar());
  content.appendChild(home());

  return content;
};

document.body.appendChild(renderWebpage());

const aboutpage = document.querySelector(".about");
aboutpage.addEventListener("click", () => {
  let content = document.querySelector("#content");

  if (content.hasChildNodes()) {
    content.removeChild(content.children[1]);
  }
  content.append(about());
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
