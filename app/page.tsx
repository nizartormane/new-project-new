import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { CarGallery } from "@/components/car-gallery"
import { CarUpload } from "@/components/car-upload"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm">
        <Hero />
        <Suspense fallback={<div className="mt-8 text-center">Loading car gallery...</div>}>
          <CarGallery />
        </Suspense>
        <CarUpload />
      </div>
    </main>
  )
}

