/* -----------------------------
   SPLASH SCREEN (HOME PAGE)
----------------------------- */

const splash = document.getElementById("splash");

if (splash) {

document.body.classList.add("no-scroll");

function hideSplash() {

splash.style.transform = "translateY(-100%)";

setTimeout(() => {
splash.remove();
document.body.classList.remove("no-scroll");
}, 1000);

window.removeEventListener("wheel", hideSplash);
window.removeEventListener("touchmove", hideSplash);

}

window.addEventListener("wheel", hideSplash, { passive: true });
window.addEventListener("touchmove", hideSplash, { passive: true });

}


/* -----------------------------
   STATS COUNTUP (HOME PAGE)
----------------------------- */

const statsSection = document.querySelector(".stats");
const counters = document.querySelectorAll(".count");

if (statsSection && counters.length > 0) {

let started = false;

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting && !started) {

started = true;

counters.forEach(counter => {

const target = parseInt(counter.dataset.target);
let count = 0;
const speed = 100;   // smaller = faster

function update() {

count += target / speed;

if (count < target) {

counter.textContent = Math.floor(count);
requestAnimationFrame(update);

} else {

counter.textContent = target + "+";

}

}

update();

});

}

});

}, { threshold: 0.6 });

observer.observe(statsSection);

}


/* -----------------------------
   TEAM MEMBER POPUP
----------------------------- */

document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".team-card");
const modal = document.getElementById("teamModal");

if (!modal || cards.length === 0) return;

const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalEmail = document.getElementById("modalEmail");
const modalPhone = document.getElementById("modalPhone");

const closeBtn = modal.querySelector(".close");

cards.forEach(card => {

card.addEventListener("click", () => {

modal.classList.add("active");

modalName.textContent = card.dataset.name;
modalRole.textContent = card.dataset.role;
modalEmail.textContent = card.dataset.email;
modalPhone.textContent = card.dataset.phone;

});

});

function closeModal() {
modal.classList.remove("active");
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
if (e.target === modal) {
closeModal();
}
});

});