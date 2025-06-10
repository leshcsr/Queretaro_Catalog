document.addEventListener("DOMContentLoaded", () => {
  // Sample data for accommodations
  const accommodations = [
    {
      id: 1,
      name: "Residencia Los Olivos",
      type: "residencia",
      price: "medium",
      priceRange: "$15,000 - $20,000 MXN mensuales",
      shortDescription: "Ambiente tranquilo con atención personalizada",
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
    },
    {
      id: 2,
      name: "Casa de Descanso El Roble",
      type: "casa",
      price: "high",
      priceRange: "$25,000 - $30,000 MXN mensuales",
      shortDescription: "Amplios jardines y actividades recreativas",
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
    },
    {
      id: 3,
      name: "Departamentos Adaptados Vida Plena",
      type: "departamento",
      price: "low",
      priceRange: "$8,000 - $12,000 MXN mensuales",
      shortDescription: "Independencia con seguridad y apoyo",
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
    },
    {
      id: 4,
      name: "Residencia Atardecer Dorado",
      type: "residencia",
      price: "medium",
      priceRange: "$18,000 - $22,000 MXN mensuales",
      shortDescription: "Cuidados especializados en un ambiente familiar",
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
    },
    {
      id: 5,
      name: "Casa Hogar Serenidad",
      type: "casa",
      price: "low",
      priceRange: "$10,000 - $15,000 MXN mensuales",
      shortDescription: "Ambiente hogareño con cuidados personalizados",
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
    },
    {
      id: 6,
      name: "Villas Senior Querétaro",
      type: "departamento",
      price: "high",
      priceRange: "$28,000 - $35,000 MXN mensuales",
      shortDescription: "Lujo y comodidad para adultos mayores independientes",
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
    },
  ]

  // Function to create accommodation cards
  function createAccommodationCards() {
    const cardsContainer = document.getElementById("accommodation-cards")
    if (!cardsContainer) return

    cardsContainer.innerHTML = ""

    // Get filter values
    const typeFilter = document.getElementById("filter-type").value
    const priceFilter = document.getElementById("filter-price").value

    // Filter accommodations
    const filteredAccommodations = accommodations.filter((acc) => {
      const typeMatch = typeFilter === "all" || acc.type === typeFilter
      const priceMatch = priceFilter === "all" || acc.price === priceFilter
      return typeMatch && priceMatch
    })

    // Create cards for filtered accommodations
    filteredAccommodations.forEach((acc) => {
      const card = document.createElement("div")
      card.className = "card"
      card.innerHTML = `
                <img src="${acc.images[0]}" alt="${acc.name}">
                <div class="card-content">
                    <h3>${acc.name}</h3>
                    <p>${acc.shortDescription}</p>
                    <p><strong>Precio:</strong> ${acc.priceRange}</p>
                    <a href="detail.html?id=${acc.id}" class="btn-small">Ver más</a>
                </div>
            `
      cardsContainer.appendChild(card)
    })
  }

  // Initialize map if on accommodation page
  function initMap() {
    const mapElement = document.getElementById("map")
    if (!mapElement) return

    // Create map centered on Querétaro
    const map = L.map("map").setView([20.5881, -100.3899], 13)

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    // Add markers for each accommodation
    accommodations.forEach((acc) => {
      const marker = L.marker([acc.location.lat, acc.location.lng]).addTo(map)
      marker.bindPopup(`
                <strong>${acc.name}</strong><br>
                ${acc.shortDescription}<br>
                <a href="detail.html?id=${acc.id}">Ver detalles</a>
            `)
    })
  }

  // Set up filter event listeners
  const typeFilter = document.getElementById("filter-type")
  const priceFilter = document.getElementById("filter-price")

  if (typeFilter && priceFilter) {
    typeFilter.addEventListener("change", createAccommodationCards)
    priceFilter.addEventListener("change", createAccommodationCards)
  }

  // Initialize the page
  createAccommodationCards()
  // Check if Leaflet is loaded before initializing the map
  if (typeof L !== "undefined") {
    initMap()
  } else {
    console.error("Leaflet library not found. Make sure it is included in your HTML.")
  }
})
