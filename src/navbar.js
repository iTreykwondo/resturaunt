const navbar = () => {
  const navBar = document.createElement("div");
  const homeButton = document.createElement("a");
  const aboutButton = document.createElement("a");
  const contactButton = document.createElement("a");

  const homeButtonText = document.createTextNode("Home");
  const aboutButtonText = document.createTextNode("About");
  const contactButtonText = document.createTextNode("Contact");

  homeButton.title = "Home";
  homeButton.href = "#";
  homeButton.append(homeButtonText);

  aboutButton.title = "About";
  aboutButton.href = "#";
  aboutButton.append(aboutButtonText);

  contactButton.title = "Contact";
  contactButton.href = "#";
  contactButton.append(contactButtonText);

  navBar.appendChild(homeButton);
  navBar.appendChild(aboutButton);
  navBar.appendChild(contactButton);

  return navBar;
};

export default navbar;
