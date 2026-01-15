document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".form");
    if (!form) return;
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const course = document.getElementById("course").value;
      const contact = document.getElementById("contact").value;
      const msg = document.getElementById("message").value;
  
      const whatsappNumber = "21652051415"; // 🔴 mets TON numéro ici
  
      const text =
        "Bonjour,\n" +
        "Nom : " + name + "\n" +
        "Cours souhaité : " + course + "\n" +
        "Contact : " + contact + "\n\n" +
        "Message :\n" + msg;
  
      const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(text);
  
      window.open(url, "_blank");
  
      form.reset();
    });
  
  });
  