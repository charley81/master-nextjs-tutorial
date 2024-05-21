import toursImg from '@/images/tours.jpg'
import Image from 'next/image'

export default function TourInfoPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Image
        src={toursImg}
        alt="tours"
        width={192}
        height={192}
        className="w-48 h-48"
        priority
      />
      <h1>Tour Info Page</h1>
      <p>{params.id}</p>
    </div>
  )
}
