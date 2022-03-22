const menu = () => {
  const div = document.createElement("div");
  const title = document.createElement("h1");
  const menuItem1 = document.createElement("p");
  const menuItem2 = document.createElement("p");
  const menuItem3 = document.createElement("p");

  div.classList.add("menu-list");

  title.innerHTML = "Check out our menu!";
  menuItem1.innerHTML = "Green Tea ... $3.99";
  menuItem2.innerHTML = "Black Tea ... $3.99";
  menuItem3.innerHTML = "Chamomile Tea ...  $4.99";

  div.append(title);
  div.append(menuItem1);
  div.append(menuItem2);
  div.append(menuItem3);
  return div;
};

export default menu;
