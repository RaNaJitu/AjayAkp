const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

for (const link of navLinks) {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
}

const sections = document.querySelectorAll("main section[id]");
const activateCurrentNav = () => {
  const scrollY = window.scrollY + 120;

  for (const section of sections) {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.main-nav a[href="#${id}"]`);

    if (!link) {
      continue;
    }

    if (scrollY >= top && scrollY < top + height) {
      document.querySelectorAll(".main-nav a").forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
    }
  }
};

window.addEventListener("scroll", activateCurrentNav);
window.addEventListener("load", activateCurrentNav);
