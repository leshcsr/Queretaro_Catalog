document.addEventListener("DOMContentLoaded", () => {
  // Carousel functionality
  function initCarousel() {
    const slidesContainer = document.getElementById("carousel-slides")
    const prevButton = document.getElementById("prev-button")
    const nextButton = document.getElementById("next-button")
    const indicatorsContainer = document.getElementById("carousel-indicators")

    if (!slidesContainer || !prevButton || !nextButton || !indicatorsContainer) return

    let currentIndex = 0
    const slides = slidesContainer.querySelectorAll(".carousel-slide")
    const totalSlides = slides.length

    // Create indicators
    for (let i = 0; i < totalSlides; i++) {
      const indicator = document.createElement("div")
      indicator.className = "carousel-indicator" + (i === 0 ? " active" : "")
      indicator.dataset.index = i
      indicator.addEventListener("click", () => {
        goToSlide(i)
      })
      indicatorsContainer.appendChild(indicator)
    }

    // Function to go to a specific slide
    function goToSlide(index) {
      if (index < 0) {
        index = totalSlides - 1
      } else if (index >= totalSlides) {
        index = 0
      }

      currentIndex = index
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`

      // Update indicators
      const indicators = indicatorsContainer.querySelectorAll(".carousel-indicator")
      indicators.forEach((indicator, i) => {
        if (i === currentIndex) {
          indicator.classList.add("active")
        } else {
          indicator.classList.remove("active")
        }
      })
    }

    // Event listeners for buttons
    prevButton.addEventListener("click", () => {
      goToSlide(currentIndex - 1)
    })

    nextButton.addEventListener("click", () => {
      goToSlide(currentIndex + 1)
    })

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        goToSlide(currentIndex - 1)
      } else if (e.key === "ArrowRight") {
        goToSlide(currentIndex + 1)
      }
    })
  }

  // Initialize carousel if on detail page
  initCarousel()
})
