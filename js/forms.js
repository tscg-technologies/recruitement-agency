/**
 * RECRUITMENT AGENCY - Forms Validation & Demonstration Handlers
 * Vanilla JavaScript (ES6+)
 * Handles frontend validation, file previews, and demo notification dialogs.
 */

// Helper to show styled demo alert modal
window.showDemoAlert = function(title, message) {
  // Remove existing modal if present
  const existingModal = document.getElementById("demo-alert-modal");
  if (existingModal) existingModal.remove();

  const modalBackdrop = document.createElement("div");
  modalBackdrop.id = "demo-alert-modal";
  modalBackdrop.className = "demo-modal-backdrop";
  modalBackdrop.setAttribute("role", "dialog");
  modalBackdrop.setAttribute("aria-modal", "true");
  modalBackdrop.setAttribute("aria-labelledby", "demo-modal-title");

  modalBackdrop.innerHTML = `
    <div class="demo-modal-dialog">
      <div class="demo-modal-header">
        <div class="demo-modal-icon">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#16A6A1" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3 id="demo-modal-title" class="demo-modal-title">${title}</h3>
        <button type="button" class="demo-modal-close" id="demo-modal-close-btn" aria-label="Close dialog">&times;</button>
      </div>
      <div class="demo-modal-body">
        <p>${message}</p>
        <div class="demo-modal-disclaimer">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>Note: This is a frontend portfolio demonstration. No real data is stored or transmitted.</span>
        </div>
      </div>
      <div class="demo-modal-footer">
        <button type="button" class="btn btn-primary" id="demo-modal-ok-btn">Understood & Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalBackdrop);
  document.body.classList.add("modal-open");

  // Focus trap / trap focus on ok button
  const closeBtn = document.getElementById("demo-modal-close-btn");
  const okBtn = document.getElementById("demo-modal-ok-btn");

  function closeModal() {
    modalBackdrop.classList.remove("active");
    document.body.classList.remove("modal-open");
    setTimeout(() => {
      if (modalBackdrop && modalBackdrop.parentNode) {
        modalBackdrop.parentNode.removeChild(modalBackdrop);
      }
    }, 200);
  }

  closeBtn.addEventListener("click", closeModal);
  okBtn.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener("keydown", function escListener(e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", escListener);
    }
  });

  // trigger animation
  setTimeout(() => modalBackdrop.classList.add("active"), 10);
  okBtn.focus();
};

document.addEventListener("DOMContentLoaded", () => {
  // Generic validation helper
  function validateField(input, testFn, errorMsg) {
    const group = input.closest(".form-group");
    let feedback = group ? group.querySelector(".invalid-feedback") : null;
    if (!feedback && group) {
      feedback = document.createElement("div");
      feedback.className = "invalid-feedback";
      group.appendChild(feedback);
    }

    if (!testFn(input.value)) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      if (feedback && errorMsg) feedback.textContent = errorMsg;
      return false;
    } else {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      return true;
    }
  }

  // 1. EMPLOYER ENQUIRY FORM (employers.html)
  const employerForm = document.getElementById("employer-enquiry-form");
  if (employerForm) {
    employerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      const company = document.getElementById("emp-company");
      const contactPerson = document.getElementById("emp-contact");
      const email = document.getElementById("emp-email");
      const phone = document.getElementById("emp-phone");
      const requirement = document.getElementById("emp-requirement");
      const positions = document.getElementById("emp-positions");
      const message = document.getElementById("emp-message");

      if (!validateField(company, v => v.trim().length >= 2, "Please enter your company name.")) isValid = false;
      if (!validateField(contactPerson, v => v.trim().length >= 2, "Please enter contact person's name.")) isValid = false;
      if (!validateField(email, v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), "Please enter a valid business email.")) isValid = false;
      if (!validateField(phone, v => v.trim().length >= 8, "Please enter a valid contact phone number.")) isValid = false;
      if (!validateField(requirement, v => v !== "", "Please select your primary hiring requirement.")) isValid = false;
      if (!validateField(positions, v => v !== "", "Please select estimated number of positions.")) isValid = false;

      if (!isValid) return;

      window.showDemoAlert(
        "Employer Enquiry Received (Demo)",
        `Thank you for contacting RECRUITMENT AGENCY, ${contactPerson.value.trim()}! We have received your demonstration hiring enquiry for ${company.value.trim()} (${requirement.value}, ~${positions.value} roles). A dedicated recruitment consultant would review your talent requirement and initiate candidate sourcing protocols.`
      );

      employerForm.reset();
      employerForm.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
    });
  }

  // 2. CONTACT GENERAL ENQUIRY FORM (contact.html)
  const generalContactForm = document.getElementById("general-contact-form");
  if (generalContactForm) {
    generalContactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById("contact-name");
      const email = document.getElementById("contact-email");
      const phone = document.getElementById("contact-phone");
      const subject = document.getElementById("contact-subject");
      const message = document.getElementById("contact-message");

      if (!validateField(name, v => v.trim().length >= 2, "Please enter your name.")) isValid = false;
      if (!validateField(email, v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), "Please enter a valid email address.")) isValid = false;
      if (!validateField(phone, v => v.trim().length >= 8, "Please enter a contact number.")) isValid = false;
      if (!validateField(subject, v => v.trim().length >= 3, "Please provide an inquiry subject.")) isValid = false;
      if (!validateField(message, v => v.trim().length >= 10, "Please provide message details (at least 10 characters).")) isValid = false;

      if (!isValid) return;

      window.showDemoAlert(
        "Enquiry Message Sent (Demo)",
        `Thank you, ${name.value.trim()}! Your demonstration message regarding "${subject.value.trim()}" has been received. Our support desk typically responds to candidate and client inquiries within one business day.`
      );

      generalContactForm.reset();
      generalContactForm.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
    });
  }

  // 3. CANDIDATE REGISTRATION FORM (contact.html#candidate-registration)
  const candidateRegForm = document.getElementById("candidate-registration-form");
  const regFileInput = document.getElementById("cand-resume");
  const regFileNameDisplay = document.getElementById("cand-file-name");

  if (regFileInput && regFileNameDisplay) {
    regFileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        regFileNameDisplay.textContent = `Selected: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        regFileNameDisplay.classList.add("file-selected");
        regFileInput.classList.remove("is-invalid");
      } else {
        regFileNameDisplay.textContent = "No resume file selected (Demo Only)";
        regFileNameDisplay.classList.remove("file-selected");
      }
    });
  }

  if (candidateRegForm) {
    candidateRegForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById("cand-name");
      const email = document.getElementById("cand-email");
      const phone = document.getElementById("cand-phone");
      const role = document.getElementById("cand-role");
      const location = document.getElementById("cand-location");
      const experience = document.getElementById("cand-experience");
      const skills = document.getElementById("cand-skills");

      if (!validateField(name, v => v.trim().length >= 2, "Please enter your full name.")) isValid = false;
      if (!validateField(email, v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), "Please enter your valid email address.")) isValid = false;
      if (!validateField(phone, v => v.trim().length >= 8, "Please enter your phone number.")) isValid = false;
      if (!validateField(role, v => v.trim().length >= 2, "Please specify your preferred job role.")) isValid = false;
      if (!validateField(location, v => v.trim().length >= 2, "Please specify your preferred job location.")) isValid = false;
      if (!validateField(experience, v => v !== "", "Please select your experience level.")) isValid = false;
      if (!validateField(skills, v => v.trim().length >= 2, "Please list key skills (e.g. Java, Python, Accounting, HR).")) isValid = false;

      // Resume file check
      if (!regFileInput.files || regFileInput.files.length === 0) {
        regFileInput.classList.add("is-invalid");
        isValid = false;
      } else {
        regFileInput.classList.remove("is-invalid");
      }

      if (!isValid) return;

      window.showDemoAlert(
        "Candidate Registration Successful (Demo)",
        `Welcome to the RECRUITMENT AGENCY talent community, ${name.value.trim()}! Your profile for "${role.value.trim()}" (${experience.value}, ${location.value.trim()}) and your demonstration CV have been logged locally. Our industry recruiters review matching openings regularly.`
      );

      candidateRegForm.reset();
      candidateRegForm.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
      if (regFileNameDisplay) {
        regFileNameDisplay.textContent = "No resume file selected (Demo Only)";
        regFileNameDisplay.classList.remove("file-selected");
      }
    });
  }
});
