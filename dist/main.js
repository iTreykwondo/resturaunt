(()=>{"use strict";const e=()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h1"),d=document.createElement("p"),c=document.createElement("img");return e.classList.add("hero"),c.src="../img/tea-house.jpg",c.classList.add("img"),c.style.height="auto",c.style.width="300px",c.style.borderRadius="80px",n.innerHTML="Stop by and have a nice hot cuppa tea.",t.classList.add("wrapper-text"),d.innerHTML="We have a plethora of choices!",t.append(n),t.append(d),e.append(t),e.append(c),e};document.body.appendChild((()=>{const t=document.createElement("div");return t.setAttribute("id","content"),t.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("a"),n=document.createElement("a"),d=document.createElement("a"),c=document.createTextNode("Home"),a=document.createTextNode("About"),o=document.createTextNode("Contact");return e.classList.add("navbar"),n.classList.add("about"),t.classList.add("home"),d.classList.add("contact"),t.title="Home",t.href="#",t.append(c),n.title="About",n.href="#",n.append(a),d.title="Contact",d.href="#",d.append(o),e.appendChild(t),e.appendChild(n),e.appendChild(d),e})()),t.append(e()),t})()),document.querySelector(".about").addEventListener("click",(()=>{let e=document.querySelector("#content");e.hasChildNodes()&&e.removeChild(e.children[1]),e.append((()=>{let e=document.createElement("h1");return e.innerHTML="This is the about page",e})())})),document.querySelector(".home").addEventListener("click",(()=>{let t=document.querySelector("#content");t.hasChildNodes()&&t.removeChild(t.children[1]),t.append(e())})),document.querySelector(".contact").addEventListener("click",(()=>{let e=document.querySelector("#content");e.hasChildNodes()&&e.removeChild(e.children[1]),e.append((()=>{let e=document.createElement("h1");return e.textContent="This is the contact page",e})())}))})();