export function Hero() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">Car Gallery</h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Explore our collection of beautiful car pictures
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#gallery"
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          View Gallery
        </a>
        <a href="#featured" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
          Featured Cars <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}

