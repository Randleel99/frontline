const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");

if (nav && burger) {
  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });
}
