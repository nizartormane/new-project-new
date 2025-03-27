export interface Car {
  id: string
  make: string
  model: string
  year: number
  description: string
  imageUrl: string
  featured: boolean
}

export const cars: Car[] = [
  {
    id: "1",
    make: "Ferrari",
    model: "488 GTB",
    year: 2022,
    description:
      "The Ferrari 488 GTB is a mid-engine sports car produced by the Italian automobile manufacturer Ferrari.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "2",
    make: "Lamborghini",
    model: "Aventador",
    year: 2021,
    description:
      "The Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "3",
    make: "Porsche",
    model: "911 Turbo S",
    year: 2023,
    description:
      "The Porsche 911 Turbo S is a high-performance, twin-turbocharged variant of the Porsche 911 sports car.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "4",
    make: "Aston Martin",
    model: "DBS Superleggera",
    year: 2022,
    description:
      "The Aston Martin DBS Superleggera is a high-performance grand tourer produced by British luxury car manufacturer Aston Martin.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "5",
    make: "McLaren",
    model: "720S",
    year: 2021,
    description:
      "The McLaren 720S is a sports car designed and manufactured by British automobile manufacturer McLaren Automotive.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "6",
    make: "Bugatti",
    model: "Chiron",
    year: 2022,
    description:
      "The Bugatti Chiron is a mid-engine two-seater sports car developed and manufactured by Bugatti Automobiles S.A.S.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

export function getFeaturedCars(): Car[] {
  return cars.filter((car) => car.featured)
}

export function getCarById(id: string): Car | undefined {
  return cars.find((car) => car.id === id)
}

