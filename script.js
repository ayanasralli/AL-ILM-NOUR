document.addEventListener("DOMContentLoaded", () => {

  /* ===== BURGER MENU ===== */
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("active");
  });

  // Fermer le menu quand on clique sur un lien
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("active");
    });
  });

  /* ===== FORMULAIRE WHATSAPP ===== */
  const form = document.querySelector(".form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const contact = document.getElementById("contact").value;
    const msg = document.getElementById("message").value;

    const whatsappNumber = "21652051415"; // 🔴 ton numéro

    const text =
      "As-salam Alaykoum\n\n" +
      "Nom : " + name + "\n" +
      "Cours : " + course + "\n" +
      "Contact : " + contact + "\n\n" +
      msg;

    const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank");

    form.reset();
  });

});
