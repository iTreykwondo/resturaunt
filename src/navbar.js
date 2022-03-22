const navbar = () => {
  const navBar = document.createElement("div");
  const homeButton = document.createElement("a");
  const menuButton = document.createElement("a");
  const contactButton = document.createElement("a");

  const homeButtonText = document.createTextNode("Home");
  const menuButtonText = document.createTextNode("Menu");
  const contactButtonText = document.createTextNode("Contact");

  navBar.classList.add("navbar");
  menuButton.classList.add("menu");
  homeButton.classList.add("home");
  contactButton.classList.add("contact");

  homeButton.title = "Home";
  homeButton.href = "#";
  homeButton.append(homeButtonText);

  menuButton.title = "menu";
  menuButton.href = "#";
  menuButton.append(menuButtonText);

  contactButton.title = "Contact";
  contactButton.href = "#";
  contactButton.append(contactButtonText);

  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);

  return navBar;
};

export default navbar;
