"use client"

import { useState } from "react"
import { cars } from "@/lib/car-data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CarDetails } from "./car-details"

export function CarGallery() {
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null)
  const [filterMake, setFilterMake] = useState<string | null>(null)

  // Get unique car makes for filter
  const carMakes = Array.from(new Set(cars.map((car) => car.make)))

  // Filter cars based on selected make
  const filteredCars = filterMake ? cars.filter((car) => car.make === filterMake) : cars

  return (
    <div className="py-12" id="gallery">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Car Gallery</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Browse our collection of luxury and sports cars</p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <Button variant={filterMake === null ? "default" : "outline"} onClick={() => setFilterMake(null)}>
          All Makes
        </Button>
        {carMakes.map((make) => (
          <Button key={make} variant={filterMake === make ? "default" : "outline"} onClick={() => setFilterMake(make)}>
            {make}
          </Button>
        ))}
      </div>

      {/* Car grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={car.imageUrl || "/placeholder.svg"}
                alt={`${car.make} ${car.model}`}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>
                {car.make} {car.model}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">Year: {car.year}</p>
              <p className="mt-2 line-clamp-2">{car.description}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setSelectedCarId(car.id)}>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Featured cars section */}
      <div className="mt-16" id="featured">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white mb-8">
          Featured Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cars
            .filter((car) => car.featured)
            .map((car) => (
              <div
                key={car.id}
                className="flex flex-col md:flex-row gap-6 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="md:w-1/2">
                  <img
                    src={car.imageUrl || "/placeholder.svg"}
                    alt={`${car.make} ${car.model}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      {car.make} {car.model}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Year: {car.year}</p>
                    <p className="mt-4">{car.description}</p>
                  </div>
                  <Button className="mt-4 self-start" onClick={() => setSelectedCarId(car.id)}>
                    View Details
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Car details modal */}
      {selectedCarId && <CarDetails carId={selectedCarId} onClose={() => setSelectedCarId(null)} />}
    </div>
  )
}

