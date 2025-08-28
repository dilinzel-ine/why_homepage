document.addEventListener("DOMContentLoaded", () => {
  // Array of image paths
  const images = [
    "images/webp/why-a-we-eye1.webp", // rename file instead of space
    "images/webp/3d-ren-1.webp",
    "images/webp/3d-ren-2.webp",
    "images/webp/3d-ren-3.webp",
    "images/webp/3d-ren-4.webp",
    "images/webp/3d-ren-5.webp",
    "images/webp/3d-ren-6.webp",
    "images/webp/3d-ren-7.webp",
    "images/webp/3d-ren-8.webp",
    "images/webp/3d-ren-9.webp",
    "images/webp/3d-ren-10.webp",
    "images/webp/3d-ren-11.webp",
    "images/webp/3d-ren-12.webp",
    "images/webp/3d-ren-15.webp",
    "images/webp/3d-ren-16.webp",
    "images/webp/3d-ren-17.webp",
    "images/webp/3d-ren-18.webp",
    "images/webp/3d-ren-21.webp",
    "images/webp/3d-ren-22.webp",
    "images/webp/3d-ren-24.webp",
    "images/webp/3d-ren-25.webp",
    "images/webp/3d-ren-26.webp",
    "images/webp/3d-ren-27.webp",
    "images/webp/3d-ren-28.webp",
    "images/webp/3d-ren-29.webp",
    "images/webp/3d-ren-30.webp",
    "images/webp/3d-ren-31.webp",
    "images/webp/3d-ren-32.webp",
    "images/webp/3d-ren-33.webp",
    "images/webp/3d-ren-34.webp",
    "images/webp/3d-ren-35.webp",
    "images/webp/3d-ren-36.webp",
    "images/webp/3d-ren-37.webp",
    "images/webp/3d-ren-38.webp",
    "images/webp/3d-ren-39.webp",
    "images/webp/3d-ren-40.webp",
    "images/webp/3d-ren-41.webp",
    "images/webp/3d-ren-42.webp",
    "images/webp/3d-ren-43.webp",
    "images/webp/3d-ren-44.webp",
    "images/webp/3d-ren-46.webp",
    "images/webp/3d-ren-47.webp",
    "images/webp/3d-ren-48.webp",
    "images/webp/3d-ren-49.webp",
    "images/webp/3d-ren-50.webp",
    "images/webp/3d-ren-51.webp",
    "images/webp/3d-ren-52.webp",
  ];

  // Pick a random image
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Lazy-apply background only when element is visible
  const abstractEl = document.querySelector(".abstract");
  if (abstractEl) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          abstractEl.style.backgroundImage = `url('${randomImage}')`;
          obs.disconnect(); // load once only
        }
      });
    });
    observer.observe(abstractEl);
  }

  // Cursor effect
  const cursor = document.querySelector(".cursor-letter");
  if (cursor) {
    let mouseX = 0,
      mouseY = 0;
    let x = 0,
      y = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      x += (mouseX - x) * 0.3;
      y += (mouseY - y) * 0.3;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-0%, -70%)`;
      requestAnimationFrame(animate);
    }
    animate();
  }
});
