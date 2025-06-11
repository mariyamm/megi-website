
// Responsive mobile menu logic
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const overlay = document.getElementById('mobile-menu-overlay');
let logoAnimating = false;
let logoTimeouts = [];

let footerAnimating = false;
let footerTimeouts = [];

function openMenu() {
  mobileMenu.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

menuIcon.addEventListener('click', () => {
  if (mobileMenu.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});
closeMenuBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

// Optional: allow keyboard navigation
menuIcon.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    menuIcon.click();
  }
});

// filepath: c:\Users\a884470\Megi_website\index.html
const text = "Legal by Miglena Dimitrova.";
const initials = "LM.";
const target = document.getElementById("logo-text");

function clearLogoTimeouts() {
  logoTimeouts.forEach(timeout => clearTimeout(timeout));
  logoTimeouts = [];
}

function animateLogo() {
  const target = document.getElementById("logo-text");
  const text = "Legal by Miglena Dimitrova.";
  const initials = "LM.";

  if (!target || window.innerWidth <= 1024 || logoAnimating) return;

  clearLogoTimeouts();
  logoAnimating = true;

  let i = 0;
  target.textContent = "";
  target.style.opacity = 1;

  function typeFull() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      logoTimeouts.push(setTimeout(typeFull, 60));
    } else {
      logoTimeouts.push(setTimeout(() => {
        target.style.opacity = 0;

        logoTimeouts.push(setTimeout(() => {
          target.textContent = initials;
          target.style.opacity = 1;

          logoTimeouts.push(setTimeout(() => {
            target.style.opacity = 0;

            logoTimeouts.push(setTimeout(() => {
              target.textContent = "";
              target.style.opacity = 1;
              logoAnimating = false;
              animateLogo(); // Loop again
            }, 400));
          }, 1200));
        }, 400));
      }, 1200));
    }
  }

  typeFull();
}

// ✅ Add these AFTER the animateLogo function definition
window.addEventListener('DOMContentLoaded', animateLogo);

window.addEventListener('resize', () => {
  const target = document.getElementById("logo-text");
  clearLogoTimeouts();
  logoAnimating = false;

  if (window.innerWidth > 1024) {
    animateLogo();
  } else if (target) {
    target.textContent = "";
    target.style.opacity = 1;
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Animate about-image if present
  const aboutImg = document.querySelector('.about-image');
  if (aboutImg) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            aboutImg.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(aboutImg);
  }

  // Animate #about background when in viewport (always runs)
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const bgObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            aboutSection.classList.add('bg-animate');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    bgObserver.observe(aboutSection);
  }

  // Parallax scroll for Why Work With Me (desktop only)
  function luxuryScrollEffect() {
    const section = document.querySelector('.why-luxury-split');
    const header = document.querySelector('.luxury-header');
    if (!section || !header || window.innerWidth < 900) {
      if (header) header.style.transform = '';
      return;
    }
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // Only animate when section is in viewport
    if (rect.top < windowHeight && rect.bottom > 0) {
      // Calculate scroll progress within the section (0 to 1)
      const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height)));
      // Move up to 40px down as you scroll through
      header.style.transform = `translateY(${progress * 40}px)`;
    } else {
      header.style.transform = '';
    }
  }

  window.addEventListener('scroll', luxuryScrollEffect);
  window.addEventListener('resize', luxuryScrollEffect);
  luxuryScrollEffect();
});

// Animated clients typing effect
const clientTypes = [
  "Tech companies",
  "International corporations",
  "Founders and entrepreneurs",
  "In-house legal teams",
  "Private investors and holding groups"
];
const clientTarget = document.getElementById("client-type");
let clientIndex = 0;
let charIndex = 0;
let typing = true;

function typeClient() {
  if (!clientTarget) return;
  if (typing) {
    if (charIndex < clientTypes[clientIndex].length) {
      clientTarget.textContent += clientTypes[clientIndex][charIndex];
      charIndex++;
      setTimeout(typeClient, 60);
    } else {
      typing = false;
      setTimeout(typeClient, 1200);
    }
  } else {
    if (charIndex > 0) {
      clientTarget.textContent = clientTypes[clientIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeClient, 30);
    } else {
      typing = true;
      clientIndex = (clientIndex + 1) % clientTypes.length;
      setTimeout(typeClient, 400);
    }
  }
}

document.addEventListener('DOMContentLoaded', typeClient);

// Animated footer logo (only this part is animated)
const footerText = "Legal by Miglena Dimitrova.";
const footerInitials = "LM.";
const footerTarget = document.getElementById("footer-logo-text");

function clearFooterTimeouts() {
  footerTimeouts.forEach(timeout => clearTimeout(timeout));
  footerTimeouts = [];
}

function animateFooterLogo() {
  const footerTarget = document.getElementById("footer-logo-text");
  const footerText = "Legal by Miglena Dimitrova.";
  const footerInitials = "LM.";

  if (!footerTarget || window.innerWidth <= 1024 || footerAnimating) return;

  clearFooterTimeouts();
  footerAnimating = true;

  let i = 0;
  footerTarget.textContent = "";
  footerTarget.style.opacity = 1;

  function typeFull() {
    if (i < footerText.length) {
      footerTarget.textContent += footerText.charAt(i);
      i++;
      footerTimeouts.push(setTimeout(typeFull, 60));
    } else {
      footerTimeouts.push(setTimeout(() => {
        footerTarget.style.opacity = 0;

        footerTimeouts.push(setTimeout(() => {
          footerTarget.textContent = footerInitials;
          footerTarget.style.opacity = 1;

          footerTimeouts.push(setTimeout(() => {
            footerTarget.style.opacity = 0;

            footerTimeouts.push(setTimeout(() => {
              footerTarget.textContent = "";
              footerTarget.style.opacity = 1;
              footerAnimating = false;
              animateFooterLogo(); // loop again
            }, 400));
          }, 1200));
        }, 400));
      }, 1200));
    }
  }

  typeFull();
}


window.addEventListener('DOMContentLoaded', animateFooterLogo);

window.addEventListener('resize', () => {
  const footerTarget = document.getElementById("footer-logo-text");
  clearFooterTimeouts();
  footerAnimating = false;

  if (window.innerWidth > 1024) {
    animateFooterLogo();
  } else if (footerTarget) {
    footerTarget.textContent = "";
    footerTarget.style.opacity = 1;
  }
});



// Contact overlay logic
function openContactInfo() {
  document.getElementById('contact-overlay').classList.add('active');
}
function closeContactInfo() {
  document.getElementById('contact-overlay').classList.remove('active');
}
document.getElementById('show-contact-info').addEventListener('click', openContactInfo);
document.getElementById('contact-close').addEventListener('click', closeContactInfo);
document.querySelector('#contact-overlay .contact-backdrop').addEventListener('click', closeContactInfo);
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") closeContactInfo();
});

// (Optional) Prevent default form submission for demo
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
});
