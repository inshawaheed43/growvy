 //footer Animation
 
 gsap.from(".logo", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".tagline", { opacity: 0, x: -50, duration: 1, delay: 0.5 });
    gsap.from(".social-icons img", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      delay: 1
    });
    gsap.from(".middle-section ul li", {
      opacity: 0,
      x: 50,
      stagger: 0.15,
      duration: 0.8,
      delay: 1.5
    });
    gsap.from(".stars", { opacity: 0, scale: 0.5, duration: 1, delay: 2 });
    gsap.from(".right-section img", { opacity: 0, x: 100, duration: 1, delay: 2.2 });