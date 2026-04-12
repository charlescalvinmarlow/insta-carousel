      const viewport = document.getElementById("viewport");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
      const dotsContainer = document.getElementById("dotsContainer");
      const slides = document.querySelectorAll(".slide");

      // Create dots
      slides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
      });

      const dots = document.querySelectorAll(".dot");

      // Update UI on scroll
      viewport.addEventListener("scroll", () => {
        const index = Math.round(viewport.scrollLeft / viewport.offsetWidth);

        // Update dots
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });

        // Hide/Show buttons
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === slides.length - 1;
      });

      // Button Clicks
      nextBtn.onclick = () => {
        viewport.scrollBy({ left: viewport.offsetWidth, behavior: "smooth" });
      };

      prevBtn.onclick = () => {
        viewport.scrollBy({ left: -viewport.offsetWidth, behavior: "smooth" });
      };

      // Initial button check
      prevBtn.disabled = true;