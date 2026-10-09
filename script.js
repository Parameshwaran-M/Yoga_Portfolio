/**
 * Yoganathan A. - Portfolio Website Scripts
 * Features: Mobile Navigation, Active ScrollSpy, Modals, Form Validation, Copy to Clipboard
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. DOM Elements
  // ==========================================
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  // Contact Elements
  const contactForm = document.getElementById('contact-form');
  const formName = document.getElementById('form-name');
  const formEmail = document.getElementById('form-email');
  const formSubject = document.getElementById('form-subject');
  const formMessage = document.getElementById('form-message');
  const formFeedback = document.getElementById('form-feedback');
  const btnSubmit = document.getElementById('btn-submit-form');
  const btnMailtoFallback = document.getElementById('btn-mailto-fallback');
  const btnCopyEmail = document.getElementById('btn-copy-email');
  const contactEmailLink = document.getElementById('contact-email-link');

  // Certificate Modal Elements
  const certModal = document.getElementById('cert-modal');
  const modalCertImg = document.getElementById('modal-cert-img');
  const modalCertTitle = document.getElementById('modal-cert-title');
  const modalDownloadLink = document.getElementById('modal-download-link');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const certPreviewTriggers = document.querySelectorAll('.btn-cert-preview, .preview-trigger');

  // Project Modal Elements
  const projectModal = document.getElementById('project-modal');
  const projectModalTitle = document.getElementById('project-modal-title');
  const projectModalContent = document.getElementById('project-modal-content');
  const projectModalClose = document.getElementById('project-modal-close');
  const projectModalOk = document.getElementById('project-modal-ok');
  const projectDetailButtons = document.querySelectorAll('.btn-project-detail');

  // ==========================================
  // 2. Mobile Menu Toggle
  // ==========================================
  function toggleMobileMenu() {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  }

  function closeMobileMenu() {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // ==========================================
  // 3. Navbar Scroll Effect & Back-to-Top Button
  // ==========================================
  function handleScroll() {
    const scrollY = window.scrollY;

    // Sticky Navbar shadow
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // 4. ScrollSpy Active Nav Link Highlighting
  // ==========================================
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // ==========================================
  // 5. Copy Email to Clipboard
  // ==========================================
  if (btnCopyEmail && contactEmailLink) {
    btnCopyEmail.addEventListener('click', async () => {
      const email = contactEmailLink.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        const originalText = btnCopyEmail.textContent;
        btnCopyEmail.textContent = 'Copied! ✓';
        btnCopyEmail.style.backgroundColor = 'var(--success)';
        btnCopyEmail.style.color = '#040812';

        setTimeout(() => {
          btnCopyEmail.textContent = originalText;
          btnCopyEmail.style.backgroundColor = '';
          btnCopyEmail.style.color = '';
        }, 2200);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        btnCopyEmail.textContent = 'Copied! ✓';
        setTimeout(() => {
          btnCopyEmail.textContent = 'Copy';
        }, 2200);
      }
    });
  }

  // ==========================================
  // 6. Contact Form Validation & Submission
  // ==========================================
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).trim().toLowerCase());
  }

  function validateField(input, condition) {
    const formGroup = input.closest('.form-group');
    if (condition) {
      input.classList.remove('is-invalid');
      if (formGroup) formGroup.classList.remove('has-error');
      return true;
    } else {
      input.classList.add('is-invalid');
      if (formGroup) formGroup.classList.add('has-error');
      return false;
    }
  }

  // Real-time input validation listeners
  if (formName) {
    formName.addEventListener('input', () => {
      validateField(formName, formName.value.trim().length >= 2);
    });
  }

  if (formEmail) {
    formEmail.addEventListener('input', () => {
      validateField(formEmail, validateEmail(formEmail.value));
    });
  }

  if (formSubject) {
    formSubject.addEventListener('input', () => {
      validateField(formSubject, formSubject.value.trim().length >= 3);
    });
  }

  if (formMessage) {
    formMessage.addEventListener('input', () => {
      validateField(formMessage, formMessage.value.trim().length >= 10);
    });
  }

  // Form Submit Handler
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(formName, formName.value.trim().length >= 2);
      const isEmailValid = validateField(formEmail, validateEmail(formEmail.value));
      const isSubjectValid = validateField(formSubject, formSubject.value.trim().length >= 3);
      const isMessageValid = validateField(formMessage, formMessage.value.trim().length >= 10);

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please correct the highlighted fields before submitting.';
        return;
      }

      // Simulated sending state
      const originalBtnHtml = btnSubmit.innerHTML;
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<span>Sending...</span>`;

      setTimeout(() => {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = originalBtnHtml;

        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>Message Prepared Successfully!</strong><br>
          Thank you, <em>${escapeHtml(formName.value.trim())}</em>. 
          <span style="display:block; margin-top: 6px; font-size: 0.84rem; opacity: 0.9;">
            Note: In this static frontend environment, messages can be connected to services like <strong>Formspree</strong> or <strong>EmailJS</strong>. 
            You can also click <em>"Open via Mailto"</em> below to send directly via your email client.
          </span>
        `;

        contactForm.reset();
      }, 700);
    });
  }

  // Mailto Fallback Button Handler
  if (btnMailtoFallback) {
    btnMailtoFallback.addEventListener('click', () => {
      const email = contactEmailLink ? contactEmailLink.textContent.trim() : 'yoganathan.dev@example.com';
      const subject = encodeURIComponent(formSubject.value.trim() || 'Software Developer Inquiry for Yoganathan A.');
      const name = formName.value.trim();
      const body = encodeURIComponent(
        (name ? `Hello Yoganathan,\n\nFrom: ${name}\n\n` : `Hello Yoganathan,\n\n`) +
        (formMessage.value.trim() || 'I am interested in discussing an opportunity with you.')
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[m]);
  }

  // ==========================================
  // 7. Certificate Lightbox Modal
  // ==========================================
  function openCertModal(src, title) {
    modalCertImg.src = src;
    modalCertImg.alt = title;
    modalCertTitle.textContent = title;
    modalDownloadLink.href = src;
    modalDownloadLink.setAttribute('download', src.split('/').pop());

    certModal.hidden = false;
    // Timeout for CSS transition
    setTimeout(() => {
      certModal.classList.add('open');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    certModal.classList.remove('open');
    setTimeout(() => {
      certModal.hidden = true;
      modalCertImg.src = '';
    }, 300);
    document.body.style.overflow = '';
  }

  certPreviewTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn.getAttribute('data-cert-src');
      const title = btn.getAttribute('data-cert-title') || 'Certificate View';
      openCertModal(src, title);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCertModal);
  if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeCertModal);

  certModal.addEventListener('click', (e) => {
    if (e.target === certModal) {
      closeCertModal();
    }
  });

  // ==========================================
  // 8. Project Details Modal
  // ==========================================
  const projectDetailsMap = {
    votingpro: {
      title: 'VotingPro — Digital Voting Management System',
      content: `
        <div class="modal-project-details">
          <h4>Architecture & Implementation</h4>
          <p>
            <strong>VotingPro</strong> is a secure desktop voting system engineered with <strong>Python</strong> and <strong>CustomTkinter</strong>, designed for transparent and tamper-resistant organizational elections.
          </p>
          <h4>Core Features & Security Mechanisms:</h4>
          <ul>
            <li><strong>Relational MySQL Backend:</strong> Persistent voter registries, election ballot definitions, and cryptographically verified vote tallies.</li>
            <li><strong>One-Person One-Vote Constraint:</strong> Unique composite database constraints and transaction locking prevent double voting or replay attempts.</li>
            <li><strong>Modern CustomTkinter GUI:</strong> Intuitive, dark-themed responsive interface featuring candidate profiles, instant feedback, and accessible navigation.</li>
            <li><strong>Administrative Command Center:</strong> Secure administrative login to initialize ballots, monitor live turnouts, and export audited vote reports.</li>
          </ul>
          <h4>Technology Stack:</h4>
          <div class="modal-tech-stack">
            <span class="tech-tag">Python 3.x</span>
            <span class="tech-tag">CustomTkinter</span>
            <span class="tech-tag">MySQL Connector</span>
            <span class="tech-tag">Relational DBMS</span>
            <span class="tech-tag">Data Security</span>
          </div>
        </div>
      `
    },
    webportal: {
      title: 'Academic Course & Student Portal (Project Overview)',
      content: `
        <div class="modal-project-details">
          <h4>Full-Stack Architecture Overview</h4>
          <p>
            An educational portal designed to streamline academic workflows for students and instructors.
          </p>
          <h4>Key Functionality:</h4>
          <ul>
            <li><strong>Role-Based Access:</strong> Separate dashboard interfaces for students, faculty, and administrative staff.</li>
            <li><strong>Course Enrollment Engine:</strong> Dynamic syllabus view, seat availability tracking, and prerequisite checks.</li>
            <li><strong>Responsive UI:</strong> Built with semantic HTML5, modern CSS Grid/Flexbox, and vanilla JavaScript DOM management.</li>
            <li><strong>Backend Processing:</strong> Modular PHP scripts managing authentication sessions and MySQL CRUD operations.</li>
          </ul>
          <h4>Technology Stack:</h4>
          <div class="modal-tech-stack">
            <span class="tech-tag">HTML5 / CSS3</span>
            <span class="tech-tag">Vanilla JavaScript</span>
            <span class="tech-tag">PHP</span>
            <span class="tech-tag">MySQL</span>
          </div>
        </div>
      `
    },
    database: {
      title: 'Inventory & Billing Management System (Database Design)',
      content: `
        <div class="modal-project-details">
          <h4>Relational Schema & Optimization</h4>
          <p>
            A high-integrity database schema designed to support enterprise-grade retail inventory, purchase transactions, and supplier tracking.
          </p>
          <h4>Database Engineering Highlights:</h4>
          <ul>
            <li><strong>Normalized to 3NF:</strong> Complete elimination of data redundancy across items, categories, suppliers, and orders.</li>
            <li><strong>Integrity Constraints:</strong> Foreign key cascades, check constraints, and transactional ACID compliance.</li>
            <li><strong>Automated Triggers:</strong> Real-time deduction of item stock counts upon order completion.</li>
            <li><strong>Analytical Queries:</strong> Stored procedures and complex SQL JOIN views for generating sales summaries.</li>
          </ul>
          <h4>Technology Stack:</h4>
          <div class="modal-tech-stack">
            <span class="tech-tag">MySQL 8.0</span>
            <span class="tech-tag">SQL DDL/DML</span>
            <span class="tech-tag">Relational Modeling</span>
            <span class="tech-tag">Stored Procedures</span>
          </div>
        </div>
      `
    },
    algorithms: {
      title: 'High-Performance Algorithm & DSA Toolkit (C++ / Java)',
      content: `
        <div class="modal-project-details">
          <h4>Algorithmic Problem Solving & Complexity Analysis</h4>
          <p>
            A repository of foundational and advanced data structures engineered in modern C++ and Java with rigorous benchmarking.
          </p>
          <h4>Modules Included:</h4>
          <ul>
            <li><strong>Trees & Graphs:</strong> AVL trees, Binary Search Trees, BFS/DFS traversals, and Dijkstra's algorithm.</li>
            <li><strong>Memory & Pointers:</strong> Efficient dynamic memory allocation and pointer arithmetic in C++.</li>
            <li><strong>Object-Oriented Design:</strong> Generic template classes in C++ and polymorphic inheritance hierarchies in Java.</li>
            <li><strong>Performance Benchmarks:</strong> Time and space complexity empirical verification.</li>
          </ul>
          <h4>Technology Stack:</h4>
          <div class="modal-tech-stack">
            <span class="tech-tag">C++17 / C++20</span>
            <span class="tech-tag">Java SE</span>
            <span class="tech-tag">Data Structures</span>
            <span class="tech-tag">Algorithms</span>
          </div>
        </div>
      `
    }
  };

  function openProjectModal(projectKey) {
    const data = projectDetailsMap[projectKey];
    if (!data) return;

    projectModalTitle.textContent = data.title;
    projectModalContent.innerHTML = data.content;

    projectModal.hidden = false;
    setTimeout(() => {
      projectModal.classList.add('open');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('open');
    setTimeout(() => {
      projectModal.hidden = true;
    }, 300);
    document.body.style.overflow = '';
  }

  projectDetailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project');
      openProjectModal(key);
    });
  });

  if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
  if (projectModalOk) projectModalOk.addEventListener('click', closeProjectModal);

  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  // ==========================================
  // 9. Keyboard Accessibility (Escape Key for Modals)
  // ==========================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (certModal.classList.contains('open')) {
        closeCertModal();
      }
      if (projectModal.classList.contains('open')) {
        closeProjectModal();
      }
      if (navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    }
  });
});
