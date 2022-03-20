import navbar from "./navbar";

const renderWebpage = () => {
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.appendChild(navbar());

  return content;
};

document.body.appendChild(renderWebpage());
