document.addEventListener("DOMContentLoaded", () => {
  // Sample data for accommodations (same as in accommodation.js)
  const accommodations = [
    {
      id: 1,
      name: "Residencia Los Olivos",
      type: "residencia",
      price: "medium",
      priceRange: "$15,000 - $20,000 MXN mensuales",
      shortDescription: "Ambiente tranquilo con atención personalizada",
      fullDescription:
        "Residencia Los Olivos ofrece un ambiente tranquilo y acogedor para adultos mayores que necesitan asistencia en su vida diaria. Nuestro personal altamente capacitado brinda atención personalizada las 24 horas del día, asegurando el bienestar y la comodidad de todos nuestros residentes. Contamos con amplios espacios comunes, jardines y un programa de actividades diseñado para mantener activos a nuestros residentes tanto física como mentalmente.",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      location: {
        lat: 20.5881,
        lng: -100.3899,
        address: "Av. Constituyentes 1000, Centro, Querétaro",
      },
      services: [
        "Atención médica 24/7",
        "Alimentación personalizada",
        "Actividades recreativas",
        "Jardines amplios",
        "Habitaciones privadas",
        "WiFi",
      ],
      contact: {
        phone: "(442) 123-4567",
        email: "info@residenciaolivos.com",
        website: "www.residenciaolivos.com",
        contactPerson: "María González, Directora",
      },
    },
    {
      id: 2,
      name: "Casa de Descanso El Roble",
      type: "casa",
      price: "high",
      priceRange: "$25,000 - $30,000 MXN mensuales",
      shortDescription: "Amplios jardines y actividades recreativas",
      fullDescription:
        "Casa de Descanso El Roble es una opción premium para adultos mayores que buscan un estilo de vida activo y cómodo. Nuestras instalaciones de lujo incluyen amplios jardines, áreas de recreación, y espacios diseñados específicamente para promover la socialización y el bienestar. Ofrecemos servicios de alta calidad, incluyendo atención médica especializada, terapia física en sitio, y un programa de alimentación gourmet diseñado por nutriólogos expertos en las necesidades de los adultos mayores.",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      location: {
        lat: 20.6139,
        lng: -100.4052,
        address: "Blvd. Bernardo Quintana 500, Querétaro",
      },
      services: [
        "Atención médica especializada",
        "Terapia física",
        "Alimentación gourmet",
        "Actividades culturales",
        "Transporte",
        "Habitaciones con baño privado",
      ],
      contact: {
        phone: "(442) 234-5678",
        email: "contacto@elroble.com",
        website: "www.casaelroble.com",
        contactPerson: "Carlos Ramírez, Administrador",
      },
    },
    {
      id: 3,
      name: "Departamentos Adaptados Vida Plena",
      type: "departamento",
      price: "low",
      priceRange: "$8,000 - $12,000 MXN mensuales",
      shortDescription: "Independencia con seguridad y apoyo",
      fullDescription:
        "Departamentos Adaptados Vida Plena ofrece una solución ideal para adultos mayores que desean mantener su independencia mientras disfrutan de la seguridad y el apoyo que necesitan. Nuestros departamentos están completamente adaptados con características de accesibilidad, incluyendo baños seguros, puertas anchas para sillas de ruedas, y sistemas de emergencia. Los residentes pueden vivir de manera autónoma sabiendo que hay personal de apoyo disponible cuando lo necesiten.",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      location: {
        lat: 20.5923,
        lng: -100.4158,
        address: "Av. Universidad 200, Querétaro",
      },
      services: [
        "Botón de emergencia",
        "Visitas médicas programadas",
        "Áreas comunes",
        "Limpieza semanal",
        "Accesibilidad total",
        "Seguridad 24/7",
      ],
      contact: {
        phone: "(442) 345-6789",
        email: "info@vidaplena.com",
        website: "www.departamentosvidaplena.com",
        contactPerson: "Laura Sánchez, Coordinadora",
      },
    },
    {
      id: 4,
      name: "Residencia Atardecer Dorado",
      type: "residencia",
      price: "medium",
      priceRange: "$18,000 - $22,000 MXN mensuales",
      shortDescription: "Cuidados especializados en un ambiente familiar",
      fullDescription:
        "Residencia Atardecer Dorado combina cuidados especializados con un ambiente cálido y familiar. Nuestro enfoque se centra en crear un hogar donde los adultos mayores se sientan parte de una comunidad. Ofrecemos habitaciones confortables con hermosas vistas, áreas comunes acogedoras, y un equipo de profesionales dedicados que tratan a cada residente como parte de su familia. Nuestro programa de actividades está diseñado para estimular tanto el cuerpo como la mente.",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      location: {
        lat: 20.6023,
        lng: -100.3868,
        address: "Calle Hidalgo 150, Centro Histórico, Querétaro",
      },
      services: [
        "Enfermería 24/7",
        "Terapia ocupacional",
        "Menús balanceados",
        "Áreas verdes",
        "Habitaciones con vista",
        "Actividades sociales",
      ],
      contact: {
        phone: "(442) 456-7890",
        email: "contacto@atardecerdorado.com",
        website: "www.atardecerdorado.com",
        contactPerson: "Roberto Méndez, Director",
      },
    },
    {
      id: 5,
      name: "Casa Hogar Serenidad",
      type: "casa",
      price: "low",
      priceRange: "$10,000 - $15,000 MXN mensuales",
      shortDescription: "Ambiente hogareño con cuidados personalizados",
      fullDescription:
        "Casa Hogar Serenidad ofrece un ambiente verdaderamente hogareño para adultos mayores que necesitan asistencia pero desean sentirse como en casa. Nuestra residencia de tamaño moderado permite que podamos ofrecer atención personalizada a cada uno de nuestros residentes. Contamos con personal amable y capacitado, comidas caseras preparadas con ingredientes frescos, y un programa de actividades que fomenta la socialización y el bienestar emocional.",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      location: {
        lat: 20.5723,
        lng: -100.4058,
        address: "Av. Zaragoza 300, Querétaro",
      },
      services: [
        "Atención básica de salud",
        "Alimentación casera",
        "Actividades grupales",
        "Jardín pequeño",
        "Habitaciones compartidas",
        "Lavandería",
      ],
      contact: {
        phone: "(442) 567-8901",
        email: "info@hogarserenidad.com",
        website: "www.casahogarserenidad.com",
        contactPerson: "Ana López, Administradora",
      },
    },
    {
      id: 6,
      name: "Villas Senior Querétaro",
      type: "departamento",
      price: "high",
      priceRange: "$28,000 - $35,000 MXN mensuales",
      shortDescription: "Lujo y comodidad para adultos mayores independientes",
      fullDescription:
        "Villas Senior Querétaro representa lo último en alojamiento de lujo para adultos mayores independientes. Nuestros departamentos de diseño contemporáneo ofrecen amplios espacios, acabados de alta calidad, y todas las comodidades modernas. Los residentes disfrutan de servicios premium como concierge personal, restaurante gourmet en el sitio, spa y gimnasio adaptado, y una variedad de actividades exclusivas. Todo esto en un entorno seguro con asistencia disponible cuando se necesite.",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      location: {
        lat: 20.6223,
        lng: -100.3958,
        address: "Blvd. Jardines de la Hacienda 1200, Querétaro",
      },
      services: [
        "Servicio de concierge",
        "Restaurante gourmet",
        "Spa y gimnasio adaptado",
        "Actividades premium",
        "Transporte privado",
        "Seguridad de alta gama",
      ],
      contact: {
        phone: "(442) 678-9012",
        email: "info@villassenior.com",
        website: "www.villasseniorqueretaro.com",
        contactPerson: "Javier Torres, Director General",
      },
    },
  ]

  // Get accommodation ID from URL
  function getAccommodationId() {
    const urlParams = new URLSearchParams(window.location.search)
    return Number.parseInt(urlParams.get("id"))
  }

  // Load accommodation details
  function loadAccommodationDetails() {
    const id = getAccommodationId()
    const accommodation = accommodations.find((acc) => acc.id === id)

    if (!accommodation) {
      window.location.href = "alojamiento.html"
      return
    }

    // Set page title
    document.title = `${accommodation.name} - Detalle de Alojamiento`

    // Update accommodation title
    const titleElement = document.getElementById("accommodation-title")
    if (titleElement) {
      titleElement.textContent = accommodation.name
    }

    // Load carousel images
    loadCarouselImages(accommodation.images)

    // Update description
    const descriptionElement = document.getElementById("accommodation-description")
    if (descriptionElement) {
      descriptionElement.innerHTML = `
                <h3>Descripción</h3>
                <p>${accommodation.fullDescription}</p>
            `
    }

    // Update services list
    const servicesList = document.getElementById("services-list")
    if (servicesList) {
      servicesList.innerHTML = ""
      accommodation.services.forEach((service) => {
        const li = document.createElement("li")
        li.textContent = service
        servicesList.appendChild(li)
      })
    }

    // Update price info
    const priceInfo = document.getElementById("price-info")
    if (priceInfo) {
      priceInfo.textContent = accommodation.priceRange
    }

    // Update address
    const addressElement = document.getElementById("address")
    if (addressElement) {
      addressElement.textContent = accommodation.location.address
    }

    // Initialize map
    initDetailMap(accommodation)

    // Update contact info
    const contactInfo = document.getElementById("contact-info")
    if (contactInfo) {
      contactInfo.innerHTML = `
                <p><strong>Teléfono:</strong> ${accommodation.contact.phone}</p>
                <p><strong>Email:</strong> ${accommodation.contact.email}</p>
                <p><strong>Sitio web:</strong> ${accommodation.contact.website}</p>
                <p><strong>Contacto:</strong> ${accommodation.contact.contactPerson}</p>
            `
    }
  }

  // Load carousel images
  function loadCarouselImages(images) {
    const slidesContainer = document.getElementById("carousel-slides")
    const indicatorsContainer = document.getElementById("carousel-indicators")

    if (!slidesContainer || !indicatorsContainer) return

    slidesContainer.innerHTML = ""
    indicatorsContainer.innerHTML = ""

    let slideIndex = 0

    function goToSlide(index) {
      slideIndex = index
      const slides = document.querySelectorAll(".carousel-slide")
      const indicators = document.querySelectorAll(".carousel-indicator")

      slides.forEach((slide) => (slide.style.transform = `translateX(-${slideIndex * 100}%)`))
      indicators.forEach((indicator) => indicator.classList.remove("active"))
      indicators[slideIndex].classList.add("active")
    }

    images.forEach((image, index) => {
      // Create slide
      const slide = document.createElement("div")
      slide.className = "carousel-slide"
      slide.innerHTML = `<img src="${image}" alt="Imagen ${index + 1}">`
      slidesContainer.appendChild(slide)

      // Create indicator
      const indicator = document.createElement("div")
      indicator.className = "carousel-indicator" + (index === 0 ? " active" : "")
      indicator.dataset.index = index
      indicator.addEventListener("click", () => {
        goToSlide(index)
      })
      indicatorsContainer.appendChild(indicator)
    })
  }

  // Initialize map for detail page
  function initDetailMap(accommodation) {
    const mapElement = document.getElementById("detail-map")
    if (!mapElement) return

    // Create map centered on accommodation location
    const map = L.map("detail-map").setView([accommodation.location.lat, accommodation.location.lng], 15)

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    // Add marker for accommodation
    const marker = L.marker([accommodation.location.lat, accommodation.location.lng]).addTo(map)
    marker.bindPopup(`<strong>${accommodation.name}</strong><br>${accommodation.location.address}`).openPopup()
  }

  // Initialize the detail page
  loadAccommodationDetails()
})
