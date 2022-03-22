const home = () => {
  const div = document.createElement("div");
  const wrapperText = document.createElement("div");
  const h1 = document.createElement("h1");
  const subText = document.createElement("p");
  const img = document.createElement("img");

  div.classList.add("hero");

  img.src = "../img/tea-house.jpg";
  img.classList.add("img");
  img.style.height = "auto";
  img.style.width = "600px";
  img.style.borderRadius = "80px";

  h1.innerHTML = "Stop by and have a nice hot cuppa tea.";
  wrapperText.classList.add("wrapper-text");

  subText.innerHTML = "We have a plethora of choices!";

  wrapperText.append(h1);
  wrapperText.append(subText);
  div.append(wrapperText);
  div.append(img);

  return div;
};

export default home;
