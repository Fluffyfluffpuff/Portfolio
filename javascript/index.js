document.getElementById('year').textContent = new Date().getFullYear();

        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");
        const navLinksMobile = document.querySelectorAll(".nav-link-mobile");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 120) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(current)) {
                    link.classList.add("active");
                }
            });

            navLinksMobile.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(current)) {
                    link.classList.add("active");
                }
            });
        });

        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenu = document.getElementById('close-menu');

        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('-translate-y-full');
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-y-full');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link-mobile').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('-translate-y-full');
            });
        });