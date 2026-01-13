// 1. Register the plugin
gsap.registerPlugin(ScrollTrigger);

// 2. Apply the animation to all sections
gsap.utils.toArray("section").forEach((sec) => {
    gsap.from(sec, {
        scrollTrigger: {
            trigger: sec,
            start: "top 85%", // Animation starts when the top of the section hits 85% of the viewport
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
    });
});