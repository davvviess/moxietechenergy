
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  let isOpen = false;

  menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    mobileMenu.classList.toggle("max-h-0", !isOpen);
    mobileMenu.classList.toggle("max-h-96", isOpen);
    mobileMenu.classList.toggle("opacity-0", !isOpen);
    mobileMenu.classList.toggle("opacity-100", isOpen);
    mobileMenu.classList.toggle("scale-95", !isOpen);
    mobileMenu.classList.toggle("scale-100", isOpen);
  });

  
  
    const testimonials = [
        {
            text: "Moxietech Energy Global Services delivered exactly what they promised. Our solar system has significantly reduced our electricity costs, and the installation was fast and professional. I highly recommend their services.",
            author: "John M., Homeowner in Rivers State"
        },
        {
            text: "Since installing our solar panels with Moxietech Energy Global Services, power outages are no longer a concern. Their team was knowledgeable, efficient, and very professional.",
            author: "Sarah A., Homeowner in Abuja"
        },
        {
            text: "The CCTV and smart lock installation was seamless. Moxietech provided a secure and modern solution that gives us peace of mind.",
            author: "Property Manager in Lagos State"
        },
        {
            text: "Choosing Moxietech was the best decision for our home. We now enjoy clean, reliable energy while reducing our carbon footprint.",
            author: "David K., Homeowner in Port Harcourt"
        }
    ];

    let index = 0;
    const card = document.getElementById("testimonialCard");

    function renderCard() {
        card.classList.add("opacity-0");

        setTimeout(() => {
            card.innerHTML = `
                <p class="text-2xl font-normal">${testimonials[index].text}</p>
                <h4 class="text-3xl font-bold pt-3">${testimonials[index].author}</h4>
            `;
            card.classList.remove("opacity-0");
        }, 150);
    }

    document.getElementById("nextBtn").onclick = () => {
        index = (index + 1) % testimonials.length;
        renderCard();
    };

    document.getElementById("prevBtn").onclick = () => {
        index = (index - 1 + testimonials.length) % testimonials.length;
        renderCard();
    };

    renderCard();

window.scrollTo({ top: 0, behavior: "smooth"});


 // Scroll reveal animation
const revealElements = document.querySelectorAll(
  "section, footer, nav, .group"
);

revealElements.forEach(el => {
  el.classList.add("reveal");
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => observer.observe(el));

