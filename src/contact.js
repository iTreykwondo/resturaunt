const contact = () => {
  let div = document.createElement("div");
  const h1 = document.createElement("h1");
  const phoneNumber = document.createElement("p");
  const email = document.createElement("p");

  div.classList.add("contact-info");

  h1.innerHTML = "Contact Info";
  phoneNumber.innerHTML = "Phone Number: (555)-(555)-(5555)";
  email.innerHTML = "Email Address: theteahouse@email.com";

  div.append(h1);
  div.append(phoneNumber);
  div.append(email);

  return div;
};

export default contact;
