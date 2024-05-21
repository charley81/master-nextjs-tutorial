import Link from 'next/link'
import Image from 'next/image'

type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}

const url = 'https://www.course-api.com/react-tours-project'

const fetchTours = async () => {
  const response = await fetch(url)
  const data: Tour[] = await response.json()
  return data
}

export default async function TourPage() {
  const tours = await fetchTours()

  return (
    <section>
      <h1>Tours</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {tours.map((tour) => (
          <Link key={tour.id} href={`/tour/${tour.id}`}>
            <div className="relative h-48 mb-2">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                sizes="100vw"
                priority
                className="object-cover rounded"
              />
            </div>
            <h2>{tour.name}</h2>
          </Link>
        ))}
      </div>
    </section>
  )
}
