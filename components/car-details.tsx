"use client"

import { useEffect, useRef } from "react"
import { getCarById } from "@/lib/car-data"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface CarDetailsProps {
  carId: string
  onClose: () => void
}

export function CarDetails({ carId, onClose }: CarDetailsProps) {
  const car = getCarById(carId)
  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  // Close modal with escape key
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [onClose])

  if (!car) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">
            {car.make} {car.model}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="aspect-video mb-6 overflow-hidden rounded-md">
            <img
              src={car.imageUrl || "/placeholder.svg"}
              alt={`${car.make} ${car.model}`}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Make:</span> {car.make}
                </li>
                <li>
                  <span className="font-medium">Model:</span> {car.model}
                </li>
                <li>
                  <span className="font-medium">Year:</span> {car.year}
                </li>
                <li>
                  <span className="font-medium">Featured:</span> {car.featured ? "Yes" : "No"}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p>{car.description}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

