document.addEventListener("DOMContentLoaded", () => {
  // All possible images
  const images = [
    "images/webp/why-a-we-eye1.webp",
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
    "images/webp/3d-ren-53.webp",
  ];

  const abstractEl = document.querySelector(".abstract");
  if (abstractEl) {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    abstractEl.style.backgroundImage = `url('${randomImage}')`;
  }

  // --- Navigation Scroll Logic ---
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  // This now correctly finds your scrolling container
  const scrollContainer = document.querySelector(".scroll-container");

  // Make sure the scrollContainer exists before adding an event listener
  if (scrollContainer) {
    const onScroll = () => {
      let currentSectionId = "";
      sections.forEach((section) => {
        if (scrollContainer.scrollTop >= section.offsetTop - 150) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    };

    // This was the missing piece of logic
    scrollContainer.addEventListener("scroll", onScroll);
  }

  // --- Cursor Follow Effect ---
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

  const stickers = document.querySelectorAll(".sticker");

  const settings = [
    // [rotation, speed]
    [-10, 0.05], //
    [5, -0.06], //
    [15, 0.06], //
  ];

  function updateStickerPositions() {
    const scrollY = scrollContainer.scrollTop;

    stickers.forEach((sticker, index) => {
      const [rotation, speed] = settings[index];
      const moveY = scrollY * speed; // This calculation is the key
      sticker.style.transform = `translateY(${moveY}px) rotate(${rotation}deg)`;
    });
  }

  updateStickerPositions();
  scrollContainer.addEventListener("scroll", updateStickerPositions);
});
