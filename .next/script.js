document.addEventListener("DOMContentLoaded", () => {

  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // === COLLABORATE FORM (Netlify Forms) ===
  const form = document.getElementById("collabForm");
  const statusEl = document.getElementById("formStatus");

  if (form && statusEl) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const type = document.getElementById("type").value;
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !type || !message) {
        statusEl.textContent = "Please fill in all fields.";
        statusEl.style.color = "red";
        return;
      }

      statusEl.textContent = "Submitting...";
      statusEl.style.color = "#0f2c3d";

      try {
        const formData = new FormData(form);
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
          statusEl.textContent = "✅ Collaboration request submitted successfully!";
          statusEl.style.color = "green";
          form.reset();
        } else {
          statusEl.textContent = "Something went wrong. Please try again.";
          statusEl.style.color = "red";
        }
      } catch (err) {
        statusEl.textContent = "Network error. Please try again.";
        statusEl.style.color = "red";
      }
    });
  }
});