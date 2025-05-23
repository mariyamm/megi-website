
// Responsive mobile menu logic
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const overlay = document.getElementById('mobile-menu-overlay');

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

function animateLogo() {
  if (window.innerWidth > 1024) {
    let i = 0;
    target.textContent = "";
    target.style.opacity = 1;
    function typeFull() {
      if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
        setTimeout(typeFull, 60);
      } else {
        setTimeout(() => {
          target.style.opacity = 0;
          setTimeout(() => {
            target.textContent = initials;
            target.style.opacity = 1;
            setTimeout(() => {
              target.style.opacity = 0;
              setTimeout(() => {
                target.textContent = "";
                target.style.opacity = 1;
                animateLogo(); // Loop again
              }, 400);
            }, 1200);
          }, 400);
        }, 1200);
      }
    }
    typeFull();
  } else {
    target.textContent = "";
    target.style.opacity = 1;
  }
}

window.addEventListener('DOMContentLoaded', animateLogo);
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    animateLogo();
  } else {
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

function animateFooterLogo() {
  if (!footerTarget) return;
  if (window.innerWidth > 1024) {
    let i = 0;
    footerTarget.textContent = "";
    footerTarget.style.opacity = 1;
    function typeFull() {
      if (i < footerText.length) {
        footerTarget.textContent += footerText.charAt(i);
        i++;
        setTimeout(typeFull, 60);
      } else {
        setTimeout(() => {
          footerTarget.style.opacity = 0;
          setTimeout(() => {
            footerTarget.textContent = footerInitials;
            footerTarget.style.opacity = 1;
            setTimeout(() => {
              footerTarget.style.opacity = 0;
              setTimeout(() => {
                footerTarget.textContent = "";
                footerTarget.style.opacity = 1;
                animateFooterLogo(); // Loop again
              }, 400);
            }, 1200);
          }, 400);
        }, 1200);
      }
    }
    typeFull();
  } else {
    footerTarget.textContent = "";
    footerTarget.style.opacity = 1;
  }
}

window.addEventListener('DOMContentLoaded', animateFooterLogo);
window.addEventListener('resize', () => {
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
