import { route, locationHandler, routes } from "./router.js";

const navlinks = document.querySelector('#nav-links')

const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  }
const handleMove = e => {
    document.querySelector('.left-side').style.width = `${e.clientX / window.innerWidth * 100}%`;
}

for (const route in routes) {
    route !== '404' ? 
    navlinks.innerHTML +=  `
    <a class="nav-link" href="${route}">
      <h2 class="nav-link-label rubik-font">${routes[route].title}</h2>
      <img class="nav-link-image" src="${routes[route].img}" />
    </a>
    `: null
}
document.querySelector('#nav-toggle').addEventListener('click', toggleNav)
// create document click that watches the nav links only
document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route(e);
});
// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);