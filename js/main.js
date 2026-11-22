/**
 * RECRUITMENT AGENCY - Main Global Controller
 * Vanilla JavaScript (ES6+)
 * Handles navigation, dropdowns, sticky header, accordions, back-to-top, and UI interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. STICKY HEADER & SCROLL BEHAVIOR
  const siteHeader = document.querySelector(".site-header");
  const backToTopBtn = document.getElementById("back-to-top");

  function handleScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    
    // Header shadow/shrink
    if (siteHeader) {
      if (scrollY > 20) {
        siteHeader.classList.add("header-scrolled");
      } else {
        siteHeader.classList.remove("header-scrolled");
      }
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 2. MOBILE NAVIGATION & HAMBURGER TOGGLE
  const menuToggle = document.querySelector(".menu-toggle");
  const navContainer = document.querySelector(".nav-container");
  const navBackdrop = document.querySelector(".nav-backdrop");

  function toggleMobileMenu(open) {
    const isExpanded = menuToggle ? menuToggle.getAttribute("aria-expanded") === "true" : false;
    const shouldOpen = typeof open === "boolean" ? open : !isExpanded;

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
      menuToggle.classList.toggle("active", shouldOpen);
    }
    if (navContainer) {
      navContainer.classList.toggle("open", shouldOpen);
    }
    if (navBackdrop) {
      navBackdrop.classList.toggle("open", shouldOpen);
    }
    document.body.classList.toggle("menu-open", shouldOpen);
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => toggleMobileMenu());
  }

  if (navBackdrop) {
    navBackdrop.addEventListener("click", () => toggleMobileMenu(false));
  }

  // Close mobile nav when clicking normal nav links (not dropdown toggles)
  if (navContainer) {
    navContainer.querySelectorAll("a:not(.dropdown-toggle)").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 992) {
          toggleMobileMenu(false);
        }
      });
    });
  }

  // 3. DROPDOWN MENUS (Desktop hover/focus & Mobile click/tap accordion)
  const navItemsWithDropdown = document.querySelectorAll(".nav-item.has-dropdown");

  navItemsWithDropdown.forEach(item => {
    const toggleBtn = item.querySelector(".dropdown-toggle");
    const menu = item.querySelector(".dropdown-menu");

    if (!toggleBtn || !menu) return;

    // Click handler for mobile or touch
    toggleBtn.addEventListener("click", (e) => {
      // On mobile screens, toggle open state
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const isOpen = item.classList.contains("dropdown-open");
        
        // Close other sibling dropdowns on mobile for clean accordion
        navItemsWithDropdown.forEach(other => {
          if (other !== item) {
            other.classList.remove("dropdown-open");
            const otherBtn = other.querySelector(".dropdown-toggle");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          }
        });

        item.classList.toggle("dropdown-open", !isOpen);
        toggleBtn.setAttribute("aria-expanded", !isOpen ? "true" : "false");
      }
    });

    // Keyboard support (Enter/Space opens, Esc closes)
    toggleBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        item.classList.add("dropdown-open");
        toggleBtn.setAttribute("aria-expanded", "true");
        const firstLink = menu.querySelector("a");
        if (firstLink) firstLink.focus();
      }
    });

    menu.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        item.classList.remove("dropdown-open");
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.focus();
      }
    });

    // Mouse leave behavior on desktop
    item.addEventListener("mouseleave", () => {
      if (window.innerWidth > 992) {
        item.classList.remove("dropdown-open");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  // 4. ACTIVE NAVIGATION STATE DETECTION
  function setActiveNav() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link, .dropdown-link");

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;
      const cleanHref = href.split("?")[0].split("#")[0];

      if (cleanHref === currentPath || (currentPath === "" && cleanHref === "index.html")) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");

        // If inside a dropdown, also highlight parent toggle
        const parentDropdown = link.closest(".nav-item.has-dropdown");
        if (parentDropdown) {
          const parentToggle = parentDropdown.querySelector(".dropdown-toggle");
          if (parentToggle) parentToggle.classList.add("active");
        }
      }
    });
  }
  setActiveNav();

  // 5. ACCORDION COMPONENT (FAQ / Tips)
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      const isExpanded = header.getAttribute("aria-expanded") === "true";
      const content = item ? item.querySelector(".accordion-content") : null;

      // Close other items in the same accordion group
      const parentAccordion = header.closest(".accordion-group");
      if (parentAccordion) {
        parentAccordion.querySelectorAll(".accordion-item").forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            const otherHeader = otherItem.querySelector(".accordion-header");
            if (otherHeader) otherHeader.setAttribute("aria-expanded", "false");
            const otherContent = otherItem.querySelector(".accordion-content");
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });
      }

      if (!isExpanded) {
        item.classList.add("active");
        header.setAttribute("aria-expanded", "true");
        if (content) content.style.maxHeight = content.scrollHeight + 40 + "px";
      } else {
        item.classList.remove("active");
        header.setAttribute("aria-expanded", "false");
        if (content) content.style.maxHeight = null;
      }
    });
  });

  // 6. RESOURCE READ MORE EXPANDERS (resources.html)
  const resourceExpandBtns = document.querySelectorAll(".btn-expand-resource");
  resourceExpandBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-target");
      const hiddenContent = document.getElementById(targetId);
      if (!hiddenContent) return;

      const isHidden = hiddenContent.classList.contains("hidden-content");
      if (isHidden) {
        hiddenContent.classList.remove("hidden-content");
        hiddenContent.classList.add("expanded-content");
        btn.textContent = "Show Less Details ↑";
      } else {
        hiddenContent.classList.add("hidden-content");
        hiddenContent.classList.remove("expanded-content");
        btn.textContent = "Read Full Guidance & Strategy →";
      }
    });
  });

  // 7. INTERACTIVE CHECKLIST COMPONENT (interview-preparation.html & resume-tips.html)
  const checklistContainers = document.querySelectorAll(".interactive-checklist");
  checklistContainers.forEach(container => {
    const checkboxes = container.querySelectorAll("input[type='checkbox']");
    const progressText = container.querySelector(".checklist-progress-text");
    const progressBar = container.querySelector(".checklist-progress-fill");

    function updateProgress() {
      const total = checkboxes.length;
      let checkedCount = 0;
      checkboxes.forEach(cb => {
        if (cb.checked) checkedCount++;
      });

      const percentage = total > 0 ? Math.round((checkedCount / total) * 100) : 0;
      if (progressText) {
        progressText.textContent = `${checkedCount} of ${total} items completed (${percentage}%)`;
      }
      if (progressBar) {
        progressBar.style.width = `${percentage}%`;
      }
    }

    checkboxes.forEach(cb => {
      cb.addEventListener("change", updateProgress);
    });
    updateProgress();
  });

  // 8. HOMEPAGE QUICK SEARCH FORM
  const homeQuickSearch = document.getElementById("home-quick-search");
  if (homeQuickSearch) {
    homeQuickSearch.addEventListener("submit", (e) => {
      e.preventDefault();
      const kw = document.getElementById("home-search-keyword") ? document.getElementById("home-search-keyword").value.trim() : "";
      const loc = document.getElementById("home-search-location") ? document.getElementById("home-search-location").value : "";
      const ind = document.getElementById("home-search-industry") ? document.getElementById("home-search-industry").value : "";

      const params = new URLSearchParams();
      if (kw) params.append("keyword", kw);
      if (loc && loc !== "all") params.append("location", loc);
      if (ind && ind !== "all") params.append("industry", ind);

      window.location.href = `jobs.html?${params.toString()}`;
    });
  }
});
